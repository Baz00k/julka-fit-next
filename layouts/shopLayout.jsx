import Head from 'next/head'
import getCanonical from '../utils/getCanonical'
import { CartContext, useCartState } from '../utils/useCart'
import ShopNavbar from "../components/shopNavbar"
import CookieConsent from '../components/cookieConsent'
import Footer from "../components/footer"

function ShopLayout({ title = 'Sklep - Julka Migdalska', children }) {
    const cart = useCartState();

    return (
        <>
            <Head>
                <title>{title}</title>
                {getCanonical()}
            </Head>
            <CartContext.Provider value={cart}>
                <ShopNavbar sticky='top'></ShopNavbar>
                <main>
                    {children}
                </main>
            </CartContext.Provider>
            <CookieConsent />
            <Footer></Footer>
        </>
    );
}

export default ShopLayout;