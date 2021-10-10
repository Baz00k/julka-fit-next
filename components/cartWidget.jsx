import { Nav, Badge } from 'react-bootstrap'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../utils/useCart'
import { useEffect, useState } from 'react'

function CartWidget() {

    const { cart } = useCart();
    const [itemCount, setItemCount] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setItemCount(cart.products.length || 0);
        if (!cart.fromStorage) {
            setAnimate(true);
            const id = setTimeout(() => setAnimate(false), 500);
            return () => clearTimeout(id);
        }
    }, [cart]);

    return (
        <Link href={'/sklep/koszyk'} passHref>
            <Nav.Link className={animate ? 'cart-button animate-cart' : 'cart-button'}>
                <FaShoppingCart size={30} />
                <Badge pill bg="dark" className='cart-badge'>
                    {itemCount}
                </Badge>
            </Nav.Link>
        </Link>
    );
}

export default CartWidget;