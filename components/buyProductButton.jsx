import OutlineButton from '../components/outlineButton'


function BuyProductButton({ onClick }) {

    return (
        <OutlineButton onClick={onClick} className='button-buy my-5'>Kupuję!</OutlineButton>
    );
}

export default BuyProductButton;