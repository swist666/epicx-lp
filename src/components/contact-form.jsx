'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/button'

export default function ContactForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [consentProcessing, setConsentProcessing] = useState(false)
    const [consentMarketing, setConsentMarketing] = useState(false)
    const [status, setStatus] = useState({ state: 'idle' })

    const isValid = useMemo(() => {
        const emailValid = /.+@.+\..+/.test(email)
        return (
            firstName.trim().length > 1 &&
            lastName.trim().length > 1 &&
            emailValid &&
            message.trim().length > 5 &&
            consentProcessing
        )
    }, [firstName, lastName, email, message, consentProcessing])

    async function handleSubmit(e) {
        e.preventDefault()
        if (!isValid || status.state === 'loading') return
        setStatus({ state: 'loading' })

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    message,
                    consentProcessing,
                    consentMarketing,
                }),
            })

            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                throw new Error(data?.error || 'Failed to send message')
            }

            setStatus({ state: 'success' })
            setFirstName('')
            setLastName('')
            setEmail('')
            setMessage('')
            setConsentProcessing(false)
            setConsentMarketing(false)
        } catch (err) {
            setStatus({ state: 'error', error: err.message })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-10 max-w-2xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Imię</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                        placeholder="Jan"
                        autoComplete="given-name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nazwisko</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                        placeholder="Kowalski"
                        autoComplete="family-name"
                    />
                </div>
            </div>

            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                    placeholder="twoj@przyklad.pl"
                    autoComplete="email"
                />
            </div>

            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">Wiadomość</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="mt-1 block w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                    placeholder="Napisz wiadomość..."
                />
            </div>

            <div className="mt-6 space-y-3">
                <label className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        checked={consentProcessing}
                        onChange={(e) => setConsentProcessing(e.target.checked)}
                        className="mt-1 size-4 rounded border-black/20 text-gray-900 focus:ring-gray-900/20"
                        required
                    />
                    <span className="text-sm text-gray-700">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                        realizacji zapytania zgodnie z polityką prywatności.
                    </span>
                </label>
                <label className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        checked={consentMarketing}
                        onChange={(e) => setConsentMarketing(e.target.checked)}
                        className="mt-1 size-4 rounded border-black/20 text-gray-900 focus:ring-gray-900/20"
                    />
                    <span className="text-sm text-gray-700">
                        Wyrażam zgodę na otrzymywanie informacji handlowych drogą
                        elektroniczną (opcjonalnie).
                    </span>
                </label>
            </div>

            <div className="my-8 flex items-center gap-4">
                <Button type="submit" disabled={!isValid || status.state === 'loading'}>
                    {status.state === 'loading' ? 'Wysyłanie…' : 'Wyślij wiadomość'}
                </Button>
                {status.state === 'success' && (
                    <p className="text-sm text-green-700">Wiadomość wysłana. Skontaktujemy się wkrótce.</p>
                )}
                {status.state === 'error' && (
                    <p className="text-sm text-red-700">Wystąpił błąd: {status.error}</p>
                )}
            </div>
        </form>
    )
}


