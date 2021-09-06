import DefaultLayout from "../layouts/defaultLayout"
import SectionWithTitle from '../components/sectionWithTitle'
import NewsletterBanner from '../components/newsletterBanner'
import Link from 'next/link';
import { Container, Row, Col } from "react-bootstrap";

function Omnie() {
    return (
        <DefaultLayout title='O Mnie - Julia Migdalska'>
            <Container className='justify-content-center'>
                <Row>
                    <Col xs={12} className='text-center'>
                        <h1 className='mt-5 font-abhaya'><b>“Zdrowe podejście to podstawa”</b> -&nbsp;</h1>
                        <h2 className='h4'>ale... czy zawsze tak u mnie było?</h2>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3}>
                        <img
                            className="img-fluid"
                            src="../o-mnie.png"
                            alt="banner_desktop"
                        />
                    </Col>
                    <Col className='my-5'>
                        <b>Cześć, to ja - Julka Migdalska!</b><br />
                        Jestem
                        studentką dietetyki, instruktorką fitness i trenerką
                        personalną.<br /><br />W wieku 14 lat zachorowałam na zaburzenia
                        odżywiania, które... dosłownie zmieniły moje życie. Świat zaczął
                        kręcić się wokół jedzenia, luster i porównywania się do innych,
                        a głodówki i diety 1000 kcal pojawiały się u mnie na porządku
                        dziennym.<br /><br />Schudłam do 37 kg, straciłam okres i wtedy
                        zrozumiałam, że czas najwyższy zawalczyć o swoje zdrowie.<br /><br />
                        Dzięki cudownym osobom wokół mnie i ogromie włożonej pracy - udało mi
                        się przytyć kilkanaście kilogramów i odzyskać wolną głowę. Dziś
                        akceptuję swoje ciało w 100%. Wiem, że to cudowna maszyna, która
                        działa zdecydowanie lepiej, gdy dostarcza się jej wartościowego
                        paliwa.<br /><br />
                        <b>
                            Uczę kobiety jak traktować siebie dobrze i jeść zdrowo - bez
                            restrykcji i wyrzutów sumienia. Pomagam zmieniać nawyki
                            żywieniowe i uświadamiam, że zdrowy rozsądek to podstawa, a w
                            diecie jest miejsce na wszystko (tak - na pizzę z ciągnącą
                            mozzarellą i ulubione lody również!)
                            <br /><br />
                        </b>
                        Na co dzień możesz mnie znaleźć na
                        <a href="https://www.instagram.com/julka_migdalska/" target="_blank" rel="noreferrer"> Instagramie</a>.
                        Jest to mała społeczność i miejsce, w którym wyżywam się
                        kulinarnie, rozwijam umiejętności fotografii kulinarnej i szerzę
                        wiedzę związana ze zdrowym stylem życia.<br /><br />
                        <Link href="/kontakt">Napisz do mnie</Link> 😊 Pokażę Ci jak jeść zdrowo – z głową!
                    </Col>
                </Row>
            </Container>
            <NewsletterBanner />
        </DefaultLayout>
    );
}

export default Omnie;