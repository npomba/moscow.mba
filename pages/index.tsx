import stls from '@/styles/pages/Index.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext, useAt } from '@/hooks/index'
// import {
//   JumbotronCta,
//   About,
//   ConferencesInEurope,
//   ForeignAffiliates,
//   StudentsInternational,
//   CorporateClients,
//   Programs,
//   Executive,
//   ContactUs
// } from '@/components/sections'
import JumbotronCta from '@/components/sections/general/JumbotronCta'
import About from '@/components/sections/general/About'
import ConferencesInEurope from '@/components/sections/general/ConferencesInEurope'
import ForeignAffiliates from '@/components/sections/general/ForeignAffiliates'
import StudentsInternational from '@/components/sections/general/StudentsInternational'
import CorporateClients from '@/components/sections/general/CorporateClients'
import Programs from '@/components/sections/general/Programs'
import Executive from '@/components/sections/general/Executive'
import ContactUs from '@/components/sections/general/ContactUs'

const PageHome: NextPage<TypePageHomeProps> = ({ programs }) => {
  usePageHandleContext({ programs })

  console.log(programs)

  const at = useAt()

  return (
    <>
      <NextSeo
        title={companyName}
        description={truncate(
          `${
            at.en
              ? 'Concur relevant business education from international experts'
              : 'Получите современное бизнес образование от международных экспертов'
          }`,
          120
        )}
        canonical={routesFront.root}
      />
      <JumbotronCta />
      <About />
      <ConferencesInEurope />
      <ForeignAffiliates />
      <StudentsInternational />
      <CorporateClients />
      <Programs />
      <Executive />
      <ContactUs overlapsFooter />
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.home, context })

export default PageHome
