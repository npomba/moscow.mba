import stls from '@/styles/pages/About.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageTeachersProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { useTranslate } from '@/hooks/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
// import {
//   JumbotronMain,
//   About,
//   ConferencesInEurope,
//   ForeignAffiliates,
//   StudentsInternational,
//   CorporateClients,
//   Teachers,
//   UpToDateContent,
//   Accreditation,
//   ContactUs
// } from '@/components/sections'
import JumbotronMain from '@/components/sections/general/JumbotronMain'
import About from '@/components/sections/general/About'
import ConferencesInEurope from '@/components/sections/general/ConferencesInEurope'
import ForeignAffiliates from '@/components/sections/general/ForeignAffiliates'
import StudentsInternational from '@/components/sections/general/StudentsInternational'
import CorporateClients from '@/components/sections/general/CorporateClients'
import Teachers from '@/components/sections/general/Teachers'
import UpToDateContent from '@/components/sections/general/UpToDateContent'
import Accreditation from '@/components/sections/general/Accreditation'
import ContactUs from '@/components/sections/general/ContactUs'

const PageAbout: NextPage<TypePageTeachersProps> = ({ programs, teachers }) => {
  usePageHandleContext({ programs })

  return (
    <>
      <NextSeo
        title={`${useTranslate({ en: 'About', def: 'Об академии' })} MBA`}
        description={truncate(
          `${useTranslate({
            en: "International Business Education. We've everything to help you reach your full potential!",
            def: 'Международное бизнес-образование. У нас есть всё для раскрытия Вашего потенциала!'
          })}`,
          120
        )}
        canonical={`${routesFront.root}${routesFront.about}`}
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
