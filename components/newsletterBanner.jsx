import { Container, Row, Col } from 'react-bootstrap'

function NewsletterBanner() {
    const mailerLiteButtonHtml = () => {
        return {
            __html: '<button class="ml-onclick-form mt-auto btn btn-outline-dark" onclick="ml(\'show\', \'tli5iW\', true)">Zapisuję się!</button>'
        }
    }

    return (
        <section className='newsletter-banner'>
            <Container>
                <Row className='justify-content-center'>
                    <Col className='text-md-start d-flex flex-column align-items-center align-items-md-start' xs={12} md={6}>
                        <h3 className='font-abhaya h1'>Mam pewną propozycję!</h3>
                        <p>
                            Dołącz do mojego newslettera, odbierz darmowy jadłospis wegetariański na 3 dni i bądź ze mną w stałym kontakcie!
                        </p>
                        <div dangerouslySetInnerHTML={mailerLiteButtonHtml()}></div>
                    </Col>
                    <Col className='d-none d-md-flex' md={3}>
                        <img src="https://cdn.julka.fit/looking_left.png" alt="Julia Migdalska" className='newsletter-image' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default NewsletterBanner;