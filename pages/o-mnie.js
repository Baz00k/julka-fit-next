import DefaultLayout from "../layouts/defaultLayout"
import NewsletterBanner from '../components/newsletterBanner'
import Link from 'next/link';
import { Container, Row, Col } from "react-bootstrap"

function Omnie() {
    return (
        <DefaultLayout title='O Mnie - Julia Migdalska'>
            <Container className='justify-content-center'>
                <Row>
                    <Col xs={12} className='text-center'>
                        <h1 className='mt-5 font-abhaya fw-bold'>“Zdrowe podejście to podstawa”</h1>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={3} className="p-5 p-md-3 pt-md-5">
                        <img
                            className="img-fluid"
                            src="https://cdn.julka.fit/o-mnie.jpg"
                            alt="banner_desktop"
                        />
                    </Col>
                    <Col className='my-5'>
                        <p><b>Cześć, miło Cię tu widzieć.</b></p>
                        <p>
                            Mam na imię Julka. Jestem dyplomowaną dietetyczką, fotografką kulinarną i miłośniczką dobrego jedzenia.
                        </p>
                        <p>
                            <b>
                                Uczę kobiety jak traktować siebie dobrze i jeść zdrowo - bez
                                restrykcji i wyrzutów sumienia. Pomagam zmieniać nawyki
                                żywieniowe i uświadamiam, że zdrowy rozsądek to podstawa, a w
                                diecie jest miejsce na wszystko (tak - na pizzę z ciągnącą
                                mozzarellą i ulubione lody również!)
                            </b>
                        </p>
                        <p>
                            Na co dzień możesz mnie znaleźć na
                            <a href="https://www.instagram.com/julka_migdalska/" target="_blank" rel="noreferrer"> Instagramie</a>.
                            Jest to mała społeczność i miejsce, w którym wyżywam się
                            kulinarnie, rozwijam umiejętności fotografii kulinarnej i szerzę
                            wiedzę związana ze zdrowym stylem życia.
                        </p>
                        <p>
                            <Link href="/kontakt">Napisz do mnie</Link> 😊 Pokażę Ci jak jeść zdrowo – z głową!
                        </p>
                    </Col>
                </Row>
            </Container>
            <NewsletterBanner />
        </DefaultLayout>
    );
}

export default Omnie;