import DefaultLayout from "../layouts/defaultLayout"
import { Container } from "react-bootstrap"
import PageTitle from "../components/pageTitle"
import OutlineButton from "../components/outlineButton"

function Placeholder() {
    return (
        <DefaultLayout title="Newsletter - Julia Migdalska">
            <Container className='justify-content-center text-center'>
                <PageTitle>Newsletter</PageTitle>
                <h2 className="font-abhaya">Zdrowe podejście, dużo śmiechu i&nbsp;dietetyczne ciekawostki,&nbsp;czyli...</h2>
                <p>
                    dołącz do mojego&nbsp;newslettera,<br />
                    <b>odbierz darmowy jadłospis wegetariański na&nbsp;3&nbsp;dni</b><br />
                    i&nbsp;dowiedz się, jak być &quot;FIT&quot;, jeść pizzę i mieć przy tym wolną&nbsp;głowę!
                </p>
                <div className="d-grid gap-2">
                    <OutlineButton type='submit' variant='secondary' size='lg'>Dołączam!</OutlineButton>
                </div>
                // TODO finish newsletter page
            </Container>
        </DefaultLayout>
    );
}

export default Placeholder;