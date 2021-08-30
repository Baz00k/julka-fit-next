import Link from 'next/link';
import { Button } from 'react-bootstrap'

function TransparentButton({ href, children, ...props }) {
    return (
        href ?
            <Link href={href} passHref>
                <Button variant="outline-dark" className='mt-auto' {...props}>{children}</Button>
            </Link> :
            <Button variant="outline-dark" className='mt-auto' {...props}>{children}</Button>
    );
}

export default TransparentButton;