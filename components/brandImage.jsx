import { Navbar } from 'react-bootstrap'
import Link from 'next/link';

function BrandImage() {
    return (
        <Link href='/' passHref>
            <Navbar.Brand>
                <img src="https://cdn.julka.fit/logo.svg" alt="logo" className="d-inline-block align-top" width={208} height={50} />
            </Navbar.Brand>
        </Link>
    );
}

export default BrandImage;