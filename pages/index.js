import DefaultLayout from "../layouts/defaultLayout"
import IndexBanner from "../components/indexBanner"
import SectionWithTitle from "../components/sectionWithTitle"
import OutlineButton from "../components/outlineButton"
import IndexColumns from "../components/indexColumns"
import NewsletterBanner from "../components/newsletterBanner"

function Home() {
  return (
    <DefaultLayout>
      <IndexBanner />
      <SectionWithTitle title="O mnie">
        <p>
          Nazywam&nbsp;się Julka&nbsp;Migdalska.<br />Pomagam kobietom zmieniać
          nawyki żywieniowe i&nbsp;uczę jak jeść&nbsp;zdrowo,
          bez&nbsp;zbędnych&nbsp;restrykcji i&nbsp;wyrzutów&nbsp;sumienia.<br />Wolny
          czas spędzam w&nbsp;kuchni&nbsp;-&nbsp;gotując, fotografując jedzenie i nagrywając filmy z pysznymi przepisami.
        </p>
        <OutlineButton href="/o-mnie">Poznaj mnie lepiej!!!</OutlineButton>
      </SectionWithTitle>
      <IndexColumns />
      <NewsletterBanner />
    </DefaultLayout>
  );
}

export default Home;