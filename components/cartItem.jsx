import { useCart } from "../utils/useCart"
import OutlineButton from "./outlineButton"

function CartItem({ productData }) {

    const { removeFromCart } = useCart();

    return (
        <div className="d-flex border-bottom my-3 m-md-3 py-2 align-items-center justify-content-between">
            <div className="cart-item-image" style={{ backgroundImage: `url(${productData.images[0]})` }}></div>
            <div>{productData.name}</div>
            <div>
                <OutlineButton onClick={() => removeFromCart(productData.id)}>Usuń z koszyka</OutlineButton>
            </div>
        </div>
    );
}

export default CartItem;