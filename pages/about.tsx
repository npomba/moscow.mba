import stls from '@/styles/pages/About.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageTeachersProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import lang from '@/data/translation/about'
import langIndex from '@/data/translation/index'
import { routesFront } from '@/config/index'
import { SetString } from '@/helpers/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
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

const PageAbout: NextPage<TypePageTeachersProps> = ({ programs, teachers }) => {
  usePageHandleContext({ programs })

  return (
    <>
      <NextSeo
        title={`${SetString(lang.title)} MBA`}
        description={truncate(`${SetString(langIndex.headerSubtitle)}`, 120)}
        canonical={'https://moscow.mba/about'}
      />
      <JumbotronMain />
      <About />
      <ConferencesInEurope />
      <ForeignAffiliates />
      <StudentsInternational />
      <CorporateClients />
      <Teachers teachers={teachers} />
      <UpToDateContent />
      <Accreditation />
      <ContactUs overlapsFooter />
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.about, context })

export default PageAbout
