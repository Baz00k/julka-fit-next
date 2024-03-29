import ShopLayout from "../../layouts/shopLayout"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import BuyProductButton from "../../components/buyProductButton"
import { useState } from "react"
import PaymentModal from "../../components/paymentModal"

const stripeID = "price_1JJZLPFlitTRS2IiqHTAZQJh";
const cdnURL = 'owsianki';
const title = "Owsianki na wszystkie poranki";
const price = "79.00 zł";
const desc = "Chcesz przełamać rutynę i każdego dnia jeść nową, pyszną owsiankę? Ten e-book Ci w tym pomoże! Znajdziesz w nim aż 50 przepisów na najróżniejsze owsianki.";

function Owsianki() {

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
                            <h3 className="carousel-title">
                                Ten e-book jest dla Ciebie, jeśli...
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
                                    W Twojej kuchni zawitała nuda i szukasz nowych
                                    inspiracji.
                                </li>
                            </ul>
                            <h3 className="carousel-title">Co znajdziesz w e-booku?</h3>
                            <ul>
                                <li>
                                    Mnóstwo kreatywnych przepisów - owsianki kremowe,
                                    pieczone, z tofu czy siemieniem lnianym.
                                </li>
                                <li>
                                    Owsiankowe rady – dowiesz się m.in. jak zamienić
                                    owsiankę w pełnowartościowy posiłek i jak zmienić
                                    „nijaką papkę” w królewskie śniadanie.
                                </li>
                                <li>Listę zamienników niektórych produktów.</li>
                            </ul>
                        </Col>
                    </Row>
                </section>
                <section className="my-5">
                    <h2 className="carousel-title">Spis treści:</h2>
                    <h3 className="carousel-title-small"><u>Wstęp</u></h3>
                    <ul>
                        <li>Dlaczego akurat owsianki?</li>
                        <li>Jak zamienić owsiankę w pełnowartościowy posiłek?</li>
                        <li>Jak zamienić &quot;nijaką papkę&quot; w królewskie śniadanie?</li>
                        <li>Lista zamienników</li>
                    </ul>
                    <h3 className="carousel-title-small">
                        <u
                        >Owsianki zwykłe-niezwykłe, czyli jak zmienić owsiankę w
                            królewskie śniadanie?</u
                        >
                    </h3>
                    <ul>
                        <li>Bananowa z karmelizowanym bananem</li>
                        <li>Obłędnie kremowa, czekoladowa</li>
                        <li>Mleczna z duszonym jabłkiem</li>
                        <li>Złota</li>
                        <li>Waniliowa z gorącymi wiśniami</li>
                        <li>Tropikalna</li>
                        <li>Z tahini i granatem</li>
                        <li>Jogurtowa</li>
                        <li>Z kardamonem i karmelizowaną gruszką</li>
                        <li>Pb&jelly</li>
                        <li>Z kaszą manną, gorącymi jagodami i białą czekoladą</li>
                        <li>Prażona z duszonym jabłkiem</li>
                        <li>Makowa</li>
                        <li>Owoce leśne + tajny sos z białej czekolady</li>
                    </ul>
                    <h3 className="carousel-title-small">
                        <u>Owsianki dla tajniaków... czyli jak w słodkim posiłku przemycić warzywo!</u>
                    </h3>
                    <ul>
                        <li>Dyniowa</li>
                        <li>Z cukinią</li>
                        <li>Z batatem, karmelizowanym bananem i malinami</li>
                        <li>Z kalafiorem i gorącymi wiśniami</li>
                        <li>Marchewkowa z karmelizowanymi orzechami</li>
                        <li>Wytrawna z warzywami i tofu</li>
                    </ul>
                    <h3 className="carousel-title-small">
                        <u>Budynie owsiane... czyli zakochaj się w kremowejstrukturze!</u>
                    </h3>
                    <ul>
                        <li>Piernikowy z duszonymi śliwkami</li>
                        <li>Makowy z pomarańczą</li>
                        <li>Kokosowy z malinami</li>
                        <li>Czekoladowo-malinowy z chili</li>
                        <li>Malinowy</li>
                        <li>Cytrynowy</li>
                        <li>A&apos;la zielony mech z granatem</li>
                        <li>Bananowo-czekoladowy</li>
                        <li>Owsiano-gryczany z gorącymi owocam</li>
                    </ul>
                    <h3 className="carousel-title-small">
                        <u>Owsianki z budyniem... czyli niesamowita kremowość i duża objętość w jednym!</u>
                    </h3>
                    <ul>
                        <li>Solony karmel</li>
                        <li>Kokosowa chmurka z mango</li>
                        <li>Kremowa, waniliowa</li>
                    </ul>
                    <h3 className="carousel-title-small">
                        <u>Pieczone owsianki... czyli jak zamienić owsiankę w miniciasto!</u>
                    </h3>
                    <ul>
                        <li>Czekoladowa z wiśniami</li>
                        <li>Kokosowa z borówkami i czekoladą</li>
                        <li>A&apos;la brownie</li>
                        <li>A&apos;la ciasto marchewkowe</li>
                        <li>Sernikowa</li>
                        <li>A&apos;la szarlotka</li>
                        <li>A&apos;la chlebek bananowy</li>
                    </ul>
                    <h3 className="carousel-title-small">
                        <u>Siemianki... czyli bogactwo Omega-3 na talerzu!</u>
                    </h3>
                    <ul>
                        <li>Klasyk klasyków, czyli siemianka bananowa</li>
                        <li>Mrożona jagodowa</li>
                        <li>Wegańska w wersji basic</li>
                    </ul>
                    <h3 className="carousel-title-small">
                        <u>Owsianki z tofu czyli... tofsianki!</u>
                    </h3>
                    <ul>
                        <li>Czekoladowa</li>
                        <li>Waniliowa</li>
                    </ul>
                    <h3 className="carousel-title-small">
                        <u>Płatki owsiane w innej odsłonie...czyli omlet, smoothie i inne cudowności!</u>
                    </h3>
                    <ul>
                        <li>Owoce leśne pod owsianą kruszonką</li>
                        <li>Wegański omlet owsiany</li>
                        <li>Owsiana granola z patelni</li>
                        <li>Nocna owsianka proteinowa</li>
                        <li>Lodowe smoothie owsiane z owoców leśnych</li>
                        <li>Nocna owsianka solone masło orzechowe</li>
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


export default Owsianki;