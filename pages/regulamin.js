import DefaultLayout from "../layouts/defaultLayout"
import { Container } from "react-bootstrap"
import PageTitle from "../components/pageTitle"
import Link from 'next/link'

function Regulamin() {
    return (
        <DefaultLayout title="Regulamin - Julka Migdalska">
            <Container>
                <PageTitle>Regulamin sklepu internetowego julka.fit</PageTitle>
                <section className="my-5">
                    <p className="text-center"><strong> &sect;1 Definicje</strong></p>
                    <p>
                        Na potrzeby niniejszego regulaminu, przyjmuje się następujące
                        znaczenie poniższych pojęć:
                    </p>
                    <ol>
                        <li>
                            Klient &ndash; osoba fizyczna posiadająca pełną zdolność do
                            czynności prawnych, osoba prawna lub ułomna osoba prawna,
                        </li>
                        <li>
                            Konsument &ndash; osoba fizyczna, zawierająca z Dietetykiem
                            umowę niezwiązaną bezpośrednio z jej działalnością gospodarczą
                            lub zawodową,
                        </li>
                        <li>
                            Sklep &ndash; sklep internetowy działający pod adresem
                            https://julka.fit,
                        </li>
                        <li>
                            Dietetyk &ndash; Julka.fit Julia Migdalska z siedzibą przy
                            alei KEN 36/112b, 02-797 w Warszawie, NIP:1133036799
                        </li>
                        <li>
                            Produkt cyfrowy - Produkt w wersji wyłącznie elektronicznej,
                            co do kt&oacute;rego ma zastosowanie wyjątek od prawa
                            odstąpienia od umowy przez Konsumenta.
                        </li>
                    </ol>
                    <p className="text-center">
                        <strong> &sect;2 Postanowienia wstępne</strong>
                    </p>
                    <ol>
                        <li>
                            Za pośrednictwem Sklepu, Dietetyk zapewnia Klientowi możliwość
                            zawarcia umowy o dostarczenie treści cyfrowych.
                        </li>
                        <li>
                            Regulamin określa zasady i warunki korzystania ze Sklepu, a
                            także prawa i obowiązki Dietetyka i Klient&oacute;w.
                        </li>
                        <li>
                            Do korzystania ze Sklepu nie jest konieczne spełnienie
                            szczeg&oacute;lnych warunk&oacute;w technicznych przez
                            komputer lub inne urządzenie Klienta. Wystarczające są:
                            <ol>
                                <li>Dostęp do Internetu,</li>
                                <li>Standardowy system operacyjny,</li>
                                <li>Standardowa przeglądarka internetowa,</li>
                                <li>Posiadanie aktywnego adresu e-mail.</li>
                            </ol>
                        </li>
                        <li>
                            Klient nie może dokonać zakupu w Sklepie anonimowo ani pod
                            pseudonimem.
                        </li>
                        <li>
                            Zakazane jest podczas korzystania ze Sklepu dostarczanie
                            treści o charakterze bezprawnym, w szczeg&oacute;lności
                            poprzez przesyłanie takich treści za pośrednictwem formularzy
                            dostępnych w Sklepie.
                        </li>
                        <li>
                            Wszystkie ceny produkt&oacute;w podane na stronach Sklepu są
                            cenami brutto.
                        </li>
                    </ol>
                    <p className="text-center">
                        <strong> &sect;3 Usługi świadczone drogą elektroniczną</strong>
                    </p>
                    <ol>
                        <li>
                            Za pośrednictwem Sklepu, Dietetyk świadczy na rzecz Klienta
                            usługi drogą elektroniczną.
                        </li>
                        <li>
                            Podstawową usługą świadczoną drogą elektroniczną na rzecz
                            Klienta przez Dietetyka jest umożliwienie Klientowi złożenia
                            zam&oacute;wienia w Sklepie prowadzącego do zawarcia z
                            Dietetykiem umowy. Złożenie zam&oacute;wienia możliwe jest bez
                            konieczności posiadania konta w Sklepie.
                        </li>
                        <li>
                            Usługi świadczone są drogą elektroniczną na rzecz Klienta
                            nieodpłatnie. Odpłatne są natomiast umowy sprzedaży, umowy o
                            dostarczenie treści cyfrowych zawierane za pośrednictwem
                            Sklepu, a także umowy o świadczenie usług.
                        </li>
                        <li>
                            W celu zapewnienia bezpieczeństwa Klientowi i przekazania
                            danych w związku z korzystaniem ze Sklepu, Dietetyk podejmuje
                            środki techniczne i organizacyjne odpowiednie do stopnia
                            zagrożenia bezpieczeństwa świadczonych usług, w
                            szczeg&oacute;lności środki służące zapobieganiu pozyskiwania
                            i modyfikacji danych osobowych przez osoby nieuprawnione.
                        </li>
                        <li>
                            Dietetyk podejmuje działania w celu zapewnienia w pełni
                            poprawnego funkcjonowania Sklepu. Klient powinien poinformować
                            Dietetyka o wszelkich nieprawidłowościach lub przerwach w
                            funkcjonowaniu Sklepu.
                        </li>
                        <li>
                            Wszelkie reklamacje związane z funkcjonowaniem Sklepu, Klient
                            może zgłaszać za pośrednictwem poczty elektronicznej na adres
                            e-mail kontakt@julka.fit. W reklamacji Klient powinien podać
                            imię i nazwisko, adres do korespondencji, a także rodzaj i
                            datę wystąpienia nieprawidłowości związanej z funkcjonowaniem
                            Sklepu. Dietetyk będzie rozpatrywać wszelkie reklamacje w
                            terminie do 14 dni od otrzymania reklamacji i poinformuje
                            Klienta o jej rozstrzygnięciu na adres e-mail składającego
                            reklamację.
                        </li>
                    </ol>
                    <p className="text-center">
                        <strong> &sect;4 Składanie zamówienia</strong>
                    </p>
                    <ol>
                        <li>
                            Złożenie zam&oacute;wienia odbywa się poprzez wypełnienie
                            formularza zam&oacute;wienia. W formularzu konieczne jest
                            podanie danych niezbędnych do realizacji zam&oacute;wienia. Na
                            etapie składania zam&oacute;wienia następuje r&oacute;wnież
                            wyb&oacute;r metody płatności za zam&oacute;wienie. Warunkiem
                            złożenia zam&oacute;wienia jest akceptacja Regulaminu, z
                            kt&oacute;rym Klient powinien uprzednio się zapoznać. W razie
                            jakichkolwiek wątpliwości dotyczących regulaminu, Klient może
                            skontaktować się z Dietetykiem.
                        </li>
                        <li>
                            Po kliknięciu w przycisk finalizujący zam&oacute;wienie Klient
                            zostanie przekierowany do bramki płatności Stripe. Po
                            skutecznym dokonaniu płatności, Klient zostanie zwrotnie
                            przekierowany na stronę Sklepu z potwierdzeniem
                            zam&oacute;wienia. Z tą chwilą umowę uważa się za zawartą
                            pomiędzy Klientem a Dietetykiem. Potwierdzenie zawarcia umowy
                            zostanie przesłane Klientowi na adres e-mail podany w
                            formularzu zam&oacute;wienia.
                        </li>
                        <li>
                            Między Klientem a Dietetykiem zostaje zawarta umowa o
                            dostarczenie treści cyfrowych.
                        </li>
                        <li>
                            W formularzu zam&oacute;wienia Klient musi podać prawdziwe
                            dane osobowe. Klient ponosi odpowiedzialność za podanie
                            nieprawdziwych danych osobowych. Dietetyk zastrzega sobie
                            prawo do wstrzymania realizacji zam&oacute;wienia w sytuacji,
                            gdy Klient podał nieprawdziwe dane lub gdy dane te budzą
                            uzasadnione wątpliwości Dietetyka co do ich poprawności. W
                            takim przypadku Klient zostanie poinformowany poprzez pocztę
                            elektroniczną o wątpliwościach Dietetyka. W takiej sytuacji
                            Klientowi przysługuje prawo wyjaśnienia wszelkich okoliczności
                            związanych z weryfikacją prawdziwości podanych danych. W
                            przypadku braku danych pozwalających Dietetykowi na podjęcie
                            kontaktu z Klientem, Dietetyk udzieli wszelkich wyjaśnień po
                            podjęciu kontaktu przez Klienta.
                        </li>
                        <li>
                            Klient oświadcza, że wszelkie dane podane przez niego w
                            formularzu zam&oacute;wienia są prawdziwe, natomiast Dietetyk
                            nie jest zobowiązany do weryfikowania ich prawdziwości i
                            poprawności, choć posiada takie uprawnienie zgodnie z ust. 4
                            powyżej.
                        </li>
                    </ol>
                    <p className="text-center">
                        <strong> &sect;5 Produkty elektroniczne</strong>
                    </p>
                    <ol>
                        <li>
                            Realizacja zam&oacute;wienia obejmującego produkt
                            elektroniczny taki jak jadłospis online, e-book itp. następuje
                            poprzez przesłanie na adres e-mail podany przez Klienta w
                            formularzu zam&oacute;wienia wiadomości zawierającej
                            instrukcję pobrania lub uzyskania dostępu do zakupionego
                            produktu elektronicznego.
                        </li>
                        <li>
                            Z chwilą wysyłki wiadomości, o kt&oacute;rej mowa w ust. 1
                            powyżej, treści cyfrowe objęte przedmiotem zam&oacute;wienia
                            uważa się za dostarczone w całości Klientowi.
                        </li>
                        <li>
                            Klient zobowiązuje się do pobrania i zapisania na swoim
                            urządzeniu dostarczonego produktu elektronicznego w ciągu 7
                            dni od otrzymania wiadomości opisanej w ust. 1.
                        </li>
                        <li>
                            Klient przyjmuje do wiadomości, że po okresie 7 dni od
                            otrzymania wiadomości opisanej w ust. 1 pobranie produktu nie
                            będzie możliwe.
                        </li>
                        <li>
                            W odniesieniu do jadłospis&oacute;w online i innych
                            produkt&oacute;w elektronicznych nie przysługuje prawo do
                            odstąpienia od umowy oraz zwrotu produktu zgodnie z
                            postanowieniami &sect;7.
                        </li>
                    </ol>
                    <p className="text-center">
                        <strong> &sect;6 Prawa własności intelektualnej</strong>
                    </p>
                    <ol>
                        <li>
                            Dietetyk poucza niniejszym Klienta, że treści zawarte w
                            Sklepie oraz produkty elektroniczne objęte są ochroną prawa
                            autorskiego.
                        </li>
                        <li>
                            Prawa autorskie majątkowe i osobiste co do produkt&oacute;w i
                            treści dystrybuowanych za pomocą Serwisu należą do Dietetyka.
                        </li>
                        <li>
                            Bezprawne rozpowszechnianie treści lub materiał&oacute;w, o
                            kt&oacute;rych mowa w ust. 1 powyżej, może skutkować
                            odpowiedzialnością cywilną lub karną.
                        </li>
                    </ol>
                    <p className="text-center">
                        <strong> &sect;7 Odstąpienie od umowy Konsumenta</strong>
                    </p>
                    <ol>
                        <li>
                            Konsument, kt&oacute;ry zawarł z Dietetykiem umowę na
                            odległość, ma prawo odstąpić od umowy bez podawania przyczyny
                            w terminie 14 dni od dnia zawarcia umowy (w przypadku umowy o
                            dostarczenie treści cyfrowych).
                        </li>
                        <li>
                            Prawo do odstąpienia od umowy nie przysługuje w odniesieniu do
                            um&oacute;w o dostarczanie treści cyfrowych, kt&oacute;re nie
                            są zapisane na nośniku materialnym, jeżeli spełnianie
                            świadczenia rozpoczęło się za wyraźną zgodą Konsumenta przed
                            upływem terminu do odstąpienia od umowy i po poinformowaniu go
                            przez Dietetyka o utracie prawa odstąpienia od umowy.
                        </li>
                        <li>
                            Prawo do odstąpienia od umowy nie przysługuje r&oacute;wnież,
                            w odniesieniu do produkt&oacute;w przygotowywanych na
                            specjalne zam&oacute;wienie Konsumenta oraz według osobistych
                            preferencji.
                        </li>
                        <li>
                            Chwilą rozpoczęcia świadczenia jest doręczenie Klientowi
                            wiadomości e-mail z instrukcją uzyskania dostępu do treści
                            cyfrowych.
                        </li>
                        <li>
                            Aby odstąpić od umowy, Konsument musi poinformować Dietetyka o
                            swojej decyzji o odstąpieniu od umowy w drodze jednoznacznego
                            oświadczenia - na przykład pismo wysłane pocztą, faksem lub
                            pocztą elektroniczną.
                        </li>
                        <li>
                            Aby zachować termin do odstąpienia od umowy, wystarczy, aby
                            Konsument wysłał informację dotyczącą wykonania
                            przysługującego Konsumentowi prawa odstąpienia od umowy przed
                            upływem terminu do odstąpienia od umowy.
                        </li>
                    </ol>
                    <p className="text-center">
                        <strong>&sect;8 Odpowiedzialność za wady</strong>
                    </p>
                    <ol>
                        <li>
                            Dietetyk ma obowiązek dostarczyć Klientowi treść cyfrową wolną
                            od wad.
                        </li>
                        <li>
                            Dietetyk jest odpowiedzialny względem Klienta, jeżeli
                            sprzedana treść cyfrowa ma wadę fizyczną lub prawną (rękojmia
                            za wady).
                        </li>
                        <li>
                            Jeśli Klient stwierdzi wadę treści cyfrowej, powinien
                            poinformować o tym Dietetyka, określając jednocześnie swoje
                            roszczenie związane ze stwierdzoną wadą lub składając
                            oświadczenie stosownej treści.
                        </li>
                        <li>
                            Klient może kontaktować się z Dietetykiem zar&oacute;wno
                            pocztą tradycyjną, jak r&oacute;wnież pocztą elektroniczną.
                        </li>
                        <li>
                            Dietetyk ustosunkuje się do składanej przez Klienta reklamacji
                            w ciągu 14 dni od dnia doręczenia mu reklamacji za pomocą
                            takiego środka komunikacji, przy wykorzystaniu kt&oacute;rego
                            reklamacja została złożona.
                        </li>
                    </ol>
                    <p className="text-center">
                        <strong>&sect;9 Dane osobowe i pliki cookies</strong>
                    </p>
                    <ol>
                        <li>Administratorem danych osobowych Klienta jest Dietetyk.</li>
                        <li>
                            Dane osobowe Klienta przetwarzane są w celu obsługi
                            zam&oacute;wień, konta użytkownika oraz ewentualnej obrony,
                            dochodzenia lub ustalenia roszczeń związanych z zawieranymi za
                            pośrednictwem Sklepu umowami.
                        </li>
                        <li>
                            Szczeg&oacute;ły dotyczące przetwarzania danych osobowych oraz
                            wykorzystywania plik&oacute;w cookies znajdują się w polityce
                            prywatności dostępnej pod adresem
                            <Link href="https://julka.fit/polityka-prywatnosci">https://julka.fit/polityka-prywatnosci</Link>
                        </li>
                    </ol>
                    <p className="text-center">
                        <strong
                        >&sect;10 Pozasądowe sposoby rozpatrywania reklamacji i
                            dochodzenia roszczeń</strong
                        >
                    </p>
                    <ol>
                        <li>
                            Dietetyk wyraża zgodę na poddanie ewentualnych spor&oacute;w
                            wynikłych w związku z zawartymi umowami na drodze postępowania
                            mediacyjnego. Szczeg&oacute;ły zostaną określone przez strony
                            konfliktu.
                        </li>
                        <li>
                            Konsument ma możliwość skorzystania z pozasądowych
                            sposob&oacute;w rozpatrywania reklamacji i dochodzenia
                            roszczeń. Między innymi, Konsument ma możliwość:
                        </li>
                        <li>
                            zwr&oacute;cenia się do stałego polubownego sądu
                            konsumenckiego z wnioskiem o rozstrzygnięciu sporu wynikłego z
                            zawartej umowy,
                        </li>
                        <li>
                            Zwr&oacute;cenia się do wojew&oacute;dzkiego inspektora
                            Inspekcji Handlowej z wnioskiem o wszczęcie postępowania
                            mediacyjnego w sprawie polubownego zakończenia sporu między
                            Klientem a Dietetyka,
                        </li>
                        <li>
                            Skorzystania z pomocy powiatowego (miejskiego) rzecznika prawa
                            konsumenta lub organizacji społecznej, do kt&oacute;rej
                            statutowych zadań należy ochrona konsument&oacute;w.
                        </li>
                        <li>
                            Bardziej szczeg&oacute;łowych informacji na temat pozasądowych
                            sposob&oacute;w rozpatrywania reklamacji i dochodzenia
                            roszczeń, Konsument może szukać na stronie internetowej
                            <Link href="http://polubowne.uokik.gov.pl">http://polubowne.uokik.gov.pl</Link>.
                        </li>
                        <li>
                            Konsument może r&oacute;wnież skorzystać z platformy ODR,
                            kt&oacute;ra dostępna jest pod adresem
                            <Link href="http://ec.europa.eu/consumers/odr">http://ec.europa.eu/consumers/odr</Link>.{" "}
                            Platforma służy rozstrzyganiu spor&oacute;w pomiędzy
                            konsumentami i przedsiębiorcami dążącymi do pozasądowego
                            rozstrzygnięcia sporu dotyczącego zobowiązań umownych
                            wynikających z internetowej umowy sprzedaży lub umowy o
                            świadczenie usług.
                        </li>
                    </ol>
                    <p className="text-center">
                        <strong> &sect;11 Postanowienia końcowe</strong>
                    </p>
                    <ol>
                        <li>
                            Dietetyk zastrzega sobie prawo do wprowadzania oraz
                            odwoływania ofert, promocji oraz do zmiany cen w Sklepie bez
                            uszczerbku dla praw nabytych przez Klienta, w tym w
                            szczeg&oacute;lności warunk&oacute;w um&oacute;w zawartych
                            przed dokonaniem zmiany.
                        </li>
                        <li>
                            Wszelkie spory związane z umowami zawieranymi za pośrednictwem
                            Sklepu będą rozpatrywane przez polski sąd powszechny właściwy
                            ze względu na stałe miejsce wykonywania działalności
                            gospodarczej przez Dietetyka. Postanowienie to nie znajduje
                            zastosowania do Konsument&oacute;w, w przypadku kt&oacute;rych
                            właściwość oraz jurysdykcja sądu rozpatrywane są na zasadach
                            og&oacute;lnych.
                        </li>
                        <li>
                            Dietetyk zastrzega sobie możliwość wprowadzania zmian w
                            Regulaminie. Do um&oacute;w zawartych przed zmianą Regulaminu
                            stosuje się Regulamin obowiązujący w dacie zawarcia umowy.
                        </li>
                        <li>Niniejszy Regulamin obowiązuje od dnia 31.07.2021</li>
                    </ol>
                </section>
            </Container>
        </DefaultLayout>
    );
}

export default Regulamin;