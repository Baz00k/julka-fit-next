import { Container, Row, Col, Image } from 'react-bootstrap'

function IndexBanner() {
    return (
        <>
            <div className="banner-wrapper">
                <div className="banner-circle">
                    <img src="../index_banner_icon.png" alt="Icon" className="banner-icon" />
                    <h1>Zdrowe podejście to podstawa</h1>
                    <p className="text-muted">Julia Migdalska</p>
                    <img className="index-banner d-none d-md-block" src="../index_banner.png" alt="Julia Migdalska" />
                </div>
            </div>
            <hr />
        </>
    );
}

export default IndexBanner;