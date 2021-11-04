import Head from 'next/head'
import getCanonical from '../utils/getCanonical'
import ShopNavbar from "../components/shopNavbar"
import CookieConsent from '../components/cookieConsent'
import Footer from "../components/footer"

function ShopLayout({ title = 'Sklep - Julka Migdalska', children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                {getCanonical()}
            </Head>
            <ShopNavbar sticky='top' />
            <main>
                {children}
            </main>
            <CookieConsent />
            <Footer />
        </>
    );
}

export default ShopLayout;