import ShopLayout from '../../layouts/shopLayout';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import BuyProductButton from '../../components/buyProductButton';
import { useState } from 'react';
import PaymentModal from '../../components/paymentModal';

const stripeID = 'price_1MefwOFlitTRS2IiYvEuK5n1';
const cdnURL = 'wege-student';
const title = 'Wege Student';
const price = '69.00 zł';
const desc =
    'Jak wiadomo - student to gatunek z natury biedny, zarobiony i... wiecznie głodny. Wychodzę naprzeciw! Będzie tanio, szybko, odżywczo i baaaardzo smacznie!';

function WegeStudent() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <ShopLayout>
            <Container>
                <section className='my-5'>
                    <Row className='justify-content-center' md={1} lg={2}>
                        <Col className='col-xl-4 m-xl-4 p-2 gx-0'>
                            <h1 className='product-title'>
                                E-book
                                <br />
                                {title}
                            </h1>
                            <p className='product-price fs-2 mb-4'>
                                Cena: <span style={{ color: '#b6366c' }}>{price}</span>
                            </p>
                            <p className='product-description'>{desc}</p>
                            <BuyProductButton onClick={() => setModalShow(true)} />
                        </Col>
                        <Col className='col-xl-4 m-xl-4 p-2 gx-0 d-flex justify-content-center'>
                            <div className='cover-background'>
                                <div
                                    className='cover-device'
                                    style={{
                                        backgroundImage: `url(/img/${cdnURL}/cover-image.jpg)`,
                                    }}
                                ></div>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className='my-5 text-center'>
                    <Row className='justify-content-center'>
                        <h2 className='product-title'>Opis produktu</h2>
                        <Col
                            sm={12}
                            lg={5}
                            xl={4}
                            className='col-xl-4 m-xl-4 p-2 gx-0'
                        >
                            <h3 className='carousel-title'>Co znajdziesz w środku?</h3>
                            <div className='carousel-wrapper'>
                                <Carousel variant='dark'>
                                    {getCarouselItems(7)}
                                </Carousel>
                            </div>
                        </Col>
                        <Col
                            sm={12}
                            lg={7}
                            xl={6}
                            className='m-xl-4 p-2 gx-0 text-start'
                        >
                            <h3 className='carousel-title'>
                                Co znajdziesz w e-booku?
                            </h3>
                            <ul>
                                <li>
                                    40 kreatywnych, starannie dopracowanych przepisów na
                                    proste, studenckie posiłki, w przepięknej oprawie.
                                </li>
                                <li>
                                    Pomysły na szybkie przekąski, które można chwycić w
                                    dłoń i zabrać ze sobą na uczelnię.
                                </li>
                                <li>
                                    Rady dotyczące oszczędzania (kasy na zakupach oraz
                                    czasu w kuchni).
                                </li>
                                <li>
                                    Plan minimum, czyli trochę o tym, jakie strategie
                                    możemy obrać, gdy nie mamy czasu/energii nawet na
                                    błyskawiczny makaron.
                                </li>
                                <li>
                                    Listę zamienników niektórych produktów spożywczych.
                                </li>
                                <li>
                                    2 wersje e-booka. Z wyliczonym makro oraz BEZ
                                    podanych kcal. Możesz korzystać z której wersji
                                    chcesz!
                                </li>
                                <li>
                                    3-dniowy jadłospis 1800 kcal na bazie przepisów z
                                    e-booka.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>
                <section className='my-5'>
                    <h2 className='carousel-title text-center my-5 fs-2'>
                        Czy ten e-book jest dla Ciebie?
                    </h2>
                    <h3 className='carousel-title'>
                        Ten e-book jest dla Ciebie, jeśli...
                    </h3>
                    <ul>
                        <li>
                            Chcesz jeść tanio, ale jednocześnie smacznie i odżywczo.
                        </li>
                        <li>
                            Potrzebujesz szybkich przepisów (np. na ratunek przed
                            sesją).
                        </li>
                        <li>
                            Lubisz prostotę w kuchni i nie chcesz siedzieć w niej
                            godzinami.
                        </li>
                        <li>
                            Chcesz dowiedzieć się jak oszczędzać kasę na zakupach
                            spożywczych i czas w kuchni.
                        </li>
                        <li>
                            Zamiast wcinać zupki chińskie, chcesz spróbować
                            błyskawicznej zupki curry i innych pyszności!
                        </li>
                        <li>
                            Chcesz odżywiać się wegetariańsko, ale nie masz pomysłów na
                            posiłki.
                        </li>
                    </ul>
                    <h3 className='carousel-title'>
                        Ten e-book NIE jest dla Ciebie, jeśli...
                    </h3>
                    <ul>
                        <li>
                            Szukasz wyszukanych, skomplikowanych posiłków i lubisz
                            buszować w kuchni godzinami.
                        </li>
                        <li>
                            Nie zadowoli Cię prosty przepis z ziemniora, ekspresowy
                            makaron czy naleśniki.
                        </li>
                        <li>Nie lubisz przepisów bez mięsa i ryb.</li>
                        <li>
                            Nienawidzisz strączków, a gdy widzisz tofu - uciekasz,
                            gdzie pieprz rośnie.
                        </li>
                    </ul>
                </section>

                <section className='my-5'>
                    <h2 className='carousel-title'>Spis treści:</h2>
                    <h3 className='carousel-title-small'>
                        <u>Wstęp</u>
                    </h3>
                    <ul>
                        <li>Jak oszczędzać kasę na zakupach spożywczych?</li>
                        <li>Zaoszczędź trochę czasu w kuchni!</li>
                        <li>Plan minimum</li>
                        <li>Lista zamienników</li>
                        <li>Zanim zaczniesz gotować</li>
                        <li>Pomysły na wartościowe przekąski</li>
                    </ul>

                    <h3 className='carousel-title-small'>
                        <u>Szybkie śniadanie... kiedy zajęcia na uczelni zaczynają się o 8:00</u>
                    </h3>
                    <ul>
                        <li>Omlet bananowy 1,2,3,4</li>
                        <li>Omlet sernikowy z gorącymi wiśniami</li>
                        <li>Omlet meksykański</li>
                        <li>Chleb z jajem</li>
                        <li>Tosty z serem, ale na bogato</li>
                        <li>Szakszuka po meksykańsku</li>
                        <li>Tofucznica na zielono</li>
                        <li>Czekoladowe naleśniory z tofu</li>
                        <li>Waniliowe placuszki z borówkami</li>
                        <li>Czekoladowy koktajl mocy</li>
                        <li>Nocny cynamonowy krem owsiany</li>
                        <li>Mini rollsy na 2 sposoby</li>
                        <li>Śniadaniowy omlet w tortilli</li>
                        <li>Ekspresowa pasta jajeczna</li>
                        <li>Kanapkowa pasta z cieciorki (bez blendera)</li>
                        <li>Pasta z tofu i suszonych pomidorów</li>
                    </ul>

                    <h3 className='carousel-title-small'>
                        <u>Obiadki... tańsze niż na studenckiej stołówce</u>
                    </h3>
                    <ul>
                        <li>Pomidorowa tania jak barszcz</li>
                        <li>Błyskawiczna zupka curry</li>
                        <li>Zupa z &quot;tofuwkładką&quot;</li>
                        <li>Smażony brązowy ryż z warzywami</li>
                        <li>Danie z puszki, czyli fasolka w pomidorach</li>
                        <li>Zielone kluchy</li>
                        <li>Kozacki makaron na czarną godzinę</li>
                        <li>Makaron hummusowy</li>
                        <li>Makaron w kremowym sosie pesto</li>
                        <li>Makaron w kremowym sosie pomidorowym</li>
                        <li>Sałatka z kaszy gryczanej</li>
                        <li>Sałatka w 5 minut</li>
                        <li>Soczewica w pomidorach</li>
                        <li>Tofu w sosie słodko-kwaśnym</li>
                        <li>Paluszki (bez)rybne</li>
                        <li>Studenckie mielone z tofu</li>
                        <li>Tofumięsko do wrapów i nie tylko</li>
                    </ul>

                    <h3 className='carousel-title-small'>
                        <u>Na weekendy... kiedy czasu jest ciut więcej, ale kasy nadal nie bardzo</u>
                    </h3>
                    <ul>
                        <li>Pomarańczowe naleśniory na maślance</li>
                        <li>Bananowy pudding z chleba, co go zapomnieli</li>
                        <li>Zupka mocy</li>
                        <li>Zupa krem z pora i kalafiora</li>
                        <li>Pełnoziarniste tortille antyinflacyjne</li>
                        <li>Wytrawne placuszki za 6 zeta</li>
                        <li>Ziemniaczana sałatka studencka</li>
                    </ul>

                    <div className='d-flex justify-content-center flex-column text-center mt-5'>
                        <h2 className='carousel-title my-0'>
                            Okej Julka, przekonałaś mnie.
                        </h2>
                        <div className='button-wrapper'>
                            <BuyProductButton onClick={() => setModalShow(true)} />
                        </div>
                    </div>
                </section>

                <PaymentModal
                    show={modalShow}
                    setModalShow={setModalShow}
                    productID={stripeID}
                />
            </Container>
        </ShopLayout>
    );

    function getCarouselItems(number) {
        const items = [];
        for (let i = 1; i <= number; i++) {
            items.push(
                <Carousel.Item key={i}>
                    <img
                        className='d-block w-100'
                        src={`/img/${cdnURL}/${i}.jpg`}
                        alt='Zdjęcie produktu'
                    />
                </Carousel.Item>
            );
        }
        return items;
    }
}

export default WegeStudent;
