import CenteredModal from "./centeredModal";
import PaymentForm from "./paymentForm";

function PaymentModal({ show, setModalShow, productID }) {
    return (
        <CenteredModal show={show} onHide={() => setModalShow(false)}>
            <PaymentForm productID={productID} />
        </CenteredModal>
    );
}

export default PaymentModal;