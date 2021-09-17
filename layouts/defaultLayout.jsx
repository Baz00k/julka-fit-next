import Head from 'next/head'
import getCanonical from '../utils/getCanonical'
import MainNavbar from "../components/navbar"
import Footer from "../components/footer"

function DefaultLayout({ title = 'Julia Migdalska - Dietetyka', children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                {getCanonical()}
            </Head>
            <MainNavbar></MainNavbar>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    );
}

export default DefaultLayout;