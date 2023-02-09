import { Navbar, Container, Nav } from 'react-bootstrap'
import BrandImage from './brandImage'
import NavLink from './navlink'
import SocialLink from './socialLink'

function ShopNavbar({ sticky }) {
    return (
        <Navbar expand="md" variant="light" bg="white" sticky={sticky}>
            <Container>
                <BrandImage />
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className='ms-auto h5 text-center float-md-right'>
                        <NavLink href={'/o-mnie'} name="O Mnie" />
                        <NavLink href={'/blog'} name="Blog" />
                        <NavLink href={'/sklep'} name="Sklep" path='/sklep' />
                        <NavLink href={'/oferta'} name="Oferta" />
                        <NavLink href={'/kontakt'} name="Kontakt" />
                        <SocialLink href='https://www.instagram.com/julka_migdalska/' iconURL='https://cdn.julka.fit/instagram.svg' altTxt='Instagram' />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ShopNavbar;