import Head from 'next/head';
import MainNavbar from "../components/navbar";
import Footer from "../components/footer";

function DefaultLayout({ title='Julia Migdalska - Dietetyka', children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
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