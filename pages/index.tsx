import stls from '@/styles/pages/Index.module.sass'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'
import JumbotronCta from '@/components/sections/JumbotronCta'
import About from '@/components/sections/About'
import ConferencesInEurope from '@/components/sections/ConferencesInEurope'
import ForeignAffiliates from '@/components/sections/ForeignAffiliates'
import StudentsInternational from '@/components/sections/StudentsInternational'
import CorporateClients from '@/components/sections/CorporateClients'
import Programs from '@/components/sections/Programs'
import Executive from '@/components/sections/Executive'
import ContactUs from '@/components/sections/ContactUs'
import { apiProgramsReqUrl, backendUrl } from '@/config/index'
import StandardECTS from '@/components/sections/StandardECTS'

// import Lang from '../components/hooks/Lang'
//

const Home = ({ programs }) => {
  return (
    <>
      <NextSeo
        title={'Moscow Business Academy'}
        description={truncate(
          `${SetString(lang.headerTitlePreHighlight)} ${SetString(
            lang.headerTitleHighlight
          )} ${SetString(lang.headerTitlePostHighlight)}`,
          120
        )}
        canonical={'https://moscow.mba/'}
      />

      <JumbotronCta />

      <div className={stls.generalContainer}>
        <About />
        <ConferencesInEurope />
        <ForeignAffiliates />
        <StudentsInternational />
        <CorporateClients />

        <Programs programs={programs} />
        <Executive />
        {/*<ContactUs />*/}
        <StandardECTS/>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default Home
