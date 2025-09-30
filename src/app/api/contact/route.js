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
      consentMarketing,
    } = body || {}

    if (
      !firstName ||
      !lastName ||
      !email ||
      !/.+@.+\..+/.test(email) ||
      !message ||
      String(message).trim().length < 5 ||
      consentProcessing !== true
    ) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
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
        <p style="margin:0 0 8px 0"><strong>Zgoda na przetwarzanie danych:</strong> ${
          consentProcessing ? 'TAK' : 'NIE'
        }</p>
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


