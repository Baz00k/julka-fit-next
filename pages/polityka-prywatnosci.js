import DefaultLayout from "../layouts/defaultLayout"
import { Container } from "react-bootstrap"
import PageTitle from "../components/pageTitle"
import Link from 'next/link'

function PolitykaPrywatnosci() {
    return (
        <DefaultLayout title='Polityka Prywatności - Julka Migdalska'>
            <Container>
                <PageTitle>Polityka Prywatności</PageTitle>
                <section className="my-5">
                    <h3><strong>1. Definicje</strong></h3>
                    <p>
                        Administrator - Julka.fit Julia Migdalska z siedzibą przy alei
                        KEN 36/112b, 02-797 w Warszawie, NIP:1133036799
                    </p>
                    <p>
                        RODO &ndash; Rozporządzenie Parlamentu Europejskiego i Rady (UE)
                        2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony os&oacute;b
                        fizycznych w związku z przetwarzaniem danych osobowych i w
                        sprawie swobodnego przepływu takich danych oraz uchylenia
                        dyrektywy 95/46/WE.
                    </p>
                    <p>
                        Serwis &ndash; serwis internetowy prowadzony przez Administratora
                        pod adresem: www.julka.fit
                    </p>
                    <p>
                        Użytkownik &ndash; każda osoba fizyczna odwiedzająca Serwis lub
                        korzystająca z jednej albo kilku usług czy funkcjonalności
                        opisanych w Polityce.
                    </p>
                    <h3><strong>2. Przetwarzanie danych</strong></h3>
                    <p>
                        W związku z korzystaniem przez Użytkownika z Serwisu
                        Administrator zbiera dane<br />w zakresie niezbędnym do
                        świadczenia poszczeg&oacute;lnych usług. Poniżej zostały opisane
                        szczeg&oacute;łowe zasady oraz cele przetwarzania danych
                        osobowych gromadzonych podczas korzystania z Serwisu przez
                        Użytkownika.
                    </p>
                    <h3>
                        <strong>3. Cele i podstawy prawne przetwarzania danych</strong>
                    </h3>
                    <p>
                        Dane osobowe wszystkich Użytkownik&oacute;w korzystających z
                        Serwisu (w tym adres IP lub inne identyfikatory oraz informacje
                        gromadzone za pośrednictwem plik&oacute;w cookies), przetwarzane
                        są przez Administratora:
                    </p>
                    <ol>
                        <li>
                            w celu świadczenia usług drogą elektroniczną w zakresie
                            udostępniana Użytkownikom treści gromadzonych w Serwisie, a
                            obsługi zapytań Użytkownika, w przypadku świadczenia usług
                            konsultacji dietetycznych może dochodzić do przetwarzania
                            danych wrażliwych - zdrowotnych. Klient za każdym razem
                            zostanie przed udostępnieniem danych wrażliwych poinformowany
                            o tym &ndash; w&oacute;wczas podstawą prawną przetwarzania
                            jest niezbędność przetwarzania do wykonania umowy (art. 6 ust.
                            1 lit b RODO);
                        </li>
                        <li>
                            w celach analitycznych i statystycznych &ndash; w&oacute;wczas
                            podstawą prawną przetwarzania jest uzasadniony interes
                            Administratora (art. 6 ust. 1 lit f RODO) polegający na
                            prowadzeniu analiz aktywności Użytkownik&oacute;w, a także ich
                            preferencji w celu poprawy stosowanych funkcjonalności i
                            świadczonych usług;
                        </li>

                        <li>
                            w celu ewentualnego ustalenia i dochodzenia roszczeń lub
                            obrony przed nimi &ndash; podstawą prawną przetwarzania jest
                            uzasadniony interes Administratora (art. 6 ust. 1 lit f RODO)
                            polegający na ochronie jego praw;
                        </li>
                    </ol>
                    <p>
                        Aktywność Użytkownika w Serwisie, w tym jego dane osobowe, są
                        rejestrowane w logach systemowych (specjalnym programie
                        komputerowym służącym do przechowywania chronologicznego zapisu
                        zawierającego informację o zdarzeniach i działaniach dotyczących
                        systemu informatycznego służącego do świadczenia usług przez
                        Administratora). Zebrane w logach informacje przetwarzane są
                        przede wszystkim w celach związanych ze świadczeniem usług.
                        Administrator przetwarza je r&oacute;wnież w celach technicznych,
                        administracyjnych, na potrzeby zapewnienia bezpieczeństwa systemu
                        informatycznego oraz zarządzania tym systemem, a także w celach
                        analitycznych i statystycznych &ndash; w tym zakresie podstawą
                        prawną przetwarzania jest prawnie uzasadniony interes
                        Administratora (art. 6 ust. 1 lit. f RODO).
                    </p>
                    <h3><strong>4. Newsletter</strong></h3>
                    <p>
                        Administrator przetwarza dane osobowe Użytkownik&oacute;w w celu
                        realizowania działań marketingowych, kt&oacute;re mogą polegać na
                        przesyłaniu Użytkownikowi treści marketingowych odpowiadających
                        jego zainteresowaniom (newsletter);
                    </p>
                    <p>
                        W tym celu po uprzedniej zgodzie wyrażonej przez użytkownika dane
                        osobowe Użytkownika podane w Serwisie takie jak imię i adres
                        e-mail zostaną przekazane do partnera Administratora w celu
                        przesłania wiadomości mailowej zawierającej treści interesujące
                        Użytkownika.
                    </p>
                    <p>
                        Administrator nie podejmuje decyzji automatycznych w stosunku do
                        Użytkownika oraz dane osobowe Użytkownika nie podlegają
                        profilowaniu.
                    </p>
                    <h3><strong>5. Pliki cookies</strong></h3>
                    <p>
                        Serwis Administratora używa plik&oacute;w &bdquo;cookies&rdquo;.
                        Brak zmiany ustawień przeglądarki po stronie Czytelnika jest
                        r&oacute;wnoznaczny z wyrażeniem zgody na ich użycie. Są to
                        kr&oacute;tkie informacje tekstowe, zapisywane na komputerze,
                        telefonie, tablecie, czy też innym urządzeniu użytkownika. Mogą
                        być one odczytywane przez Administratora, a także przez systemy
                        należące do innych podmiot&oacute;w, z kt&oacute;rych usług
                        korzysta (takich jak Google). Cookies zazwyczaj zawierają nazwę
                        strony internetowej, z kt&oacute;rej pochodzą, czas
                        przechowywania ich na urządzeniu końcowym oraz unikalny numer.
                        Więcej informacji na temat plik&oacute;w cookies można uzyskać na
                        stronie{" "}
                        <Link href="http://www.allaboutcookies.org/">www.allaboutcookies.org</Link>.
                    </p>
                    <p>
                        Pliki cookies stosowane w serwisie nie przechowują danych
                        osobowych ani innych informacji zebranych od Czytelnika. Serwis
                        wykorzystuje cookie do zidentyfikowania sesji przeglądarki, co
                        umożliwia korzystanie z funkcji serwisu. Korzystanie z technik
                        &bdquo;cookies&rdquo; nie pozwala na pobieranie jakichkolwiek
                        danych osobowych i adresowych Czytelnika ani żadnych informacji
                        poufnych z jego komputera.
                    </p>
                    <p>
                        Cookies stosowane są do następujących cel&oacute;w: zachowanie
                        bezpieczeństwa usług i zapobiegania oszustwom, ułatwienia
                        wydajności strony, rejestracja wizyt do cel&oacute;w
                        marketingowych i statystycznych, korzystanie z funkcji
                        społecznościowych, wspieranie personalizacji stron internetowych
                        (np. zapisywania ustawień języka). Pliki cookies mogą być
                        r&oacute;wnież wykorzystywane i zamieszczane przez
                        wsp&oacute;łpracujących z Administratorem partner&oacute;w
                        &ndash; podlegają w&oacute;wczas politykom cookie lub politykom
                        prywatności zamieszczających je podmiot&oacute;w.
                    </p>
                    <p>
                        Zakres oraz cel gromadzenia danych, oraz droga kontaktu i
                        realizacji praw czy dokonania ustawień zapewniających ochronę
                        prywatności zostały opisane w polityce prywatności
                        poszczeg&oacute;lnych usługodawc&oacute;w<strong>.</strong>
                    </p>
                    <p>
                        Zwyczajowo przeglądarka internetowa domyślnie dopuszcza
                        wykorzystywanie cookies w urządzeniu. Administrator informuje, że
                        można zmienić ustawienia w przeglądarce internetowej &mdash;
                        całkowicie blokować automatyczną obsługę plik&oacute;w cookies
                        lub żądać powiadomienia o każdorazowym zamieszczeniu cookies w
                        urządzeniu.
                    </p>
                    <p>
                        W przypadku stosowania Google Chrome, instrukcja znajduje się
                        tutaj &ndash;{" "}
                        <Link href="https://support.google.com/chrome/answer/95647?hl=en">https://support.google.com/chrome/answer/95647?hl=en</Link>
                    </p>
                    <p>
                        W przypadku stosowania Mozilla Firefox, instrukcja znajduje się
                        tutaj &ndash;{" "}
                        <a
                            href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                        >https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer</a
                        >
                    </p>
                    <p>
                        W przypadku stosowania Safari, instrukcja znajduje się tutaj
                        &ndash;{" "}
                        <Link href="https://support.apple.com/kb/ph21411?locale=pl_PL">https://support.apple.com/kb/ph21411?locale=pl_PL</Link>
                    </p>
                    <p>
                        W przypadku stosowania Microsoft Edge, instrukcja znajduje się
                        tutaj &ndash;{" "}
                        <Link href="https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/debugger/cookies">https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/debugger/cookies</Link>
                    </p>
                    <p>
                        W przypadku stosowania Internet Explorer, Administrator sugeruje
                        zmianę narzędzia na kt&oacute;reś z powyższych, a ponadto
                        instrukcja znajduje się tutaj &ndash;{" "}
                        <Link href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies">https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies</Link>
                    </p>
                    <p>
                        Administrator czuje się w obowiązku uprzedzić, że wyłączenie lub
                        ograniczenie obsługi plik&oacute;w cookies może spowodować
                        trudności w korzystaniu ze strony internetowej i ograniczenie jej
                        funkcjonalności, w tym całkowity brak możliwości korzystania ze strony.
                    </p>
                    <p>
                        Informacje na temat polityli prywatności plików cookies firmy obsługującej płatności:{" "}
                        <Link href="https://support.stripe.com/questions/privacy-and-security-of-personal-information-submitted-to-stripe">https://support.stripe.com/questions/privacy-and-security-of-personal-information-submitted-to-stripe</Link>
                    </p>
                    <h3><strong>6. Przetwarzanie danych Użytkownika.</strong></h3>
                    <p>W ramach EOG:</p>
                    <p></p>
                    <p>
                        W ramach Serwisu, dane Użytkownika są przetwarzane przez podmioty
                        wsp&oacute;łpracujące z Administratorem, kt&oacute;re zgodnie z
                        Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z
                        dnia 27 kwietnia 2016 r. w sprawie ochrony os&oacute;b fizycznych
                        w związku z przetwarzaniem danych osobowych i w sprawie
                        swobodnego przepływu takich danych oraz uchylenia dyrektywy
                        95/46/WE zobowiązane są do przestrzegania analogicznych do
                        zawartych w Polityce wysokich standard&oacute;w prywatności.
                    </p>
                    <p></p>
                    <h3><strong>7. Okres przetwarzania danych osobowych</strong></h3>
                    <p>
                        Okres przetwarzania danych przez Administratora zależy od rodzaju
                        świadczonej usługi i celu przetwarzania. Co do zasady dane
                        przetwarzane są przez czas świadczenia usługi lub realizowania
                        zam&oacute;wienia, do czasu wycofania wyrażonej zgody lub
                        zgłoszenia skutecznego sprzeciwu względem przetwarzania danych w
                        przypadkach, gdy podstawą prawną przetwarzania danych jest
                        uzasadniony interes Administratora.
                    </p>
                    <p>
                        Okres przetwarzania danych może być przedłużony w przypadku, gdy
                        przetwarzanie jest niezbędne do ustalenia i dochodzenia
                        ewentualnych roszczeń lub obrony przed nimi, a po tym czasie
                        jedynie w przypadku i w zakresie, w jakim będą wymagać tego
                        przepisy prawa. Po upływie okresu przetwarzania dane są
                        nieodwracalnie usuwane lub anonimizowane.
                    </p>
                    <h3><strong>8. Uprawnienia użytkownika</strong></h3>
                    <p>Użytkownikowi przysługuje prawo:</p>
                    <ol>
                        <li>dostępu do treści danych oraz żądania ich sprostowania,</li>
                        <li>usunięcia danych,</li>
                        <li>ograniczenia przetwarzania,</li>
                        <li>prawo do przenoszenia danych,</li>
                        <li>
                            prawo wniesienia sprzeciwu względem przetwarzania danych,
                        </li>
                        <li>
                            prawo wniesienia skargi do organu nadzorczego- Prezesa Urzędu
                            Ochrony Danych Osobowych ul. Stawki 2, 00-193 Warszawa
                        </li>
                    </ol>
                    <p>
                        W zakresie, w jakim dane Użytkownika przetwarzane są na podstawie
                        zgody, można ją wycofać w dowolnym momencie, kontaktując się z
                        Administratorem.
                    </p>
                    <p>
                        Użytkownik ma prawo zgłoszenia sprzeciwu względem przetwarzania
                        danych dla cel&oacute;w marketingowych, jeśli przetwarzanie
                        odbywa się w związku z uzasadnionym interesem Administratora, a
                        także &ndash; z przyczyn związanych ze szczeg&oacute;lną sytuacją
                        Użytkownika &ndash;w innych przypadkach, gdy postawą prawną
                        przetwarzania danych jest uzasadniony interes Administratora (np.
                        w związku z realizacją cel&oacute;w analitycznych i
                        statystycznych).
                    </p>
                    <h3><strong>9. Odbiorcy danych</strong></h3>
                    <p>
                        W związku z realizacją usług dane osobowe będą ujawniane
                        zewnętrznym podmiotom, w tym w szczeg&oacute;lności dostawcom
                        odpowiedzialnym za obsługę system&oacute;w informatycznych,
                        agencje marketingowe (w zakresie usług marketingowych) oraz
                        podmiotom powiązanym z Administratorem.
                    </p>
                    <p>
                        W przypadku uzyskania zgody Użytkownika jego dane mogą zostać
                        także udostępnione innym podmiotom do ich własnych cel&oacute;w,
                        w tym cel&oacute;w marketingowych.
                    </p>
                    <p>
                        Administrator zastrzega sobie prawo ujawnienia wybranych
                        informacji dotyczących Użytkownika właściwym organom bądź osobom
                        trzecim, kt&oacute;re zgłoszą żądanie udzielenia takich
                        informacji, opierając się na odpowiedniej podstawie prawnej oraz
                        zgodnie z przepisami obowiązującego prawa.
                    </p>
                    <h3><strong>10. Kontakt</strong></h3>
                    <p>
                        Kontakt z Administratorem jest możliwy pod adresem e-mail
                        kontakt@julka.fit
                    </p>
                    <h3><strong>11. Zmiany Polityki Prywatności</strong></h3>
                    <p>
                        Polityka jest na bieżąco weryfikowana i w razie potrzeby
                        aktualizowana. Aktualna wersja Polityki została przyjęta i
                        obowiązuje od 31.07.2021
                    </p>
                </section>
            </Container>
        </DefaultLayout>
    );
}

export default PolitykaPrywatnosci;