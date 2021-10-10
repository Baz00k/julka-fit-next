import ShopLayout from "../../layouts/shopLayout"
import PageTitle from "../../components/pageTitle"
import { Container, Row, Col } from "react-bootstrap"
import CartList from "../../components/cartList"

import getProductsList from '../../utils/getProductsList'

function Koszyk({ productList }) {
    return (
        <ShopLayout>
            <Container>
                <PageTitle>Koszyk</PageTitle>
                <Row xs={1} xl={2} className='justify-content-center'>
                    <Col className="text-center">
                        <CartList productList={productList} />
                    </Col>
                </Row>
            </Container>
        </ShopLayout>
    );
}

export default Koszyk;

export async function getStaticProps(context) {

    const productList = await getProductsList();

    return {
        props: { productList: productList.data },
    }
}