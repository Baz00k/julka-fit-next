import { useCart } from "../utils/useCart"
import OutlineButton from './outlineButton'
import CartItem from "./cartItem"

function CartList({ productList }) {

    const { cart } = useCart();

    function getTotal() {
        let total = 0;
        cart.products.map((product) => {
            let productData = productList.find(item => item.id == product);
            total += productData.unit_amount;
        });
        return (total / 100).toFixed(2);
    }

    return (
        <>
            {cart.products.length == 0 ? <h2>Twój koszyk jest pusty!</h2> : cart.products.map((product) => {
                let productData = productList.find(item => item.id == product);
                return <CartItem productData={productData} key={productData.id} />
            })}
            <p className="text-end fs-4 fw-bold">Do zapłaty: {getTotal()}zł</p>
            <OutlineButton className="mt-5" >Zamawiam!</OutlineButton>
        </>
    );
}

export default CartList;