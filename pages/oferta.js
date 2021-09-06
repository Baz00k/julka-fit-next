import DefaultLayout from "../layouts/defaultLayout"
import { Container, Row } from 'react-bootstrap'
import CustomCard from "../components/customCard"
import NewsletterBanner from '../components/newsletterBanner'
import PageTitle from "../components/pageTitle"
import ContainerWithTitle from "../components/containerWithTitle"
import { Accordion } from 'react-bootstrap'
import Link from 'next/link'

function Oferta() {
    return (
        <DefaultLayout title='Oferta - Julia Migdalska'>
            <Container className='justify-content-center'>
                <PageTitle>Oferta</PageTitle>
                <Row xs={1} md={"auto"} lg={3} className='justify-content-center'>
                    <CustomCard header='Jadłospis Indywidualny 7 dni' title='179 PLN' border href='/kontakt?temat=jadlospis' buttonText='Wybieram pakiet!'>
                        <ul className="my-4 text-start">
                            <li>
                                <b>
                                    Spersonalizowany jadłospis na 7 dni dopasowany do Twoich
                                    potrzeb, stylu życia, ilości czasu na gotowanie i
                                    preferencji smakowych.
                                </b>
                            </li>
                            <li>
                                Szczegółowa lista zakupów i opis przygotowania każdego
                                posiłku.
                            </li>
                            <li>Krótkie zalecenia żywieniowe.</li>
                            <li>Plan suplementacji.</li>
                        </ul>
                    </CustomCard>

                    <CustomCard header='Jadłospis Indywidualny 14 dni' title='249 PLN' border href='/kontakt?temat=jadlospis-14' buttonText='Wybieram pakiet!'>
                        <ul className="my-4 text-start">
                            <li>
                                <b>
                                    Spersonalizowany jadłospis na 14 dni dopasowany do Twoich
                                    potrzeb, stylu życia, ilości czasu na gotowanie i
                                    preferencji smakowych.
                                </b>
                            </li>
                            <li><b>Możliwość drobnych zmian w planie żywieniowym.</b></li>
                            <li>
                                Szczegółowa lista zakupów i opis przygotowania każdego
                                posiłku.
                            </li>
                            <li>Krótkie zalecenia żywieniowe.</li>
                            <li>Plan suplementacji.</li>
                        </ul>
                    </CustomCard>

                    <CustomCard header='Współpraca indywidualna' title='399 PLN / msc' border href='/kontakt?temat=wspolpraca' buttonText='Wybieram pakiet!'>
                        <ul className="my-4 text-start">
                            <li>
                                <b>
                                    Spersonalizowany jadłospis na 7 dni dopasowany do Twoich
                                    potrzeb, stylu życia, ilości czasu na gotowanie i
                                    preferencji smakowych.
                                </b>
                            </li>
                            <li><b>1-2 tygodniowe raporty.</b></li>
                            <li><b>Analiza postępów.</b></li>
                            <li><b>Stały kontakt i wsparcie dietetyka.</b></li>
                            <li>Możliwość drobnych zmian w planie żywieniowym.</li>
                            <li>
                                Szczegółowa lista zakupów i opis przygotowania każdego
                                posiłku.
                            </li>
                            <li>Rozbudowane zalecenia żywieniowe.</li>
                            <li>Plan suplementacji.</li>
                        </ul>
                    </CustomCard>
                </Row>
            </Container>
            <ContainerWithTitle title="Jak to wygląda w praktyce?">
                <Accordion>
                    <Accordion.Item eventKey={0}>
                        <Accordion.Header>Indywidualny jadłospis 7/14 dni</Accordion.Header>
                        <Accordion.Body>
                            <p><strong>Jeżeli chcesz…</strong></p>
                            <ul>
                                <li>
                                    jeść smacznie, prosto, bez zbędnych restrykcji i
                                    wyrzutów sumienia
                                </li>
                                <li>
                                    zadbać o swoje zdrowie, cieszyć się dobrym
                                    samopoczuciem i mieć energię na każdy dzień
                                </li>
                                <li>
                                    popracować nad sylwetką, schudnąć z głową lub zbudować
                                    masę mięśniową
                                </li>
                                <li>
                                    przestać bać się jedzenia
                                </li>
                                <li>
                                    wypracować zdrowe nawyki żywieniowe i po zakończeniu
                                    współpracy móc samodzielnie dbać o swoje zdrowie i
                                    sylwetkę
                                </li>
                                <li>
                                    nie tracić czasu na zakupach spożywczych – robić je 1-2
                                    razy w tygodniu z gotową listą zakupów
                                </li>
                            </ul>
                            <p><strong>Napisz do mnie - pomogę Ci to osiągnąć.</strong></p>
                            <p>
                                Ułożę jadłospis dostosowany do Twoich
                                <strong> indywidualnych potrzeb</strong>. <br />
                                Będzie smaczny, odpowiednio zbilansowany, prosty i
                                przyjemny (znajdziemy miejsce na Twoje ulubione produkty,
                                bez których nie wyobrażasz sobie diety).
                            </p>
                            <p>
                                <strong>Dopasuję dietę idealnie do Ciebie</strong> –
                                wezmę pod uwagę czas, który możesz przeznaczyć na
                                gotowanie, sklepy w których najczęściej robisz zakupy,
                                produkty których nie lubisz i te, bez których nie
                                wyobrażasz sobie dnia (oraz wiele innych rzeczy).{" "}
                                <strong>Bo dobra dieta to dieta, którą będziesz mogła stosować do końca życia, z uśmiechem na twarzy.</strong>
                            </p>
                            <p>&nbsp;</p>
                            <p><strong>Jak wygląda pakiet: jadłospis na 7/14 dni?</strong></p>
                            <ul>
                                <li>
                                    <strong>Twoja decyzja</strong> – decydujesz się na
                                    współpracę ze mną. Możesz skontaktować się ze mną <Link href='/kontakt'>TUTAJ</Link>
                                </li>
                                <li>
                                    <strong>Ankieta</strong> – wysyłam Ci maila z ankietą
                                    zdrowotno-żywieniową. Znajdź czas i wypełnij ją
                                    najdokładniej jak potrafisz. Bądź ze mną całkowicie
                                    szczera. Im lepiej Cię poznam tym lepiej dostosuję dietę
                                    do Twoich potrzeb. Uwielbiasz budyń waniliowy i nie
                                    wyobrażasz sobie dnia bez czekolady? Nie lubisz
                                    brokułów, a na widok szpinaku uciekasz gdzie pieprz
                                    rośnie? Robisz zakupy tylko w Biedronce, a Lidl omijasz
                                    szerokim łukiem? Koniecznie daj mi o tym znać 😉
                                </li>
                                <li>
                                    <strong>Dieta </strong>– na podstawie wypełnionej przez
                                    Ciebie ankiety układam dla Ciebie indywidualny plan
                                    żywieniowy na 7 lub 14 dni (co miesiąc inny, jeśli
                                    zdecydujesz się na przedłużenie współpracy). Przesyłam
                                    Ci go do 7 dni roboczych.
                                </li>
                                <li>
                                    <strong>W przypadku planu żywieniowego na 14 dni </strong>
                                    - razem z planem wysyłam Ci zalecenia żywieniowe, które
                                    zagwarantują Ci lepsze i długotrwałe efekty. Masz
                                    również możliwość zamiany 1 dowolnego dnia jadłospisu,
                                    jeśli jakieś posiłki nie przypadną Ci do gustu.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={1}>
                        <Accordion.Header>Miesięczna współpraca indywidualna</Accordion.Header>
                        <Accordion.Body>
                            <p><strong>Jeżeli chcesz…</strong></p>
                            <ul>
                                <li>
                                    jeść smacznie, prosto, bez zbędnych restrykcji i
                                    wyrzutów sumienia
                                </li>
                                <li>
                                    zadbać o swoje zdrowie, cieszyć się dobrym
                                    samopoczuciem i mieć energię na każdy dzień
                                </li>
                                <li>
                                    popracować nad sylwetką, schudnąć z głową lub zbudować
                                    masę mięśniową
                                </li>
                                <li>
                                    przestać bać się jedzenia
                                </li>
                                <li>
                                    wypracować zdrowe nawyki żywieniowe i po zakończeniu
                                    współpracy móc samodzielnie dbać o swoje zdrowie i
                                    sylwetkę
                                </li>
                                <li>
                                    nie tracić czasu na zakupach spożywczych – robić je 1-2
                                    razy w tygodniu z gotową listą zakupów
                                </li>
                            </ul>
                            <p><strong>Napisz do mnie - pomogę Ci to osiągnąć.</strong></p>
                            <p>
                                Ułożę jadłospis dostosowany do Twoich
                                <strong> indywidualnych potrzeb</strong>. <br />
                                Będzie smaczny, odpowiednio zbilansowany, prosty i
                                przyjemny (znajdziemy miejsce na Twoje ulubione produkty,
                                bez których nie wyobrażasz sobie diety).
                            </p>
                            <p>
                                <strong>Dopasuję dietę idealnie do Ciebie</strong> –
                                wezmę pod uwagę czas, który możesz przeznaczyć na
                                gotowanie, sklepy w których najczęściej robisz zakupy,
                                produkty których nie lubisz i te, bez których nie
                                wyobrażasz sobie dnia (oraz wiele innych rzeczy).{" "}
                                <strong>Bo dobra dieta to dieta, którą będziesz mogła stosować do końca życia, z uśmiechem na twarzy.</strong>
                            </p>
                            <p>
                                <strong>Sprawię, że poczujesz się zaopiekowana</strong> - będziemy mieć kontakt 7 dni w tygodniu.
                            </p>
                            <p>
                                W trakcie współpracy ze mną <strong>nauczysz się, jak dokonywać wyborów żywieniowych</strong>{" "}
                                tak, by dieta nie sprawiała Ci trudności, a jednocześnie
                                przynosiła efekty.
                            </p>
                            <p>&nbsp;</p>
                            <p><strong>Jak wygląda współpraca indywidualna?</strong></p>
                            <ul>
                                <li>
                                    <strong>Twoja decyzja</strong> – decydujesz się na
                                    współpracę ze mną. Możesz skontaktować się ze mną <Link href='/kontakt'>TUTAJ</Link>
                                </li>
                                <li>
                                    <strong>Ankieta</strong> – wysyłam Ci maila z ankietą
                                    zdrowotno-żywieniową. Znajdź czas i wypełnij ją
                                    najdokładniej jak potrafisz. Bądź ze mną całkowicie
                                    szczera. Im lepiej Cię poznam tym lepiej dostosuję dietę
                                    do Twoich potrzeb. Uwielbiasz budyń waniliowy i nie
                                    wyobrażasz sobie dnia bez czekolady? Nie lubisz
                                    brokułów, a na widok szpinaku uciekasz gdzie pieprz
                                    rośnie? Robisz zakupy tylko w Biedronce, a Lidl omijasz
                                    szerokim łukiem? Koniecznie daj mi o tym znać 😉
                                </li>
                                <li>
                                    <strong>Dieta </strong>– na podstawie wypełnionej przez
                                    Ciebie ankiety układam dla Ciebie indywidualny plan
                                    żywieniowy. Przesyłam Ci go do 7 dni roboczych. Co
                                    tydzień dostajesz ode mnie krótką ankietę, na podstawie
                                    której dokonuję niewielkich zmian w przepisach i
                                    kaloryczności diety w razie potrzeby. Uwaga – możesz
                                    zasugerować zmiany w planie żywieniowym, jednak będą to
                                    małe korekty, które nie wezmą pod uwagę „jednak nie
                                    lubię X, zapomniałam powiedzieć, że…”. Wypełnij
                                    dokładnie ankietę!
                                </li>
                                <li>
                                    <strong>Regularny kontakt</strong> – jestem dla Ciebie
                                    7 dni w tygodniu. Zazwyczaj odpisuję w ciągu 48 h.
                                    Możesz zadawać mailowo wszelkie pytania, które przyjdą
                                    Ci do głowy w trakcie naszej współpracy. Nie wiesz co i
                                    jak jeść na zbliżającej się imprezie urodzinowej? Nie
                                    zostawię Cię samej - wytłumaczę co i jak.
                                </li>
                                <li>
                                    <strong>Kontrolowanie postępów </strong>– co 1-2
                                    tygodnie przesyłasz mi raporty (w specjalnej, wysłanej
                                    Ci wcześniej tabeli), które pozwolą na monitorowanie
                                    postępów i pozwolą na szybkie wprowadzenie zmian w razie
                                    potrzeby.
                                </li>
                                <li>
                                    <strong>Zalecenia żywieniowe </strong>- razem z planem
                                    żywieniowym wysyłam Ci zalecenia żywieniowe, których
                                    zagwarantują Ci lepsze i długotrwałe efekty, a także
                                    pozwolą na utrzymanie zdrowia i sylwetki po zakończonej
                                    współpracy
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </ContainerWithTitle>
            <NewsletterBanner />
        </DefaultLayout >
    );
}

export default Oferta;