import Link from 'next/link'
import { Nav } from 'react-bootstrap'

function NavLink({href, name, path, children}) {
    return (
        <Link href={href} passHref>
            <Nav.Link active={path == href}>
                {name}
                {children}
            </Nav.Link>
        </Link>
    );
}

export default NavLink;