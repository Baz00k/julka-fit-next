import { Container } from 'react-bootstrap'

function SectionWithTitle({ title, children }) {
    return (
        <section>
            <Container>
                <div className="my-5 text-center">
                    <h2 className='display-6'>{title}</h2>
                    {children}
                </div>
            </Container>
            <hr/>
        </section>
    );
}

export default SectionWithTitle;