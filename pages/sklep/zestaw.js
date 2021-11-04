import ShopLayout from "../../layouts/shopLayout"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import BuyProductButton from "../../components/buyProductButton"
import ShopItem from "../../components/shopItem"
import { useState } from "react"
import PaymentModal from "../../components/paymentModal"

const stripeID = "price_1Js9MxE3xVb6glJsz0WE12nV";
const cdnURL = 'zestaw';
const title = "Zestaw e-booków";
const price = "139.00 zł";
const desc = "Zestaw e-booków „Owsianki na wszystkie poranki” i „E-book jesienno-zimowy” to więcej radości i gotowania w niższej cenie! Aż 100 starannie dopracowanych, wegetariańskich przepisów, które podbiją Twoje serducho i podniebienie.";

function Zestaw() {
    
    const [modalShow, setModalShow] = useState(false);

    return (
        <ShopLayout>
            <Container>
                <section className='my-5'>
                    <Row className='justify-content-center' md={1} lg={2}>
                        <Col className='col-xl-4 m-xl-4 p-2 gx-0'>
                            <h2 className='product-title'>{title}</h2>
                            <p className="product-price fs-2 mb-4">
                                Cena:{" "}
                                <span style={{ color: "#b6366c" }}>
                                    {price}
                                </span>
                            </p>
                            <p className="product-description">
                                {desc}
                            </p>
                            <BuyProductButton onClick={() => setModalShow(true)}/>
                        </Col>
                        <Col className='col-xl-4 m-xl-4 p-2 gx-0 d-flex justify-content-center'>
                            <div className="cover-background">
                                <div className="cover-device" style={{ backgroundImage: `url(https://cdn.sklep.julka.fit/${cdnURL}/cover-image.jpg)` }}>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="my-5 text-center">
                    <Row className="justify-content-center">
                        <h2 className="product-title">Opis produktu</h2>
                        <Col sm={12} lg={5} xl={4} className="col-xl-4 m-xl-4 p-2 gx-0">
                            <h2 className="carousel-title">Co znajdziesz w środku?</h2>
                            <div className="carousel-wrapper">
                                <Carousel variant="dark">
                                    {
                                        getCarouselItems(4)
                                    }
                                </Carousel>
                            </div>
                        </Col>
                        <Col sm={12} lg={7} xl={6} className="m-xl-4 p-2 gx-0 text-start">
                            <h2 className="carousel-title">
                                Ten zestaw jest dla Ciebie, jeśli...
                            </h2>
                            <ul>
                                <li>Lubisz jeść smacznie i zdrowo.</li>
                                <li>Szukasz pomysłów na pyszne, sycące posiłki.</li>
                                <li>
                                    Uwielbiasz gotować i eksperymentować w kuchni albo…
                                    chcesz się tego nauczyć.
                                </li>
                                <li>
                                    Kochasz owsianki lub wręcz przeciwnie - trudno Ci się do
                                    nich przekonać (zaufaj mi, dzięki e-bookowi to się
                                    zmieni).
                                </li>
                                <li>
                                    Kochasz jesienno-zimowe smaki.
                                </li>
                                <li>
                                    W Twojej kuchni zawitała nuda i szukasz nowych
                                    inspiracji.
                                </li>
                                <li>
                                    Chcesz zaoszczędzić trochę pieniędzy 😜
                                </li>
                            </ul>
                            <h2 className="carousel-title">Co znajdziesz w zestawie?</h2>
                            <ul>
                                <li>
                                    E-book &quot;Owsianki na wszystkie poranki&quot;
                                </li>
                                <li>
                                    E-book jesienno-zimowy
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>
                <section className="my-5">
                    <h2 className="carousel-title text-center mt-3">Informacje o obydwu o-bookach możesz znaleźć tutaj:</h2>
                    <Row xs={1} md={2} xl={3} className="justify-content-center mt-5">
                        <ShopItem image={"https://cdn.sklep.julka.fit/owsianki/cover-image.jpg"} name={'E-book "Owsianki na wszystkie poranki"'} price={"79.00"} link={"owsianki"} key={"owsianki"}></ShopItem>
                        <ShopItem image={"https://cdn.sklep.julka.fit/jesienno-zimowy/cover-image.jpg"} name={'E-book jesienno-zimowy'} price={"79.00"} link={"jesienno-zimowy"} key={"jesienno-zimowy"}></ShopItem>
                    </Row>
                </section>
                <PaymentModal show={modalShow} setModalShow={setModalShow} productID={stripeID} />
            </Container>
        </ShopLayout>
    );

    function getCarouselItems(number) {
        const items = [];
        for (let i = 1; i <= number; i++) {
            items.push(
                <Carousel.Item key={i}>
                    <img
                        className="d-block w-100"
                        src={`https://cdn.sklep.julka.fit/${cdnURL}/${i}.jpg`}
                        alt="Zdjęcie produktu"
                    />
                </Carousel.Item>
            );
        }
        return items;
    }
}

export default Zestaw;