import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('@/components/contact-form'), {
    ssr: false,
})

export const metadata = {
    title: 'Kontakt',
}

export default function KontaktPage() {
    return (
        <main className="overflow-hidden">
            <GradientBackground />
            <Container>
                <Navbar />
            </Container>
            <Container className="pt-16 sm:pt-24">
                <PlusGrid>
                    <PlusGridRow>
                        <PlusGridItem className="py-4">
                            <Subheading>Kontakt</Subheading>
                            <Heading className="mt-2">Napisz do nas</Heading>
                            <Lead className="mt-6">
                                Masz pytania? Wypełnij formularz, a skontaktujemy się z Tobą wkrótce.
                            </Lead>
                        </PlusGridItem>
                    </PlusGridRow>
                </PlusGrid>
            </Container>
            <div className="mx-2 my-8">
                <Gradient className="relative rounded-4xl">
                    <div className="absolute inset-2 rounded-4xl bg-white/85" />
                    <Container className="relative py-12">
                        <ContactForm />
                    </Container>
                </Gradient>
            </div>
            <Container className="py-16 sm:py-24">
                <PlusGrid>
                    <PlusGridRow>
                        <PlusGridItem className="py-4">
                            <Subheading>Firma</Subheading>
                            <Heading className="mt-2">epicX sp. z o.o.</Heading>
                            <Lead className="mt-6">
                                ul. Opolska 149<br />
                                52-013 Wrocław<br />
                                NIP: PL8993002846
                            </Lead>
                        </PlusGridItem>
                    </PlusGridRow>
                </PlusGrid>
            </Container>
            <Footer />
        </main>
    )
}


