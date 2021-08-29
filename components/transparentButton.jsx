import Link from 'next/link';
import { Button } from 'react-bootstrap'

function TransparentButton({ href, children}) {
    return (
        <Link href={href} passHref>
            <Button variant="outline-dark">{children}</Button>
        </Link>
    );
}

export default TransparentButton;