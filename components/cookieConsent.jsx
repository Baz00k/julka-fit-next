import Consent from 'react-cookie-consent'
import Link from 'next/link'

function CookieConsent() {
    return (
        <>
            <Consent
            
                disableStyles={true}
                location={"bottom"}
                buttonClasses="btn btn-outline-dark my-3"
                buttonText="Zamknij"
                containerClasses="alert alert-light col-12 d-flex flex-column align-items-center position-fixed border-top m-0 text-center"
            >
                Ta strona korzysta z ciasteczek aby zapewnić poprawne działanie. Zobacz {" "}
                <Link href="/polityka-prywatnosci">politykę prywatności</Link>
            </Consent>
        </>
    );
}

export default CookieConsent;