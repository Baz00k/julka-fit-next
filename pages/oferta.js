import DefaultLayout from "../layouts/defaultLayout"
import { Container, Row } from 'react-bootstrap'
import CustomCard from "../components/customCard"
import NewsletterBanner from '../components/newsletterBanner'
import PageTitle from "../components/pageTitle"

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
            <NewsletterBanner/>
        </DefaultLayout >
    );
}

export default Oferta;