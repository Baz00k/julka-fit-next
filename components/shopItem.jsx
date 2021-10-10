import { Col, ButtonGroup, Button } from "react-bootstrap"
import OutlineButton from "../components/outlineButton"
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../utils/useCart'


function ShopItem({ data }) {
    const { addToCart } = useCart();
    return (
        <Col className="p-3 text-center d-flex flex-column align-items-center justify-content-start">
            <div className="cover-background">
                <div className="cover-device" style={{ backgroundImage: `url(${data.images[0]})` }}>
                </div>
            </div>
            <h2 className="h3 mt-4 font-abril">{data.name}</h2>
            <p className="product-price fs-2 mb-4">
                Cena:{" "}
                <span style={{ color: "#b6366c" }}>
                    {(data.unit_amount / 100).toFixed(2)} zł
                </span>
            </p>
            <ButtonGroup className="mt-auto">
                <OutlineButton href={`/sklep/${data.link}`} >Dowiedz się więcej!</OutlineButton>
                <Button variant="outline-dark" style={{ minWidth: 0 }} onClick={() => addToCart(data.id)} aria-label='add to cart'><FaShoppingCart /></Button>
            </ButtonGroup>
        </Col>
    );
}

export default ShopItem;