import stls from '@/styles/pages/About.module.sass'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import {
  JumbotronMain,
  About,
  ConferencesInEurope,
  ForeignAffiliates,
  StudentsInternational,
  CorporateClients,
  Teachers,
  UpToDateContent,
  Accreditation,
  ContactUs
} from '@/components/sections'
import {
  SetString,
  handleGetStaticProps,
  HandleGetPrograms
} from '@/helpers/index'
import lang from '@/data/translation/about'
import langIndex from '@/data/translation/index'


const PageAbout = ({ programs, teachers }) => {
  HandleGetPrograms(programs)

  return (
    <>
      <NextSeo
        title={`${SetString(lang.title)} MBA`}
        description={truncate(`${SetString(langIndex.headerSubtitle)}`, 120)}
        canonical={'https://moscow.mba/about'}
      />

      <JumbotronMain />

      <div className={stls.container}>
        <About />
        <ConferencesInEurope />
        <ForeignAffiliates />
        <StudentsInternational />
        <CorporateClients />
        <Teachers teachers={teachers} />
        <UpToDateContent />
        <Accreditation />
        <ContactUs overlapsFooter />
      </div>
    </>
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default PageAbout
