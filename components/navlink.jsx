import Link from 'next/link'
import { Nav } from 'react-bootstrap'

function NavLink({href, name, children}) {
    return (
        <Link href={href} passHref>
            <Nav.Link>
                {name}
                {children}
            </Nav.Link>
        </Link>
    );
}

export default NavLink;