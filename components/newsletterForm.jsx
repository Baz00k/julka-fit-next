import { Form } from 'react-bootstrap'
import OutlineButton from './outlineButton'

function NewsletterForm() {
    return (
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
                <OutlineButton type='submit' variant='secondary' size='lg'>
                    <span className='font-abhaya h2'>Dołączam!</span>
                    <img
                        className="img-fluid m-1 ms-3"
                        src="https://cdn.julka.fit/arrows_right.svg"
                        alt="arrows_right"
                        style={{ height: '25px' }}
                    />
                </OutlineButton>
            </Form.Group>
        </Form>
    );
}

export default NewsletterForm;