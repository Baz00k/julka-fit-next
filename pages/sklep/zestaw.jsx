import ShopLayout from "../../layouts/shopLayout"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import BuyProductButton from "../../components/buyProductButton"
import ShopItem from "../../components/shopItem"
import { useState } from "react"
import PaymentModal from "../../components/paymentModal"

const stripeID = "price_1Meg2iFlitTRS2IiSV5CpcTG";
const cdnURL = 'zestaw';
const title = "Zestaw e-booków";
const price = "159.00 zł";
const desc = "Zgarnij 3 e-booki w cenie 2! „Wege Student”, „Owsianki na wszystkie poranki” i „E-book jesienno-zimowy”, czyli jeszcze więcej radości i gotowania w niższej cenie. Aż 140 starannie dopracowanych, wegetariańskich przepisów, które podbiją Twoje serducho i podniebienie.";

function Zestaw() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <ShopLayout>
            <Container>
                <section className='my-5'>
                    <Row className='justify-content-center' md={1} lg={2}>
                        <Col className='col-xl-4 m-xl-4 p-2 gx-0'>
                            <h1 className='product-title'>{title}</h1>
                            <p className="product-price fs-2 mb-4">
                                Cena:{" "}
                                <span style={{ color: "#b6366c" }}>
                                    {price}
                                </span>
                            </p>
                            <p className="product-description">
                                {desc}
                            </p>
                            <BuyProductButton onClick={() => setModalShow(true)} />
                        </Col>
                        <Col className='col-xl-4 m-xl-4 p-2 gx-0 d-flex justify-content-center'>
                            <div className="cover-background">
                                <div className="cover-device" style={{ backgroundImage: `url(/img/${cdnURL}/cover-image.jpg)` }}>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="my-5 text-center">
                    <Row className="justify-content-center">
                        <h2 className="product-title">Opis produktu</h2>
                        <Col sm={12} lg={5} xl={4} className="col-xl-4 m-xl-4 p-2 gx-0">
                            <h3 className="carousel-title">Co znajdziesz w środku?</h3>
                            <div className="carousel-wrapper">
                                <Carousel variant="dark">
                                    {
                                        getCarouselItems(8)
                                    }
                                </Carousel>
                            </div>
                        </Col>
                        <Col sm={12} lg={7} xl={6} className="m-xl-4 p-2 gx-0 text-start">
                            <h3 className="carousel-title">
                                Ten zestaw jest dla Ciebie, jeśli...
                            </h3>
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
                            <h3 className="carousel-title">Co znajdziesz w zestawie?</h3>
                            <ul>
                                <li>
                                    E-book &quot;Owsianki na wszystkie poranki&quot;
                                </li>
                                <li>
                                    E-book jesienno-zimowy
                                </li>
                                <li>
                                    E-book &quot;Wege Student&quot;
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>
                <section className="my-5">
                    <h2 className="carousel-title text-center mt-3">Informacje o każdym z e-booków możesz znaleźć tutaj:</h2>
                    <Row xs={1} md={2} xl={3} className="justify-content-center mt-5">
                        <ShopItem image={"/img/wege-student/cover-image.jpg"} name={'"Wege Student"'} price={"69.00"} link={"wege-student"} key={"wege-student"} />
                        <ShopItem image={"/img/jesienno-zimowy/cover-image.jpg"} name={'E-book jesienno-zimowy'} price={"79.00"} link={"jesienno-zimowy"} key={"jesienno-zimowy"} />
                        <ShopItem image={"/img/owsianki/cover-image.jpg"} name={'"Owsianki na wszystkie poranki"'} price={"79.00"} link={"owsianki"} key={"owsianki"} />
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
                        src={`/img/${cdnURL}/${i}.jpg`}
                        alt="Zdjęcie produktu"
                    />
                </Carousel.Item>
            );
        }
        return items;
    }
}

export default Zestaw;