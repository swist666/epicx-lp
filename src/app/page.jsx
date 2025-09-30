import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
    description:
        'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
    return (
        <div className="relative">
            <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
            <Container className="relative">
                <Navbar
                    banner={
                        <Link
                            href="mailto:epicx@epicx.pl"
                            className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
                        >
                            Napisz do nas
                            <ChevronRightIcon className="size-4" />
                        </Link>
                    }
                />
                <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
                    <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-8xl/[0.8]">
                        Redefiniujemy zasady. Tworzymy cyfrowy blok operacyjny przyszłości.
                    </h1>
                    <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
                        Od planowania po zakończenie zabiegu – pełna cyfryzacja operacji, która zastępuje telefony i eliminuje chaos. Wszystko w jednym systemie: harmonogram, integracja z HIS, monitorowanie w czasie rzeczywistym i analityka wspierająca zarządzanie szpitalem.
                    </p>
                    <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                        <Button href="mailto:epicx@epicx.pl">Umów prezentację</Button>
                        {/* <Button variant="secondary" href="/pricing">
                Poznaj ofertę
            </Button> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

function FeatureSection() {
    return (
        <div className="overflow-hidden">
            <Container className="pb-24">
                <Heading as="h2" className="max-w-3xl">
                    Blok Operacyjny – nasza specjalizacja
                </Heading>
                <p className="mt-8 text-2xl/7 font-medium text-gray-950/75 sm:text-4xl/8">
                    Od ponad 10 lat tworzymy rozwiązania, które zmieniają sposób zarządzania operacjami.
                </p>

                <p className="mt-8 text-lg/7 font-medium text-gray-950/75 sm:text-xl/8">
                    Doskonale rozumiemy potrzeby szpitali, bo sami mamy doświadczenie zarówno jako menedżerowie ochrony zdrowia, jak i praktykujący lekarze. Każdego dnia współpracujemy z zespołami medycznymi, aby usprawniać procesy i zwiększać efektywność pracy bloku operacyjnego.
                </p>

                <p className="mt-8 text-lg/7 font-medium text-gray-950/75 sm:text-xl/8">
                    Nie jesteśmy biernymi obserwatorami – aktywnie uczestniczymy w codziennym funkcjonowaniu sal operacyjnych, co pozwala nam trafnie identyfikować realne potrzeby personelu. Dzięki temu potrafimy przełożyć język kliniczny na język technologii, tworząc systemy, które naprawdę wspierają codzienną pracę.
                </p>

                <p className="mt-8 text-lg/7 font-medium text-gray-950/75 sm:text-xl/8">
                    Nasz zespół IT ma wieloletnie doświadczenie w projektowaniu rozwiązań dla medycyny. Stawiamy na płynną komunikację, precyzyjne wdrożenia i pełne zrozumienie specyfiki branży.
                </p>

                <p className="mt-8 text-lg/7 font-medium text-gray-950/75 sm:text-xl/8">
                    Tworzymy innowacje – nie kopiujemy!
                </p>
                <Screenshot
                    width={1216}
                    height={768}
                    src="/screenshots/app.png"
                    className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
                />
            </Container>
        </div>
    )
}

function BentoSection() {
    return (
        <Container>
            <Subheading>Widok live na bloku operacyjnym</Subheading>
            <Heading as="h3" className="mt-2 max-w-3xl">
                Monitoruj postęp operacji w czasie rzeczywistym
            </Heading>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                <BentoCard
                    eyebrow="Podgląd na żywo"
                    title="Kompleksowe monitorowanie wydarzeń na bloku operacyjnym"
                    description="Status każdej operacji w czasie rzeczywistym – od przygotowania pacjenta po zakończenie zabiegu. Zespół ma zawsze aktualne informacje o etapie operacji, dostępności sal i harmonogramie, bez konieczności wykonywania telefonów."
                    graphic={
                        <div className="h-80 bg-[url(/screenshots/live.png)] bg-[size:1042px_796px] bg-no-repeat" />
                    }
                    fade={['bottom']}
                    className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
                />
                <BentoCard
                    eyebrow="Łatwe planowanie operacji"
                    title="Nowy standard planowania zabiegów."
                    description="Intuicyjny harmonogram sprawia, że planowanie jest szybkie i przejrzyste. Każda zmiana widoczna jest natychmiast dla całego personelu, co eliminuje pomyłki i problemy z komunikacją."
                    graphic={
                        <div className="absolute inset-0 bg-[url(/screenshots/planning.png)] bg-[size:1100px_650px] bg-[left_-278px_top_-273px] bg-no-repeat" />
                    }
                    fade={['bottom']}
                    className="lg:col-span-3 lg:rounded-tr-4xl"
                />
                <BentoCard
                    eyebrow="Komunikacja bez telefonów"
                    title="Wzywanie pacjentów i przekazywanie informacji odbywa się przez dedykowane tablety, bez konieczności wykonywania telefonów."
                    description="Blok operacyjny i oddziały komunikują się w czasie rzeczywistym. Wszystko odbywa się cyfrowo – prosto, szybko i bez ryzyka pomyłek. Personel zawsze wie, kiedy pacjent jest gotowy i na jakim etapie znajduje się zabieg."
                    graphic={
                        <div className="absolute inset-0 bg-[url(/screenshots/call.png)] bg-[size:661px_422px] bg-[left_-50px_top_-48px] bg-no-repeat" />
                    }
                    className="lg:col-span-2 lg:rounded-bl-4xl"
                />
                <BentoCard
                    eyebrow="Cyfrowy oddział"
                    title="Podgląd w czasie rzeczywistym bloku operacyjnego i sal chorych."
                    description="Ekrany zamontowane na oddziale pokazują postęp operacji i status pacjentów, co pozwala personelowi szybciej reagować i lepiej organizować pracę. Dodatkowo moduł łóżka wspiera zarządzanie dostępnością i obłożeniem sal chorych."
                    graphic={
                        <div className="absolute inset-0 bg-[url(/screenshots/bads.png)] bg-[size:840px_599px] bg-[left_-0px_top_-55px] bg-no-repeat" />
                    }
                    className="lg:col-span-2"
                />
                <BentoCard
                    eyebrow="Bezpieczna chmura"
                    title="Spełniamy najwyższe standardy bezpieczeństwa danych."
                    description="System działa w chmurze, zgodnie z rygorystycznymi wymaganiami ochrony danych medycznych. Dostęp dla personelu jest szyfrowany i bezpieczny z każdego miejsca – w szpitalu i poza nim."
                    graphic={<LogoCluster />}
                    className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
                />
            </div>
        </Container>
    )
}

function DarkBentoSection() {
    return (
        <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
            <Container>
                <Subheading dark>Outreach</Subheading>
                <Heading as="h3" dark className="mt-2 max-w-3xl">
                    Customer outreach has never been easier.
                </Heading>

                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    <BentoCard
                        dark
                        eyebrow="Networking"
                        title="Sell at the speed of light"
                        description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
                        graphic={
                            <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
                        }
                        fade={['top']}
                        className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
                    />
                    <BentoCard
                        dark
                        eyebrow="Integrations"
                        title="Meet leads where they are"
                        description="With thousands of integrations, no one will be able to escape your cold outreach."
                        graphic={<LogoTimeline />}
                        // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
                        className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
                    />
                    <BentoCard
                        dark
                        eyebrow="Meetings"
                        title="Smart call scheduling"
                        description="Automatically insert intro calls into your leads' calendars without their consent."
                        graphic={<LinkedAvatars />}
                        className="lg:col-span-2 lg:rounded-bl-4xl"
                    />
                    <BentoCard
                        dark
                        eyebrow="Engagement"
                        title="Become a thought leader"
                        description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
                        graphic={
                            <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
                        }
                        fade={['top']}
                        className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
                    />
                </div>
            </Container>
        </div>
    )
}

export default function Home() {
    return (
        <div className="overflow-hidden">
            <Hero />
            <main>
                {/* <Container className="mt-10">
                    <LogoCloud />
                </Container> */}
                <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
                    <FeatureSection />
                    <BentoSection />
                </div>
            </main>
            <Footer />
        </div>
    )
}
