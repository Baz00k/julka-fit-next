import ShopLayout from '../../layouts/shopLayout'
import { Container } from 'react-bootstrap'
import PageTitle from '../../components/pageTitle'
import Link from 'next/link'


function PlatnoscAnulowana() {
    return (
        <ShopLayout title="Płatność anulowana">
            <Container className="text-center pt-5">
                <PageTitle>Coś poszło nie tak :(</PageTitle>
                <div>
                    <p className="fs-5 m-5">
                        Płatność nie powiodła się, prawdopodobnie została anulowana.<br />
                        Spróbuj jeszcze raz!
                    </p>
                    <p className="fs-5">
                        <Link href="/sklep">Powrót do sklepu</Link>
                    </p>
                </div>
            </Container>
        </ShopLayout>
    )
}

export default PlatnoscAnulowana;