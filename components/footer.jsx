function Footer() {
    return (
        <footer className="footer mt-auto py-3 text-center">
            <p className='m-0'>&copy; {new Date().getFullYear().toString()} JULKA.FIT</p>
            <a href="/regulamin.html" target="_blank">Regulamin</a>{" "}
            <a href="/polityka-prywatnosci.html" target="_blank">Polityka prywatności</a>
        </footer>
    );
}

export default Footer;