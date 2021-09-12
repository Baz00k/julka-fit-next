import Head from 'next/head';
import MainNavbar from "../components/navbar";
import Footer from "../components/footer";
import { useRouter } from 'next/router'

function DefaultLayout({ title = 'Julia Migdalska - Dietetyka', children }) {

    function getCanonical() {
        const CANONICAL_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

        const router = useRouter();
        const _pathSliceLength = Math.min.apply(Math, [
            router.asPath.indexOf('?') > 0 ? router.asPath.indexOf('?') : router.asPath.length,
            router.asPath.indexOf('#') > 0 ? router.asPath.indexOf('#') : router.asPath.length
        ]);
        console.log(CANONICAL_DOMAIN + router.asPath.substring(0, _pathSliceLength))
        return `https://${CANONICAL_DOMAIN + router.asPath.substring(0, _pathSliceLength)}/`;
    }


    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="canonical" href={getCanonical()} />
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