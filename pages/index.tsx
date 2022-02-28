import stls from '@/styles/pages/Index.module.sass'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import {
  handleGetStaticProps,
  SetString,
  HandleGetPrograms
} from '@/helpers/index'
import lang from '@/data/translation/index'
import {
  JumbotronCta,
  About,
  ConferencesInEurope,
  ForeignAffiliates,
  StudentsInternational,
  CorporateClients,
  Programs,
  Executive,
  ContactUs
} from '@/components/sections'


const PageHome = ({ programs }) => {
  HandleGetPrograms(programs)

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
      <About />
      <ConferencesInEurope />
      <ForeignAffiliates />
      <StudentsInternational />
      <CorporateClients />
      <Programs programs={programs} />
      <Executive />
      <ContactUs overlapsFooter />
    </>
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default PageHome
