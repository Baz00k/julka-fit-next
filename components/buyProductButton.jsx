import { useCart } from '../utils/useCart'
import { ButtonGroup, Button } from 'react-bootstrap'
import OutlineButton from '../components/outlineButton'
import { FaShoppingCart } from 'react-icons/fa'

function BuyProductButton({id}) {

    const { addToCart } = useCart();

    return (
        <ButtonGroup className="my-5 w-100">
            <OutlineButton onClick={() => addToCart(id)} className='button-buy'>Kupuję!</OutlineButton>
            <Button variant="outline-dark" style={{ minWidth: 0 }} onClick={() => addToCart(id)} aria-label='add to cart'><FaShoppingCart size={26} /></Button>
        </ButtonGroup>
    );
}

export default BuyProductButton;