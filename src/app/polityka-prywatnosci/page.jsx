import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { Link } from '@/components/link'

export const metadata = {
    title: 'Polityka prywatności',
}

export default function PrivacyPolicyPage() {
    return (
        <main className="overflow-hidden">
            <GradientBackground />
            <Container>
                <Navbar />
            </Container>

            <Container className="pt-16 sm:pt-24">
                <Subheading>Dokumenty</Subheading>
                <Heading as="h1" className="mt-2">
                    Polityka prywatności www.epicX.pl
                </Heading>
            </Container>

            <Container className="py-12">
                <article className="text-gray-950">
                    <section className="space-y-4 text-sm/6 text-gray-600">
                        <p>
                            Zgodnie z art. 13 ust. 1−2 rozporządzenia Parlamentu Europejskiego i Rady (UE)
                            2016/679 z 27.04.2016 r. w sprawie ochrony osób fizycznych w związku z
                            przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych
                            oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)
                            (Dz.U. UE L 119, s. 1) – dalej „RODO” – informujemy, że:
                        </p>
                        <p>
                            <strong>Administrator danych osobowych:</strong> epicX Sp. z o.o., ul. Opolska 149,
                            52‑013 Wrocław, NIP: 8993002846 (dalej: „epicX”, „Administrator”).
                        </p>
                        <p>
                            <strong>Kontakt w sprawie danych osobowych:</strong> pełni bezpośrednio
                            Administrator. W przypadku chęci kontaktu prosimy o skierowanie korespondencji za
                            pomocą formularza kontaktowego lub listownie na adres siedziby spółki.
                        </p>
                    </section>

                    <hr className="my-8 border-t border-gray-200" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">1. Cele i podstawy przetwarzania</h2>
                        <p className="text-sm/6 text-gray-600">
                            W przypadku kierowania do Administratora za pośrednictwem formularza
                            kontaktowego, poczty e‑mail lub tradycyjnej korespondencji, dane osobowe
                            zawarte w tej korespondencji są przetwarzane wyłącznie w celu komunikacji i
                            rozwiązania sprawy, której dotyczy korespondencja. Podstawą prawną
                            przetwarzania jest prawnie uzasadniony interes Administratora (art. 6 ust. 1
                            lit. f RODO) polegający na prowadzeniu korespondencji i kontaktu telefonicznego
                            kierowanego do niego w związku z jego działalnością. Administrator przetwarza
                            jedynie dane osobowe istotne dla sprawy, której dotyczy korespondencja.
                        </p>
                        <p className="text-sm/6 text-gray-600">
                            Prawnie uzasadniony interes w tym przypadku polega na umożliwieniu prawidłowego i
                            efektywnego wykonywania kontaktu z Państwem i ewentualnym zabezpieczeniu roszczeń
                            kierowanych wobec epicX.
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">2. Okres przetwarzania danych</h2>
                        <p className="text-sm/6 text-gray-600">
                            Pani/Pana dane osobowe będą przetwarzane przez okres niezbędny do realizacji
                            celów przetwarzania, lecz nie krócej niż okresy wynikające z przepisów prawa
                            regulujące niezbędne okresy przetwarzania. Maksymalny okres przetwarzania danych
                            kontaktowych w przypadku sytuacji braku zawarcia dalszych uzgodnień lub umów z
                            podmiotem danych wynosi 36 m‑cy licząc od momentu otrzymania danych.
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">3. Odbiorcy danych</h2>
                        <p className="text-sm/6 text-gray-600">
                            Państwa dane mogą zostać powierzone podmiotom, z którymi współpracujemy np. w
                            ramach obsługi poczty elektronicznej oraz w zakresie wsparcia dla utrzymania
                            infrastruktury teleinformatycznej i oprogramowania IT. Nie przekazujemy żadnych
                            danych osobowych do państw trzecich, poza EOG.
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">4. Zgodnie z RODO, przysługuje Pani/Panu</h2>
                        <ul className="list-disc pl-6 text-sm/6 text-gray-600">
                            <li>
                                w każdej chwili prawo do wniesienia sprzeciwu wobec przetwarzania danych osobowych; Administrator danych osobowych przestanie przetwarzać Pani/Pana dane osobowe w celach wskazanych w pkt 1, chyba że w stosunku do tych danych istnieją prawnie uzasadnione podstawy, które są nadrzędne wobec Pani/Pana interesów, praw i wolności lub dane będą niezbędne do ewentualnego ustalenia, dochodzenia lub obrony roszczeń,
                            </li>
                            <li>prawo dostępu do swoich danych oraz otrzymania ich kopii,</li>
                            <li>prawo do sprostowania (poprawiania) swoich danych,</li>
                            <li>
                                prawo do usunięcia danych, ograniczenia przetwarzania danych, jeśli nie ma innej podstawy prawnej przetwarzania, w tym przetwarzania po wycofaniu udzielonej zgody,
                            </li>
                            <li>
                                prawo do wniesienia skargi do organu nadzorczego – Urząd Ochrony Danych Osobowych.
                            </li>
                        </ul>
                        <p className="text-sm/6 text-gray-600">
                            Ponieważ podstawą przetwarzania Państwa danych osobowych jest również przesłanka
                            naszego prawnie uzasadnionego interesu, przysługuje Państwu prawo wniesienia
                            sprzeciwu wobec przetwarzania Państwa danych osobowych, przetwarzanych na tej
                            podstawie (taki sprzeciw wymaga uzasadnienia Państwa szczególnej sytuacji).
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">5. Informacja o wymogu/dobrowolności podania danych</h2>
                        <p className="text-sm/6 text-gray-600">
                            Podanie danych w formularzu kontaktowym na stronie epicX.pl ma charakter
                            dobrowolny. Niepodanie danych osobowych skutkuje brakiem możliwości nawiązania
                            kontaktu przez Administratora.
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">6. Profilowanie i zautomatyzowane podejmowanie decyzji</h2>
                        <p className="text-sm/6 text-gray-600">
                            W procesie przetwarzania danych osobowych Administrator danych osobowych nie
                            podejmuje decyzji w sposób zautomatyzowany, z uwzględnieniem profilowania, w
                            oparciu o dane przekazane do przetwarzania.
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">7. Pliki cookies</h2>
                        <p className="text-sm/6 text-gray-600">
                            Serwis może używać plików cookies lub lokalnej pamięci przeglądarki do
                            zapewnienia prawidłowego działania, poprawy wygody korzystania i celów
                            statystycznych.
                        </p>
                        <p className="text-sm/6 text-gray-600">
                            Celem przechowywania i uzyskiwania dostępu do plików cookies jest personalizacja
                            strony internetowej w zakresie poprawnego wyświetlania na monitorze użytkownika.
                        </p>
                        <p className="text-sm/6 text-gray-600">
                            Zarządzanie: ustawieniami cookies możesz zarządzać w swojej przeglądarce
                            (blokowanie/usuwanie). Ograniczenie stosowania niektórych plików może wpłynąć na
                            działanie Serwisu.
                        </p>
                        <p className="text-sm/6 text-gray-600">W różnych przeglądarkach możesz tego dokonać z pomocą linków, np.:</p>
                        <ul className="list-disc pl-6 text-sm/6 text-gray-600">
                            <li>
                                <Link
                                    href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop?redirectslug=W%C5%82%C4%85czanie+i+wy%C5%82%C4%85czanie+obs%C5%82ugi+ciasteczek&redirectlocale=pl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Firefox
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://support.google.com/chrome/answer/95647?hl=pl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Chrome
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://help.opera.com/pl/latest/web-preferences/#cookies"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Opera
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://support.microsoft.com/pl-pl/windows/zarz%C4%85dzanie-plikami-cookie-w-przegl%C4%85darce-microsoft-edge-wy%C5%9Bwietlanie-zezwalanie-blokowanie-usuwanie-i-u%C5%BCywanie-168dab11-0753-043d-7c16-ede5947fc64d"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Edge
                                </Link>
                            </li>
                        </ul>
                        <p className="text-sm/6 text-gray-600">
                            Mechanizmy antyspamowe (opcjonalne) – chronią formularze przed nadużyciami;
                            dostawca może otrzymywać ograniczone dane urządzenia/aktywności.
                        </p>
                    </section>
                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">8. Przetwarzanie danych osobowych</h2>
                        <p className="text-sm/6 text-gray-600">Informacje na temat przetwarzania danych osobowych przez LUX MED - <Link href="/przetwarzanie-danych-osobowych-w-zwiazku-z-prowadzona-wspolpraca-biznesowa.pdf" target="_blank" rel="noopener noreferrer">zobacz PDF</Link></p>
                    </section>
                </article>
            </Container>

            <Footer />
        </main>
    )
}



