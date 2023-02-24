import ShopLayout from '../../layouts/shopLayout'
import { Container, Row, Col } from 'react-bootstrap'
import OutlineButton from '../../components/outlineButton'
import PageTitle from '../../components/pageTitle'
import ShopItem from '../../components/shopItem'


function Sklep() {
  return (
    <ShopLayout>
      <Container>
        <section className='shop-banner'>
          <Row xs={1} md={2}>
            <Col>
              <h1 className='shop-title font-abhaya display-1'>Sklep</h1>
              <h2 className='font-abhaya mt-3'>
                Zakochaj się w swojej diecie i jedz zdrowo, bez zbędnych restrykcji
                i wyrzutów sumienia.
              </h2>
              <OutlineButton href="#products">Chcę zobaczyć produkty</OutlineButton>
            </Col>
            <Col>
              <img src='https://cdn.julka.fit/looking_left.png' className="shop-banner-image img-fluid" alt="Julia Migdalska" />
            </Col>
          </Row>
        </section>
      </Container>
      <Container fluid className='p-2'>
        <section className='products'>
          <PageTitle id="products">Produkty</PageTitle>
          <Row xs={1} md={2} xl={4}>
            <ShopItem image={"/img/zestaw/cover-image.jpg"} name={'Zestaw e-booków'} price={"159.00"} link={"zestaw"} key={"zestaw"} />
            <ShopItem image={"/img/wege-student/cover-image.jpg"} name={'"Wege Student"'} price={"69.00"} link={"wege-student"} key={"wege-student"} />
            <ShopItem image={"/img/owsianki/cover-image.jpg"} name={'"Owsianki na wszystkie poranki"'} price={"79.00"} link={"owsianki"} key={"owsianki"} />
            <ShopItem image={"/img/jesienno-zimowy/cover-image.jpg"} name={'E-book jesienno-zimowy'} price={"79.00"} link={"jesienno-zimowy"} key={"jesienno-zimowy"} />
          </Row>
        </section>
      </Container>
    </ShopLayout>
  )
}

export default Sklep;