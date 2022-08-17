import { Formik } from 'formik'
import {Form, FloatingLabel} from 'react-bootstrap'
import OutlineButton from '../components/outlineButton'

function ContactForm({topic, ...props}) {
    return (
        <Formik {...props}>
            {
                ({ handleSubmit, handleChange, touched, values, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="fullname" className="mb-3">
                            <Form.Label>Imię i Nazwisko</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={handleChange}
                                value={values.fullname}
                                name="fullname"
                                maxLength={50}
                                placeholder="Wpisz swoje imię i nazwisko"
                                isValid={touched.fullname && !errors.fullname} />
                            {touched.fullname && errors.fullname && <Form.Control.Feedback type="invalid">{errors.fullname}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="email" className="mb-3">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                maxLength={45}
                                placeholder="Wpisz swój email"
                                isValid={touched.email && !errors.email} />
                            {touched.email && errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="phone" className="mb-3">
                            <Form.Label>Telefon</Form.Label>
                            <Form.Control
                                type="tel"
                                onChange={handleChange}
                                value={values.phone}
                                name="phone"
                                maxLength={9}
                                placeholder="Np.: 123456789"
                                isValid={touched.phone && !errors.phone} />
                            {touched.phone && errors.phone && <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="topic" className="mb-3">
                            <Form.Label>Temat</Form.Label>
                            <Form.Select
                                onChange={handleChange}
                                value={values.topic}
                                name="topic"
                                isValid={touched.topic && !errors.topic}
                                disabled={!!topic}
                            >
                                <option disabled value={0}>Wybierz temat wiadomości</option>
                                <option value={1}>Indywidualny jadłospis – 7 dni</option>
                                <option value={2}>Indywidualny jadłospis – 14 dni</option>
                                <option value={3}>Współpraca indywidualna miesięczna</option>
                                <option value={4}>Inne</option>
                            </Form.Select>
                            {touched.topic && errors.topic && <Form.Control.Feedback type="invalid">{errors.topic}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group controlId="message" className="mb-3">
                            <FloatingLabel label="Treść wiadomości">
                                <Form.Control
                                    onChange={handleChange}
                                    value={values.message}
                                    name="message"
                                    isValid={touched.message && !errors.message}
                                    as="textarea"
                                    placeholder="Wpisz swoją wiadomość"
                                    maxLength="1200"
                                    style={{ height: '200px' }}
                                />
                            </FloatingLabel>
                            {touched.message && errors.message && <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>}
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <OutlineButton type="submit" variant='secondary' size='lg'>Wyślij!</OutlineButton>
                        </div>
                    </Form>
                )
            }
        </Formik>
    );
}

export default ContactForm;