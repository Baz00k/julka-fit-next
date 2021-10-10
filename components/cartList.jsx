import { useCart } from "../utils/useCart"
import { useState, useEffect } from "react"
import OutlineButton from './outlineButton'
import CartItem from "./cartItem"

function CartList({ productList }) {

    const { cart } = useCart();
    const [cartEmpty, setCartEmpty] = useState(true);

    useEffect(() => {
        setCartEmpty(!(cart.products.length > 0));
    }, [cart.products.length]);

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
            {cartEmpty ? <h2>Twój koszyk jest pusty!</h2> : cart.products.map((product) => {
                let productData = productList.find(item => item.id == product);
                return <CartItem productData={productData} key={productData.id} />
            })}
            {!cartEmpty && <>
                <p className="text-end fs-4 fw-bold">Do zapłaty: {getTotal()}zł</p>
                <OutlineButton className="mt-5" >Zamawiam!</OutlineButton>
            </>}
        </>
    );
}

export default CartList;