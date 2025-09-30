import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      message,
      consentProcessing,
      turnstileToken,
    } = body || {}

    if (
      !firstName ||
      !lastName ||
      !email ||
      !/.+@.+\..+/.test(email) ||
      !message ||
      String(message).trim().length < 3 ||
      consentProcessing !== true ||
      !turnstileToken
    ) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    // Verify Cloudflare Turnstile
    const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY
    if (!TURNSTILE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Turnstile is not configured on server' },
        { status: 500 },
      )
    }

    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET_KEY,
        response: String(turnstileToken),
        // Optionally you can pass remoteip for additional security
      }),
    })

    const verifyJson = await verifyRes.json().catch(() => null)
    if (!verifyRes.ok || !verifyJson?.success) {
      return NextResponse.json(
        { error: 'Failed Turnstile verification' },
        { status: 403 },
      )
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const RESEND_FROM = process.env.RESEND_FROM
    const RESEND_TO = process.env.RESEND_TO || RESEND_FROM

    if (!RESEND_API_KEY || !RESEND_FROM) {
      return NextResponse.json(
        { error: 'Email is not configured on server' },
        { status: 500 },
      )
    }

    const subject = `Nowa wiadomość z formularza kontaktowego od ${firstName} ${lastName}`
    const html = `
      <div style="font-family:ui-sans-serif,system-ui;line-height:1.5">
        <p style="margin:0 0 8px 0"><strong>Imię i nazwisko:</strong> ${firstName} ${lastName}</p>
        <p style="margin:0 0 8px 0"><strong>Email:</strong> ${email}</p>
        <p style="margin:12px 0 0 0;white-space:pre-wrap">${
          String(message).replace(/</g, '&lt;').replace(/>/g, '&gt;')
        }</p>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [RESEND_TO],
        reply_to: email,
        subject,
        html,
      }),
    })

    if (!res.ok) {
      const error = await res.json().catch(() => ({}))
      return NextResponse.json(
        { error: error?.message || 'Failed to send email' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json(
      { error: 'Unexpected error', details: err.message },
      { status: 500 },
    )
  }
}


