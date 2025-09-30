import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'

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
                    Polityka prywatności
                </Heading>
            </Container>

            <Container className="py-12">
                <article className="text-gray-950">
                    <section className="space-y-4 text-sm/6 text-gray-600">
                        <p className="text-xl/7 font-medium text-gray-950">
                            Polityka prywatności serwisu internetowego
                        </p>
                        <p>
                            <strong>Administrator:</strong> epicX Sp. z o.o., ul. Opolska 149, 52‑013
                            Wrocław, NIP: 8993002846 (dalej: „epicX”, „Administrator”, „my”).
                        </p>
                        <p>
                            <strong>Kontakt w sprawach danych:</strong> e‑mail: epicx [at] epicx. pl, tel.: +48
                            505 337 333, korespondencyjnie na adres siedziby. Jeżeli powołamy Inspektora
                            Ochrony Danych – opublikujemy jego dane na stronie.
                        </p>
                        <p>
                            <strong>Zakres dokumentu:</strong> Polityka opisuje zasady przetwarzania danych osób
                            odwiedzających naszą stronę internetową, korzystających z formularzy oraz
                            otrzymujących od nas informacje drogą elektroniczną. Zasady dotyczące plików
                            cookies są zawarte w rozdz. 10.
                        </p>
                    </section>

                    <hr className="my-8 border-t border-gray-200" />

                    <section className="space-y-6">
                        <h2 className="text-2xl font-medium tracking-tight">1. Podstawy prawne i cele przetwarzania</h2>
                        <p className="text-sm/6 text-gray-600">
                            Przetwarzamy dane wyłącznie w granicach RODO i krajowych przepisów (w
                            szczególności ustawy o świadczeniu usług drogą elektroniczną i Prawa
                            telekomunikacyjnego). Cele i podstawy prawne:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm/6">
                                <thead>
                                    <tr className="text-gray-500">
                                        <th className="px-0 py-2">Cel</th>
                                        <th className="px-0 py-2">Podstawa prawna</th>
                                        <th className="px-0 py-2">Na czym polega</th>
                                    </tr>
                                </thead>
                                <tbody className="border-t border-gray-200">
                                    <tr className="border-b border-gray-100">
                                        <td className="px-0 py-3">Udzielenie odpowiedzi na zapytanie / prowadzenie korespondencji</td>
                                        <td className="px-0 py-3">art. 6 ust. 1 lit. f RODO (uzasadniony interes) lub art. 6 ust. 1 lit. b RODO (działania przed umową)</td>
                                        <td className="px-0 py-3">Odpowiadamy na wiadomości wysłane przez formularz/kontakt e‑mail.</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="px-0 py-3">Realizacja umowy lub nawiązanie współpracy B2B</td>
                                        <td className="px-0 py-3">art. 6 ust. 1 lit. b RODO</td>
                                        <td className="px-0 py-3">Ustalenia dotyczące usług, wdrożeń, ofert, rozliczeń.</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="px-0 py-3">Utrwalanie korespondencji dla celów dowodowych</td>
                                        <td className="px-0 py-3">art. 6 ust. 1 lit. f RODO</td>
                                        <td className="px-0 py-3">Obrona/doch. roszczeń, rozliczalność.</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="px-0 py-3">Marketing bezpośredni własnych usług drogą elektroniczną/telefoniczną</td>
                                        <td className="px-0 py-3">art. 6 ust. 1 lit. a RODO (zgoda) + przepisy UŚUDE/PT</td>
                                        <td className="px-0 py-3">Wysyłka informacji handlowych, kontakt tel., o ile wyraziłeś zgodę.</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="px-0 py-3">Zapewnienie bezpieczeństwa serwisu i przeciwdziałanie nadużyciom</td>
                                        <td className="px-0 py-3">art. 6 ust. 1 lit. f RODO</td>
                                        <td className="px-0 py-3">Analiza logów serwera, mechanizmy antyspamowe, ograniczanie ryzyka.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-0 py-3">Realizacja obowiązków prawnych</td>
                                        <td className="px-0 py-3">art. 6 ust. 1 lit. c RODO</td>
                                        <td className="px-0 py-3">Np. odpowiedzi na wezwania organów, archiwizacja wymag. prawem.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm/6 text-gray-600">
                            Zgody możesz wycofać w każdym momencie – bez wpływu na legalność przetwarzania
                            przed cofnięciem.
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">2. Kategorie przetwarzanych danych</h2>
                        <p className="text-sm/6 text-gray-600">
                            Dane podawane w formularzach: imię i nazwisko, adres e‑mail, telefon,
                            firma/stanowisko (jeśli podane), treść wiadomości i załączniki.
                        </p>
                        <p className="text-sm/6 text-gray-600">
                            Dane techniczne: adres IP, data i godzina, identyfikatory sesji/wiadomości,
                            nagłówek User‑Agent, podstawowe dane do zabezpieczeń antyspamowych.
                        </p>
                        <p className="text-sm/6 text-gray-600">
                            Dane kontrahentów: służbowe dane kontaktowe (np. e‑mail w domenie firmowej,
                            stanowisko) – jeśli nawiązujemy relację B2B.
                        </p>
                        <p className="text-sm/6 text-gray-600">
                            Podanie danych jest dobrowolne, ale niezbędne do realizacji wskazanych celów
                            (np. obsługi zapytania).
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">3. Źródła danych</h2>
                        <p className="text-sm/6 text-gray-600">
                            Co do zasady pozyskujemy dane bezpośrednio od Ciebie (formularz, e‑mail,
                            rozmowa tel.). Dodatkowo powstają dane eksploatacyjne generowane przez
                            urządzenia i oprogramowanie (logi serwera, mechanizmy bezpieczeństwa).
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">4. Odbiorcy danych</h2>
                        <p className="text-sm/6 text-gray-600">
                            Dane mogą być powierzane podmiotom wspierającym nas w działalności, w tym
                            dostawcom IT (hosting, chmura, utrzymanie serwisu, poczta e‑mail, systemy
                            helpdesk/CRM), doradcom (prawnym, podatkowym), a także udostępniane organom
                            uprawnionym na podstawie przepisów prawa. Z podmiotami przetwarzającymi
                            zawieramy umowy powierzenia (art. 28 RODO).
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">5. Przekazywanie poza EOG</h2>
                        <p className="text-sm/6 text-gray-600">
                            Zasadniczo nie przekazujemy danych poza Europejski Obszar Gospodarczy. Jeżeli w
                            wyjątkowych przypadkach będzie to konieczne (np. przy użyciu wybranych usług
                            chmurowych), zastosujemy mechanizmy zgodności przewidziane przez RODO, w
                            szczególności standardowe klauzule umowne oraz – w razie potrzeby – dodatkowe
                            środki zabezpieczające.
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">6. Okresy przechowywania</h2>
                        <p className="text-sm/6 text-gray-600">
                            Korespondencja i zgłoszenia z formularzy: do 12 miesięcy od zakończenia sprawy,
                            a wybrane wątki do czasu upływu terminu przedawnienia roszczeń (co do zasady do
                            6 lat), gdy wymaga tego obrona/doch. roszczeń.
                        </p>
                        <p className="text-sm/6 text-gray-600">
                            Dane przetwarzane na podstawie zgody (marketing): do cofnięcia zgody lub
                            zgłoszenia sprzeciwu, a następnie przez okres niezbędny do rozliczalności.
                        </p>
                        <p className="text-sm/6 text-gray-600">
                            Dane związane z obowiązkami prawnymi: przez czas wymagany właściwymi
                            przepisami.
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">7. Twoje prawa</h2>
                        <p className="text-sm/6 text-gray-600">
                            Masz prawo żądać: dostępu do danych, ich sprostowania, usunięcia, ograniczenia,
                            przenoszenia; możesz wnieść sprzeciw wobec przetwarzania opartego na
                            uzasadnionym interesie (w tym wobec marketingu bezpośredniego). Przysługuje Ci też
                            prawo skargi do Prezesa UODO (ul. Stawki 2, 00‑193 Warszawa). Zgody możesz cofnąć
                            w każdym momencie.
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">8. Zautomatyzowane decyzje</h2>
                        <p className="text-sm/6 text-gray-600">
                            Nie podejmujemy wobec Ciebie decyzji w sposób zautomatyzowany i nie prowadzimy
                            profilowania na podstawie danych z serwisu.
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">9. Bezpieczeństwo</h2>
                        <p className="text-sm/6 text-gray-600">
                            Stosujemy adekwatne środki techniczne i organizacyjne – m.in. szyfrowanie
                            transmisji (TLS), kontrolę dostępu, segmentację uprawnień, kopie zapasowe,
                            monitoring incydentów i regularne aktualizacje oprogramowania.
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">10. Pliki cookies i podobne technologie</h2>
                        <p className="text-sm/6 text-gray-600">
                            Serwis może używać plików cookies lub lokalnej pamięci przeglądarki do
                            zapewnienia prawidłowego działania, poprawy wygody korzystania i celów
                            statystycznych.
                        </p>
                        <p className="text-sm/6 text-gray-600">
                            Rodzaje: cookies „sesyjne” i „stałe”; techniczne/niezbędne; opcjonalnie –
                            analityczne i funkcjonalne.
                        </p>
                        <p className="text-sm/6 text-gray-600">
                            Zarządzanie: ustawieniami cookies możesz zarządzać w swojej przeglądarce
                            (blokowanie/usuwanie). Ograniczenie stosowania niektórych plików może wpłynąć na
                            działanie Serwisu.
                        </p>
                        <p className="text-sm/6 text-gray-600">
                            Analityka (opcjonalne) – zbieramy zagregowane statystyki odwiedzin. Dane są
                            pseudonimizowane; możesz zablokować narzędzia analityczne w ustawieniach
                            przeglądarki lub poprzez opt‑out.
                        </p>
                        <p className="text-sm/6 text-gray-600">
                            Mechanizmy antyspamowe (opcjonalne) – chronią formularze przed nadużyciami;
                            dostawca może otrzymywać ograniczone dane urządzenia/aktywności.
                        </p>
                        <p className="text-sm/6 text-gray-600">
                            Szczegóły dotyczące konkretnych narzędzi (ich dostawców oraz zakresu danych)
                            przedstawimy na żądanie lub w dedykowanej podstronie, jeśli te usługi zostaną
                            wdrożone.
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">11. Komunikacja elektroniczna</h2>
                        <p className="text-sm/6 text-gray-600">
                            Wysyłkę informacji handlowych e‑mail/SMS/telefon realizujemy wyłącznie za Twoją
                            uprzednią zgodą wymag. przez UŚUDE/PT. Zgodę możesz odwołać w każdym czasie; link
                            rezygnacji znajduje się w każdej wiadomości e‑mail.
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">12. Osoby małoletnie</h2>
                        <p className="text-sm/6 text-gray-600">
                            Serwis nie jest skierowany do osób poniżej 16 lat; nie zbieramy świadomie ich
                            danych. Jeżeli dowiemy się o utrwaleniu takich danych – usuniemy je bez zbędnej
                            zwłoki.
                        </p>
                    </section>

                    <section className="mt-10 space-y-4">
                        <h2 className="text-2xl font-medium tracking-tight">13. Zmiany Polityki</h2>
                        <p className="text-sm/6 text-gray-600">
                            Zastrzegamy prawo do aktualizacji Polityki w razie zmian przepisów, technologii
                            lub procesów. O istotnych zmianach poinformujemy w Serwisie. Aktualna wersja jest
                            publikowana na tej stronie.
                        </p>
                        <p className="text-sm/6 text-gray-600">Data ostatniej aktualizacji: 30 września 2025 r.</p>
                    </section>

                    <hr className="my-10 border-t border-gray-200" />

                    <section className="space-y-4">
                        <h2 className="text-xl font-medium tracking-tight">Klauzula informacyjna dla formularza kontaktowego (skrót)</h2>
                        <ul className="list-disc pl-6 text-sm/6 text-gray-600">
                            <li>
                                <strong>Administrator:</strong> epicX Sp. z o.o., ul. Opolska 149, 52‑013
                                Wrocław.
                            </li>
                            <li>
                                <strong>Kontakt:</strong> e‑mail: epicx [at] epicx. pl, tel.: +48 505 337 333.
                            </li>
                            <li>
                                <strong>Dane:</strong> imię i nazwisko, e‑mail, telefon, treść wiadomości.
                            </li>
                            <li>
                                <strong>Cel:</strong> obsługa zapytania i korespondencja.
                            </li>
                            <li>
                                <strong>Podstawa:</strong> art. 6 ust. 1 lit. f RODO (uzasadniony interes) albo
                                lit. b RODO (działania przed umową).
                            </li>
                            <li>
                                <strong>Odbiorcy:</strong> dostawcy IT, podmioty wspierające naszą obsługę.
                            </li>
                            <li>
                                <strong>Okres:</strong> do 12 miesięcy od zakończenia sprawy, a wybrane wątki do
                                czasu przedawnienia roszczeń.
                            </li>
                            <li>
                                <strong>Prawa:</strong> dostępu, sprostowania, usunięcia, ograniczenia,
                                przenoszenia, sprzeciwu; skarga do PUODO.
                            </li>
                            <li>
                                <strong>Informacja o dobrowolności:</strong> podanie danych jest dobrowolne,
                                jednak konieczne do obsługi zgłoszenia.
                            </li>
                        </ul>
                    </section>
                </article>
            </Container>

            <Footer />
        </main>
    )
}


