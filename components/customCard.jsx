import { Col, Card } from 'react-bootstrap'
import TransparentButton from './transparentButton';

function CustomCard({ title, href, buttonText, children }) {
    return (
        <Col className='d-flex align-items-stretch justify-content-center'>
            <Card className="text-center">
                <Card.Body className='d-flex flex-column'>
                    <Card.Title as='h3'>{title}</Card.Title>
                    <Card.Text className='py-3'>
                        {children}
                    </Card.Text>
                    <TransparentButton href={href}>{buttonText}</TransparentButton>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CustomCard;