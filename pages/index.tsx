import stls from '@/styles/pages/Index.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import lang from '@/data/translation/index'
import { routesFront } from '@/config/index'
import { SetString } from '@/helpers/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
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

const PageHome: NextPage<TypePageHomeProps> = ({ programs }) => {
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

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.home, context })

export default PageHome
