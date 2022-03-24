import stls from '@/styles/pages/About.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageTeachersProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { useAt } from '@/hooks/index'
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

  const at = useAt()

  return (
    <>
      <NextSeo
        title={`${at.en ? 'About' : 'Об академии'} MBA`}
        description={truncate(
          `${
            at.en
              ? "International Business Education. We've everything to help you reach your full potential!"
              : 'Международное бизнес-образование. У нас есть всё для раскрытия Вашего потенциала!'
          }`,
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
