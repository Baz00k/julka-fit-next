import DefaultLayout from "../layouts/defaultLayout"
import IndexBanner from "../components/indexBanner"
import SectionWithTitle from "../components/sectionWithTitle"
import TransparentButton from "../components/transparentButton"

export default function Home() {
  return (
    <DefaultLayout>
      <IndexBanner />
      <SectionWithTitle title="O mnie">
        <p>
          Nazywam&nbsp;się Julka&nbsp;Migdalska.<br />Pomagam kobietom zmieniać
          nawyki żywieniowe i&nbsp;uczę jak jeść&nbsp;zdrowo,
          bez&nbsp;zbędnych&nbsp;restrykcji i&nbsp;wyrzutów&nbsp;sumienia.<br />Wolny
          czas spędzam w&nbsp;kuchni&nbsp;-&nbsp;gotując i&nbsp;fotografując
          jedzenie.
        </p>
        <TransparentButton href="/o-mnie">Poznaj mnie lepiej!!!</TransparentButton>
      </SectionWithTitle>
    </DefaultLayout>
  )
}
