import DefaultLayout from "../layouts/defaultLayout"
import { Container, Row, Col } from "react-bootstrap"
import PageTitle from "../components/pageTitle"
import OutlineButton from "../components/outlineButton"
import { useState } from "react"
import CenteredModal from "../components/centeredModal"
import NewsletterForm from "../components/newsletterForm"

function Newsletter() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <DefaultLayout title="Newsletter - Julia Migdalska">
            <Container className='justify-content-center'>
                <PageTitle>Newsletter</PageTitle>
                <Row className="justify-content-between">
                    <Col xs={12} md={8} lg={8} xl={7} className="gx-5 mt-md-3 p-xl-5">
                        <h2 className="font-abhaya my-lg-3">
                            Zdrowe podejście, dużo śmiechu
                            i dietetyczne ciekawostki, czyli...
                        </h2>
                        <p>
                            dołącz do mojego newslettera,<br />
                            <b>
                                odbierz darmowy jadłospis wegetariański na
                                3 dni
                            </b> i dowiedz się, jak być &quot;FIT&quot;, jeść pizzę
                            i mieć przy tym wolną głowę!
                        </p>
                        <div className="d-grid my-lg-5">
                            <OutlineButton onClick={() => setModalShow(true)}><span className="fs-5 p-2">Dołączam!</span></OutlineButton>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={4} xl={3} className="p-5 p-md-3">
                        <img
                            className="img-fluid"
                            src="https://cdn.julka.fit/o-mnie.jpg"
                            alt="banner_desktop"
                        />
                    </Col>
                </Row>
                <section>
                    <h2 className="text-center font-abhaya m-3">
                        Hej! Miło Cię poznać!
                    </h2>
                    <p>
                        Pewnie zastanawiasz się, co zyskasz zapisując się do mojego newslettera? Już mówię!
                    </p>
                    <ul>
                        <li>
                            Cotygodniowe maile z ciekawostkami ze świata dietetyki i psychodietetyki – pełne humoru i zdrowego podejścia.
                        </li>
                        <li>
                            Dużą dawkę motywacji.
                        </li>
                        <li>
                            Smaczne przepisy.
                        </li>
                        <li>
                            Ważne wiadomości z pierwszej ręki!
                        </li>
                        <li>
                            No i po prostu fajną relację – tak, zapisując się do newslettera sprawisz, że poniekąd się poznamy.
                        </li>
                    </ul>
                    <p className="m-3">Fajnie, prawda?</p>
                </section>
                <section>
                    <h2 className="text-center font-abhaya m-3">
                        Nazywam się Julia Migdalska
                    </h2>
                    <p>
                        Jestem studentką dietetyki. Od lat zdobywam wiedzę na temat zdrowego odżywiania, a moim celem jest pokazać Ci jak jeść zdrowo – z głową!<br />
                        Na co dzień możesz znaleźć mnie na Instagramie.
                    </p>
                </section>
                <section className="text-center fs-4 fw-bold font-abhaya m-5">
                    <p>
                        Masz jakieś pytania? Pisz śmiało!<br />
                        kontakt@julka.fit
                    </p>
                </section>
            </Container>
            <Container style={{ background: '#ffd9ea' }} fluid>
                <p className="text-center fs-4 fw-bold font-abhaya mt-5 p-3">
                    To co? Jesteśmy w kontakcie?<br />
                    Julka
                </p>
            </Container>
            <CenteredModal show={modalShow} onHide={() => setModalShow(false)}>
                <NewsletterForm />
            </CenteredModal>
        </DefaultLayout>
    );
}

export default Newsletter;