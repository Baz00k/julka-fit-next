import { Col } from "react-bootstrap"
import OutlineButton from "../components/outlineButton"


function ShopItem({ image, name, price, link }) {
    return (
        <Col className="p-3 text-center d-flex flex-column align-items-center justify-content-start">
            <div className="cover-background">
                <div className="cover-device" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <h2 className="h3 mt-4 font-abril">{name}</h2>
            <p className="product-price fs-2 mb-4">
                Cena:{" "}
                <span style={{ color: "#b6366c" }}>
                    {price} zł
                </span>
            </p>
            <OutlineButton href={`/sklep/${link}`} className="mt-auto">Dowiedz się więcej!</OutlineButton>
        </Col>
    );
}

export default ShopItem;