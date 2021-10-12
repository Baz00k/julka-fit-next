import { Toast } from "react-bootstrap";

function AddToCartToast(props) {
    return (
        <Toast {...props} delay={3000} className="position-fixed bottom-0 mb-4 translate-middle-x start-50" autohide>
            <Toast.Header closeButton={false} className='text-center justify-content-center'>
                Produkt został dodany do koszyka
            </Toast.Header>
        </Toast>
    );
}

export default AddToCartToast;