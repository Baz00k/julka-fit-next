import { Container, Row, Col } from 'react-bootstrap'
import CustomCard from './customCard'

function IndexColumns() {
    return (
        <section>
            <Container className='my-5'>
                <Row xs={1} md={3}>

                    <CustomCard title='Oferta' href='/oferta' buttonText='Dowiedz się więcej!'>
                        Pomogę Ci zmienić nawyki żywieniowe i sprawię, że zakochasz się w
                        swojej diecie! Mogę zaoferować Ci miesięczną współpracę
                        indywidualną lub 7/14-dniowy jadłospis dopasowany do Ciebie.
                    </CustomCard>

                    <CustomCard title='Sklep' href='/sklep' buttonText='Przejdź do sklepu!'>
                        Chodź! Zakochaj się w&nbsp;swojej&nbsp;diecie!
                        Jedz&nbsp;pysznie i&nbsp;zdrowo, bez&nbsp;zbędnych restrykcji i&nbsp;wyrzutów sumienia.
                        Znajdziesz&nbsp;tu e-booka z&nbsp;owsiankami, a&nbsp;niebawem więcej fajnych&nbsp;produktów.
                    </CustomCard>
                    
                    <CustomCard title='Blog' href='/blog' buttonText='Wpadnij na bloga!'>
                        Prace nad blogiem już trwają. Zapraszam niebawem!
                    </CustomCard>

                </Row>
            </Container>
        </section>
    );
}

export default IndexColumns;