import stls from '@/styles/pages/Index.module.sass'
import { TypePageHomeProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { handleGetStaticProps, SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import { usePageHandleContext } from '@/hooks/index'
import JumbotronCta from '@/components/sections/JumbotronCta'
import About from '@/components/sections/About'
import ConferencesInEurope from '@/components/sections/ConferencesInEurope'
import ForeignAffiliates from '@/components/sections/ForeignAffiliates'
import StudentsInternational from '@/components/sections/StudentsInternational'
import CorporateClients from '@/components/sections/CorporateClients'
import Programs from '@/components/sections/Programs'
import Executive from '@/components/sections/Executive'
import ContactUs from '@/components/sections/ContactUs'

const PageHome = ({ programs }: TypePageHomeProps) => {
  usePageHandleContext({ programs })

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
