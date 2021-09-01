import Link from 'next/link';
import { Button } from 'react-bootstrap'

function TransparentButton({ href, children, variant='outline-dark', ...props }) {
    return (
        href ?
            <Link href={href} passHref>
                <Button variant={variant} className='mt-auto' {...props}>{children}</Button>
            </Link> :
            <Button variant={variant} className='mt-auto' {...props}>{children}</Button>
    );
}

export default TransparentButton;