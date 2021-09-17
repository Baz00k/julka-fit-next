import ShopLayout from '../../layouts/shopLayout'
import { Container, Row, Col } from 'react-bootstrap'
import OutlineButton from '../../components/outlineButton'
import PageTitle from '../../components/pageTitle'
import ShopItem from '../../components/shopItem'
import getProductsList from '../../utils/getProductsList'

function Sklep({ productList }) {

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
            {productList.map((product) => <ShopItem data={{ ...product }} key={product.id}></ShopItem>)}
          </Row>
        </section>
      </Container>
    </ShopLayout>
  )
}

export async function getStaticProps(context) {

  const productList = await getProductsList();

  return {
    props: { productList: productList.data },
  }
}

export default Sklep;