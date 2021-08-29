import Link from 'next/link'
import { Nav } from 'react-bootstrap'

function NavLink({ href, iconURL, altTxt }) {
    return (
        <Link href={href} passHref>
            <Nav.Link target="_blank" rel="noreferrer">
                <img
                    src={iconURL}
                    width="30px"
                    height="30px"
                    alt={altTxt}
                />
            </Nav.Link>
        </Link>
    );
}

export default NavLink;