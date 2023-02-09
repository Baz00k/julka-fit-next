import { Container, Row, Col } from 'react-bootstrap'
import CustomCard from './customCard'

function IndexColumns() {
    return (
        <section>
            <Container className='my-5'>
                <Row xs={1} md={3} className='justify-content-center'>

                    <CustomCard title='Oferta' href='/oferta' buttonText='Dowiedz się więcej!'>
                        Pomogę Ci zmienić nawyki żywieniowe i sprawię, że zakochasz się w
                        swojej diecie! Mogę zaoferować Ci miesięczną współpracę
                        indywidualną lub 7/14-dniowy jadłospis dopasowany do Ciebie.
                    </CustomCard>

                    <CustomCard title='Sklep' href='/sklep' buttonText='Przejdź do sklepu!'>
                        Chodź! Zakochaj się w swojej diecie! Jedz pysznie i zdrowo, bez zbędnych restrykcji i wyrzutów sumienia. Znajdziesz tu 3 e-booki pełne pysznych, wegetariańskich przepisów.
                    </CustomCard>

                    <CustomCard title='Podcast' href='/https://open.spotify.com/show/4uw5IfXDnNDn4myls2XR7L?si=5182a309349e4134' buttonText='Posłuchaj podcastu!'>
                        Wiesz, że nagrywam podcast?
                        Znajdziesz tu rozmowy o zdrowiu psychicznym, nocne przemyślenia i grube rozkminy. Czasem będzie na poważnie, a czasem na luzie.
                    </CustomCard>

                </Row>
            </Container>
        </section>
    );
}

export default IndexColumns;