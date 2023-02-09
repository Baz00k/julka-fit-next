import DefaultLayout from "../layouts/defaultLayout"
import { Container, Row, Col } from "react-bootstrap"
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import PageTitle from "../components/pageTitle";
import * as yup from 'yup'
import ContactForm from "../components/contactForm"


// Validation schema for the form
const schema = yup.object().shape({
    fullname: yup.string().min(3, "Proszę wpisać poprawne imię i nazwisko!").max(50, "Imię i nazwisko za długie. Proszę wpisać poprawne imię i nazwisko!").matches(/[A-Za-z]/, "Proszę wpisać imię i nazwisko!").required("Proszę wpisać imię i nazwisko!"),
    phone: yup.string().min(9, "Numer telefonu za krótki! Proszę wpisać poprawny numer telefonu!").max(9, "Numer telefonu za długi! Proszę wpisać poprawny numer telefonu!").matches(/[0-9]{9}/, "Proszę wpisać poprawny numer telefonu!").required("Proszę wpisać numer telefonu!"),
    email: yup.string().email("Proszę wpisać poprawny adres e-mail!").required("Proszę wpisać adres e-mail!"),
    message: yup.string().min(10, "Wiadomość za krótka, proszę umieścić więcej informacji!").required("Wiadomość nie może być pusta!"),
    topic: yup.number().integer().min(1, "Proszę wybrać temat wiadomości!")
});

function Kontakt() {

    const [topic, setTopic] = useState(0);
    const [info, setInfo] = useState(false);
    const [warning, setWarning] = useState(false);
    const router = useRouter();
    const formRef = useRef();

    // Change paragraph content and automatically select form according to what was chosen on oferta page
    useEffect(() => {
        const { temat } = router.query;
        switch (temat) {
            case "jadlospis":
                setTopic(1);
                break;

            case "jadlospis-14":
                setTopic(2);
                break;

            case "wspolpraca":
                setTopic(3);
                break;

            default:
                setTopic(0);
                break;
        }
    }, [router.query]);

    useEffect(() => {
        formRef.current.setFieldValue("topic", topic);
    }, [topic])

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
                        {!topic ?
                            <p>
                                Hej! Cieszę się, że tu trafiłaś! Zanim wyślesz mi wiadomość,
                                przeczytaj proszę zakładkę&nbsp;
                                <Link href="/oferta">oferta. </Link>
                                Znajdziesz tam wszelkie informację na temat&nbsp;tego,
                                co&nbsp;mogę dla Ciebie zrobić i&nbsp;w&nbsp;jaki sposób mogę
                                Ci&nbsp;pomóc&nbsp;:)
                            </p> :
                            <p>
                                Hej! Cieszę się, że tu trafiłaś! W tym miejscu możesz napisać
                                do mnie wiadomość w sprawie współpracy na którą się zdecydowałaś,
                                a ja skontaktuję się z tobą najszybciej jak będę mogła!
                            </p>
                        }
                    </Col>
                    <Col>
                        <ContactForm
                            innerRef={formRef}
                            validationSchema={schema}
                            onSubmit={(values, actions) => submitToAPI(values, actions)}
                            initialValues={{
                                fullname: '',
                                phone: "",
                                email: "",
                                message: "",
                                topic: topic
                            }}
                            topic={topic} />

                        {info && <div className='alert alert-success text-center my-3'>Wiadomość została wysłana!</div>}
                        {warning && <div className='alert alert-danger text-center my-3'>Podczas wysyłania wiadomości wystąpił błąd. Spróbuj ponownie później!</div>}
                    </Col>
                </Row>
            </Container>
        </DefaultLayout>
    );

    async function submitToAPI(values, actions) {
        setInfo(false);
        setWarning(false);

        let data = { ...values };

        switch (parseInt(values.topic)) {
            case 1:
                data.topic = "Indywidualny jadłospis – 7 dni";
                break;
            case 2:
                data.topic = "Indywidualny jadłospis – 14 dni";
                break;
            case 3:
                data.topic = "Współpraca indywidualna miesięczna";
                break;
            case 4:
                data.topic = "Inne";
                break;
            default:
                data.topic = "Wybrano błędny temat";
                break;
        }

        const requestData = {
            method: 'POST',
            headers: {
                'contentType': 'application/json'
            },
            mode: 'no-cors',
            body: JSON.stringify(data)
        }

        const response = await fetch("https://api.julka.fit/contact", requestData);

        if (response) {
            setInfo(true);
            actions.resetForm();
        } else {
            setWarning(true);
        }
    }
}

export default Kontakt;