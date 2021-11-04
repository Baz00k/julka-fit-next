import Link from 'next/link'
import { Nav } from 'react-bootstrap'

function NavLink({ href, iconURL, altTxt }) {
    return (
        <Link href={href} passHref>
            <Nav.Link target="_blank" rel="noopener noreferrer">
                <img
                    src={iconURL}
                    alt={altTxt}
                    className="icon"
                />
            </Nav.Link>
        </Link>
    );
}

export default NavLink;