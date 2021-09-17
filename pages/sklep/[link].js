import ShopLayout from "../../layouts/shopLayout"
import getProductsList from "../../utils/getProductsList"
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap"
import OutlineButton from '../../components/outlineButton'
import { FaShoppingCart } from 'react-icons/fa'
import addToCart from "../../utils/addToCart"

const ShopItem = ({ link, name, unit_amount, description, id, images }) => {

    return (
        <ShopLayout>
            <Container>
                <section className='my-5'>
                    <Row className='justify-content-center' md={1} lg={2}>
                        <Col className='col-xl-4 m-xl-4 p-2 gx-0'>
                            <h2 className='product-title'>{name}</h2>
                            <p className="product-price fs-2 mb-4">
                                Cena:{" "}
                                <span style={{ color: "#b6366c" }}>
                                    {(unit_amount / 100).toFixed(2)} zł
                                </span>
                            </p>
                            <p className="product-description">
                                {description}
                            </p>
                            <ButtonGroup className="my-5 w-100">
                                <OutlineButton onClick={() => addToCart(id)} className='button-buy'>Kupuję!</OutlineButton>
                                <Button variant="outline-dark" style={{ minWidth: 0}} onClick={() => addToCart(id)}><FaShoppingCart size={26} /></Button>
                            </ButtonGroup>
                        </Col>
                        <Col className='col-xl-4 m-xl-4 p-2 gx-0 d-flex justify-content-center'>
                            <div className="cover-background">
                                <div className="cover-device" style={{ backgroundImage: `url(${images[0]})` }}>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </ShopLayout>
    );
}

export const getStaticPaths = async () => {

    const productList = await getProductsList();

    const paths = {
        paths: productList.data.map((product) => {
            const { link } = product;
            return { params: { link } }
        }),
        fallback: false,
    };

    return paths;
}

export const getStaticProps = async ({ params }) => {

    const productList = await getProductsList();

    const data = productList.data.filter((product) => product.link == params.link);

    const props = {
        props: { ...data[0] }
    };

    return props;
}

export default ShopItem;