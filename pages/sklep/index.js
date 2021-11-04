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
              <img src='/looking_left.png' className="shop-banner-image img-fluid" alt="Julia Migdalska" />
            </Col>
          </Row>
        </section>
        <section className='products'>
          <PageTitle id="products">Produkty</PageTitle>
          <Row xs={1} md={2} xl={3}>
            <ShopItem image={"https://cdn.sklep.julka.fit/owsianki/cover-image.jpg"} name={'E-book "Owsianki na wszystkie poranki"'} price={"79.00"} link={"owsianki"} key={"owsianki"}></ShopItem>
            <ShopItem image={"https://cdn.sklep.julka.fit/jesienno-zimowy/cover-image.jpg"} name={'E-book jesienno-zimowy'} price={"79.00"} link={"jesienno-zimowy"} key={"jesienno-zimowy"}></ShopItem>
            <ShopItem image={"https://cdn.sklep.julka.fit/zestaw/cover-image.jpg"} name={'Zestaw E-booków'} price={"139.00"} link={"zestaw"} key={"zestaw"}></ShopItem>
          </Row>
        </section>
      </Container>
    </ShopLayout>
  )
}

export default Sklep;