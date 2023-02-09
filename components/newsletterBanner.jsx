import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CenteredModal from './centeredModal'
import NewsletterForm from './newsletterForm'
import OutlineButton from './outlineButton'

function NewsletterBanner() {

    const openNewsletterPopup = () => {
        ml('show', 'tli5iW', true);
    }

    return (
        <section className='newsletter-banner'>
            <Container>
                <Row className='justify-content-center'>
                    <Col className='text-md-start d-flex flex-column align-items-center align-items-md-start' xs={12} md={6}>
                        <h3 className='font-abhaya h1'>Mam pewną propozycję!</h3>
                        <p>
                            Dołącz do mojego newslettera,
                            odbierz darmowy jadłospis wegetariański na 3 dni i dowiedz się,
                            jak być &quot;FIT&quot;, jeść pizzę i mieć przy tym wolną głowę!
                        </p>
                        <OutlineButton className="ml-onclick-form" onClick={openNewsletterPopup}>Zapisuję się!</OutlineButton>
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