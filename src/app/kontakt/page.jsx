import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
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
            <Container className="pb-24">
                <PlusGrid>
                    <PlusGridRow>
                        <PlusGridItem>
                            <ContactForm />
                        </PlusGridItem>
                    </PlusGridRow>
                </PlusGrid>
            </Container>
            <Footer />
        </main>
    )
}


