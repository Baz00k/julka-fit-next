import DefaultLayout from "../layouts/defaultLayout"
import { Container, Row, Col, Form } from "react-bootstrap";
import { useRouter } from 'next/router';
import PageTitle from "../components/pageTitle";

function Kontakt() {
    const router = useRouter();
    const { temat } = router.query;
    return (
        <DefaultLayout title='Kontakt - Julia Migdalska'>
            <Container className='justify-content-center'>
                <PageTitle>Kontakt</PageTitle>
                <Row xs={1} md={2}>
                    <Col className='text-center mt-md-5'>
                        <h2>Bądźmy w kontakcie!</h2>
                        <img
                            src="https://cdn.julka.fit/mail.svg"
                            alt="mail"
                            className="img-fluid"
                            width={90}
                        />
                    </Col>
                    <Col>
                        <Form method='post' action="https://mautic.julka.fit/form/submit?formId=3" encType="multipart/form-data">
                            <Form.Group controlId='imie' className="mb-3">
                                <Form.Label>Imię</Form.Label>
                                <Form.Control type='text' name='mauticform[imie]' placeholder='Wpisz swoje imię!' required />
                            </Form.Group>
                            <Form.Group controlId='email' className="mb-3">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name='mauticform[email]' placeholder='Wpisz swój e-mail!' required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type='hidden' name="mauticform[formId]" value="3" />
                                <p className='mb-3'><b>Uwaga! Ważne! Potwierdź zapis!</b></p>
                                <p>
                                    <small>
                                        Zapisując&nbsp;się do&nbsp;newslettera, wyrażasz zgodę
                                        na&nbsp;otrzymywanie informacji o&nbsp;nowościach,
                                        promocjach, produktach i&nbsp;usługach&nbsp;Julka.fit.
                                        Administratorem Twoich danych osobowych będzie
                                        Julia&nbsp;Migdalska z&nbsp;siedzibą
                                        w&nbsp;Warszawie&nbsp;(04-113) przy ulicy
                                        Łukowskiej&nbsp;2a&nbsp;m.49. Twoje dane będą przetwarzane
                                        do celów związanych z&nbsp;wysyłką&nbsp;newslettera.
                                    </small>
                                </p>

                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </DefaultLayout>
    );
}

export default Kontakt;