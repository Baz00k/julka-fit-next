import Head from 'next/head';
import MainNavbar from "../components/navbar";
import Footer from "../components/footer";

function ShopLayout({ title='Sklep - Julka Migdalska', children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <MainNavbar sticky='top'></MainNavbar>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    );
}

export default ShopLayout;