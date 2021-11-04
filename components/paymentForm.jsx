import { Form } from 'react-bootstrap'
import OutlineButton from './outlineButton'
import Link from 'next/link';

function PaymentForm({ productID }) {
    return (
        <Form method='post' action="https://api.sklep.julka.fit/payment">
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
                <Form.Control type='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name='email' placeholder='Wpisz swój e-mail!' required />
            </Form.Group>
            <Form.Group controlId='coupon' className="mb-3">
                <Form.Label>Kod rabatowy</Form.Label>
                <Form.Control type='text' name='coupon' placeholder='Wpisz kod rabatowy!' />
            </Form.Group>
            <Form.Group controlId='consent' className="mb-1">
                <Form.Check type="checkbox" required inline />
                <Form.Label className="d-inline">
                    Potwierdzam zapoznanie się z <Link href="/regulamin" target="_blank">regulaminem</Link> oraz <Link href="/polityka-prywatnosci" target="_blank">polityką&nbsp;prywatności</Link>.
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
                <OutlineButton type='submit' size='lg' className="button-buy">
                    Kupuję!
                </OutlineButton>
            </Form.Group>
            <div className="mb-3">
                <p className="text-muted fs-6 pt-3">
                    Nie zamykaj okna przeglądarki podczas dokonywania płatności!
                </p>
            </div>
        </Form>
    );
}

export default PaymentForm;