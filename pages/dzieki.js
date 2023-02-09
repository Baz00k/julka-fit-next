import DefaultLayout from "../layouts/defaultLayout"
import { Container, Row, Col } from "react-bootstrap";
import { AiFillCheckCircle } from "react-icons/ai";

function Placeholder() {
    return (
        <DefaultLayout>
            <Container>
                <h1 className="my-5 text-center">Dzięki, to prawie wszystko!</h1>
                <Row className="my-3">
                    <Col xs='auto'>
                        <AiFillCheckCircle size={50} color="#b6366c" />
                    </Col>
                    <Col>
                        <p className="m-3">Za chwilę otrzymasz maila z prośbą o POTWIERDZENIE podanego adresu e-mail</p>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col xs='auto'>
                        <AiFillCheckCircle size={50} color="#b6366c" />
                    </Col>
                    <Col>
                        <p className="m-3 fw-bold">Musisz kliknąć w przycisk potwierdzający w mailu.</p>
                        <p className="m-3">
                            Jeśli tego nie zrobisz, nie będę mogła wysyłać do Ciebie żadnych treści (#RODO).</p>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col xs='auto'>
                        <AiFillCheckCircle size={50} color="#b6366c" />
                    </Col>
                    <Col>
                        <p className="m-3 fw-bold">A jeśli wiadomość nie przyszła...</p>
                        <p className="m-3">
                            ...koniecznie sprawdź foldery SPAM, OFERTY, INNE.
                        </p>
                    </Col>
                </Row>
            </Container>
        </DefaultLayout>
    );
}

export default Placeholder;