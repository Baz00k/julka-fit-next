import ShopLayout from "../../layouts/shopLayout"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import BuyProductButton from "../../components/buyProductButton"
import { useState } from "react"
import PaymentModal from "../../components/paymentModal"

const stripeID = "price_1JuOu9FlitTRS2IiexPIsSE5";
const cdnURL = 'jesienno-zimowy';
const title = "jesienno-zimowy";
const price = "79.00 zł";
const desc = "Otul się cudownym zapachem dyni, czekolady i cynamonu. Przygotuj niezwykle aromatyczny krem z dyni, rozgrzewające curry i przepyszną szarlotkę. W e-booku znajdziesz aż 50 starannie dopracowanych, wegetariańskich przepisów na jesienno-zimowe potrawy.";

function JesiennoZimowy() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <ShopLayout>
            <Container>
                <section className='my-5'>
                    <Row className='justify-content-center' md={1} lg={2}>
                        <Col className='col-xl-4 m-xl-4 p-2 gx-0'>
                            <h1 className='product-title'>E-book<br />{title}</h1>
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
                                        getCarouselItems(7)
                                    }
                                </Carousel>
                            </div>
                        </Col>
                        <Col sm={12} lg={7} xl={6} className="m-xl-4 p-2 gx-0 text-start">
                            <h2 className="carousel-title">
                                Ten e-book jest dla Ciebie, jeśli...
                            </h2>
                            <ul>
                                <li>Lubisz jeść smacznie i zdrowo.</li>
                                <li>Szukasz pomysłów na pyszne, sycące posiłki.</li>
                                <li>
                                    Uwielbiasz gotować i eksperymentować w kuchni albo…
                                    chcesz się tego nauczyć.
                                </li>
                                <li>
                                    Kochasz jesienno-zimowe smaki.
                                </li>
                                <li>
                                    W Twojej kuchni zawitała nuda i szukasz nowych
                                    inspiracji.
                                </li>
                            </ul>
                            <h2 className="carousel-title">Co znajdziesz w e-booku?</h2>
                            <ul>
                                <li>
                                    Mnóstwo kreatywnych przepisów – wegańska lasagne, dyniowe leniwe z tofu czy mięciutkie muffiny marchewkowe.
                                </li>
                                <li>
                                    Spis sezonowych warzyw i owoców.
                                </li>
                                <li>
                                    Garść sposobów na jesienną chandrę.
                                </li>
                                <li>
                                    Listę zamienników niektórych produktów.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>
                <section className="my-5">
                    <h2 className="carousel-title">Spis treści:</h2>
                    <h2 className="carousel-title-small"><u>Wstęp</u></h2>
                    <ul>
                        <li>Spis sezonowych warzyw i owoców</li>
                        <li>Garść sposobów na jesienną chandrę</li>
                        <li>Jak modyfikować kaloryczność przepisów?</li>
                        <li>Lista zamienników</li>
                        <li>Zanim zaczniesz gotować</li>
                        <li>Jak zrobić puree z dyni Hokkaido?</li>
                    </ul>
                    <h2 className="carousel-title-small">
                        <u>
                            Na słodko:
                        </u>
                    </h2>
                    <ul>
                        <li>Omlet dyniowy</li>
                        <li>Wegański omlet z tofu</li>
                        <li>Omlet szarlotkowy</li>
                        <li>Wegańskie knedle z tofu</li>
                        <li>Wegańskie dyniowe leniwe z tofu</li>
                        <li>Placuszki dyniowe z czekoladą</li>
                        <li>Wegańskie placuszki bananowe z tofu</li>
                        <li>Naleśniki cynamonowe z karmelizowanymi śliwkami</li>
                        <li>Wegańskie naleśniki czekoladowe</li>
                        <li>Jesienna owsianka z gruszką marchewką i daktylami</li>
                        <li>Dyniowa tofsianka z karmelizowaną gruszką</li>
                        <li>Jesienna miska</li>
                        <li>Imbirowa owsianka z duszonymi śliwkami</li>
                        <li>Cynamonowy budyń jaglany z gorącymi wiśniami</li>
                        <li>Czekoladowa gryczanka</li>
                        <li>Gofry dyniowe</li>
                        <li>Jabłka pieczone z granolą</li>
                        <li>Labneh z gorącymi wiśniami i karmelizowanymi orzechami</li>
                        <li>Śliwki pod owsianą kruszonką</li>
                        <li>Mięciutkie, owsiane muffiny marchewkowe</li>
                        <li>Najlepszy chlebek bananowy</li>
                        <li>Brownie z batata z solonym karmelem</li>
                    </ul>
                    <h2 className="carousel-title-small">
                        <u>Na słono:</u>
                    </h2>
                    <ul>
                        <li>Tosty z podsmażonym pomidorem, awokado i burratą</li>
                        <li>Tosty z domowym hummusem, smażonymi warzywami i serem feta</li>
                        <li>Wytrawne gofry z rozmarynem</li>
                        <li>Wytrawne gofry w wersji wegańskiej</li>
                        <li>Labneh ziołowo czosnkowy</li>
                        <li>Pesto bazyliowo-pietruszkowe</li>
                        <li>Pasta (bez)rybna z tofu</li>
                        <li>Pasztet z batata i czerwonej soczewicy</li>
                        <li>Idealny hummus z suszonymi pomidorami</li>
                        <li>Tabouleh z razowego kuskusu z fetą</li>
                        <li>Sałatka z pieczoną dynią, awokado, fetą i sezamowym dressingiem</li>
                        <li>Zupa krem z dyni Hokkaido</li>
                        <li>Zupa krem z batata i soczewicy z mleczkiem kokosowym</li>
                        <li>Gęsty krem z czerwonych warzyw, soczewicy i daktyli</li>
                        <li>Krem z pieczonych pomidorów, papryki i... wiśni</li>
                        <li>Spaghetti tofunese</li>
                        <li>Makaron z pomidorami, soczewicą i serem feta</li>
                        <li>Makaron z pieczonymi warzywami i serem feta</li>
                        <li>Wegańska lasagne z tofu</li>
                        <li>Makaron ryżowy z warzywami i sosem sezamowym</li>
                        <li>Chili sin carne</li>
                        <li>Rozgrzewające curry z batatem i soczewicą</li>
                        <li>Rozgrzewające leczo</li>
                        <li>Cukinia nadziewana kuskusem i suszonymi pomidorami</li>
                        <li>Naleśniki meksykańskie</li>
                        <li>Pieczona feta z cynamonowym miodem i różowymi winogronami</li>
                        <li>Karmelizowana brukselka z orzechami Pekan</li>
                        <li>Placuszki z cukinii i marchewki</li>
                        <li>Przepis niespodzianka</li>
                    </ul>

                    <div className="d-flex justify-content-center flex-column text-center mt-5">
                        <h2 className="carousel-title my-0">Okej Julka, przekonałaś mnie.</h2>
                        <div className="button-wrapper">
                            <BuyProductButton onClick={() => setModalShow(true)} />
                        </div>
                    </div>
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

export default JesiennoZimowy;