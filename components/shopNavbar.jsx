import getPath from '../utils/getPath'
import { Navbar, Container, Nav } from 'react-bootstrap'
import BrandImage from './brandImage'
import NavLink from './navlink'
import SocialLink from './socialLink'
import CartWidget from './cartWidget'

function ShopNavbar({ sticky }) {

    const path = getPath();

    return (
        <Navbar expand="md" variant="light" bg="white" sticky={sticky}>
            <Container>
                <BrandImage />
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className='ms-auto h5 text-center float-md-right'>
                        <NavLink href={'/o-mnie'} name="O Mnie" path={path} />
                        <NavLink href={'/blog'} name="Blog" path={path} />
                        <NavLink href={'/sklep'} name="Sklep" path={path} />
                        <NavLink href={'/oferta'} name="Oferta" path={path} />
                        <NavLink href={'/kontakt'} name="Kontakt" path={path} />
                        <CartWidget />
                        <SocialLink href='https://www.instagram.com/julka_migdalska/' iconURL='https://cdn.julka.fit/instagram.svg' altTxt='Instagram' />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ShopNavbar;