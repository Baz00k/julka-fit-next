import Head from 'next/head'
import getCanonical from '../utils/getCanonical'
import MainNavbar from "../components/navbar"
import CookieConsent from '../components/cookieConsent'
import Footer from "../components/footer"

function ShopLayout({ title = 'Sklep - Julka Migdalska', children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                {getCanonical()}
            </Head>
            <MainNavbar sticky='top'></MainNavbar>
            <main>
                {children}
            </main>
            <CookieConsent />
            <Footer></Footer>
        </>
    );
}

export default ShopLayout;