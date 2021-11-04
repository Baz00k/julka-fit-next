import OutlineButton from '../components/outlineButton'


function BuyProductButton({ id }) {

    return (
        <OutlineButton onClick={() => console.log(id)} className='button-buy my-5'>Kupuję!</OutlineButton>
    );
}

export default BuyProductButton;