import { Modal } from 'react-bootstrap'
import BrandImage from './brandImage';

function CenteredModal({ children, ...props }) {
    return (
        <Modal {...props} centered>
            <Modal.Header closeButton>
                <BrandImage />
            </Modal.Header>
            <Modal.Body className='text-center'>
                {children}
            </Modal.Body>
        </Modal>
    );
}

export default CenteredModal;