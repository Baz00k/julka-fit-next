import { useRef, useState } from 'react'
import { Form, Spinner, Alert } from 'react-bootstrap'
import OutlineButton from './outlineButton'
import getStripe from '../utils/getStripe'

function PaymentForm({ productID }) {

    const form = useRef(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ message: false });

    async function submit(e) {
        setLoading(true);
        e.preventDefault();

        //get data from form
        var data = {
            "productID": productID,
            "name": form.current.name.value,
            "email": form.current.email.value.toLowerCase(),
            "promo_code": form.current.coupon.value,
        }

        //send data to server
        const response = await fetch('https://jdkkz9sbhd.execute-api.eu-central-1.amazonaws.com/default', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data || {})
        }).catch(err => {
            console.log(err);
            return { ok: false };
        });

        //check if response was successful
        if (response.ok) {

            const json = await response.json();

            //check if coupon was valid
            if (json.error) {

                setError({ message: json.error });
                if (json.errorMessage) {
                    console.log(json.errorMessage);
                }

            } else {

                try {
                    const stripe = await getStripe();
                    const { error } = await stripe.redirectToCheckout({
                        sessionId: json.session.id,
                    });
                    if (error) {
                        setError({ message: error.message });
                    }
                } catch (error) {
                    console.log(error);
                    setError({ message: "Wystąpił błąd płatności, odśwież stronę i spróbuj ponownie" });
                }

            }

        } else {
            setError({ message: "Wystąpił błąd połączenia z serwerem, odśwież stronę i spróbuj ponownie" });
        }

        setLoading(false);
    }

    return (
        <Form encType="application/json" ref={form} onSubmit={submit} >
            <div className="mb-3">
                <p>
                    <b>Wpisz swoje imię i e-mail na który zostanie wysłany produkt</b>
                </p>
            </div>
            <Form.Group controlId='imie' className="mb-3">
                <Form.Label>Imię</Form.Label>
                <Form.Control type='text' name='name' placeholder='Wpisz swoje imię!' required />
            </Form.Group>
            <Form.Group controlId='email' className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type='email' pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name='email' placeholder='Wpisz swój e-mail!' required />
            </Form.Group>
            <Form.Group controlId='coupon' className="mb-3">
                <Form.Label>Kod rabatowy</Form.Label>
                <Form.Control type='text' name='coupon' placeholder='Wpisz kod rabatowy!' />
            </Form.Group>
            <Form.Group controlId='consent' className="mb-1">
                <Form.Check type="checkbox" required inline />
                <Form.Label className="d-inline">
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    Potwierdzam zapoznanie się z <a href="/regulamin" target="_blank">regulaminem</a> oraz <a href="/polityka-prywatnosci" target="_blank">polityką&nbsp;prywatności</a>.
                </Form.Label>
            </Form.Group>
            <Form.Group controlId='consent-link' className="mb-3">
                <Form.Check type="checkbox" required inline />
                <Form.Label className="d-inline">
                    Mam świadomość, że link do pobrania e-booka wygaśnie po 7&nbsp;dniach.
                </Form.Label>
            </Form.Group>
            <Form.Group controlId='submit' className="mb-3">
                <Form.Control type='hidden' name="productID" value={productID} />
                <OutlineButton type='submit' size='lg' className="button-buy" disabled={loading} >
                    {
                        loading ?
                            <div className="m-1 fs-6">
                                <Spinner animation="border" role="status" className="text-reset">
                                    <span className="visually-hidden">Wysyłanie...</span>
                                </Spinner>
                            </div>
                            :
                            "Kupuję!"
                    }
                </OutlineButton>
            </Form.Group>
            <div className="mb-3">
                <p className="text-muted fs-6 pt-3">
                    Nie zamykaj okna przeglądarki podczas dokonywania płatności!
                </p>
            </div>
            {
                error.message && <Alert variant="danger">
                    {error.message}
                </Alert>
            }

        </Form>
    );
}

export default PaymentForm;