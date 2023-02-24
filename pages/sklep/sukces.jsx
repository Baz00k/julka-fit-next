import ShopLayout from '../../layouts/shopLayout'
import { Container } from 'react-bootstrap'
import PageTitle from '../../components/pageTitle'
import Link from 'next/link'


function Sukces() {
    return (
        <ShopLayout title="Płatność anulowana">
            <Container className="text-center pt-5">
                <PageTitle>Płatność zakończona sukcesem!</PageTitle>
                <div>
                    <p className="fs-5 m-5">
                        E-book jest już Twój! Sprawdź maila, na który został wysłany! Jeżeli
                        wiadomość nie przyszła - sprawdź foldery SPAM, OFERTY i inne.
                    </p>
                    <p className="fs-5">
                        <Link href="/sklep">Powrót do sklepu</Link>
                    </p>
                </div>
            </Container>
        </ShopLayout>
    )
}

export default Sukces;