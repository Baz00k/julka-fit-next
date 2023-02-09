import { Col, Card } from 'react-bootstrap'
import OutlineButton from './outlineButton';

function CustomCard({ header, title, href, target, buttonText, border = false, children }) {
    return (
        <Col className='d-flex align-items-stretch justify-content-center' style={{ minWidth: '270px' }}>
            <Card className={`my-3 text-center ${border ? '' : 'border-0'}`}>
                {header && <Card.Header as='h2' className='fw-normal h4 p-3'>
                    {header}
                </Card.Header>}
                <Card.Body className='d-flex flex-column'>
                    {title && <Card.Title as='h3'>{title}</Card.Title>}
                    <Card.Text className='py-3 mb-2' as='div'>
                        {children}
                    </Card.Text>
                    <OutlineButton href={href} target={target}>{buttonText}</OutlineButton>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CustomCard;