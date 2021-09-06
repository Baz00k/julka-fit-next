import { Container } from 'react-bootstrap'

function ContainerWithTitle({ title, children }) {
    return (
        <Container className='my-5'>
            <h2 className='font-abhaya text-center'>{title}</h2>
            {children}
        </Container>
    );
}

export default ContainerWithTitle;