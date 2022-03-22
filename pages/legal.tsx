import stls from '@/styles/pages/Legal.module.sass'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { Breadcrumbs } from '@/components/general'
import { Wrapper } from '@/components/layout'
// import {
//   CurrentLicenses,
//   MemberOfRabe,
//   MemberOfAcicel,
//   OurDiplomasAndCertificates,
//   CompanyCard,
//   LegalDocuments
// } from '@/components/sections'
import CurrentLicenses from '@/components/sections/general/CurrentLicenses'
import MemberOfRabe from '@/components/sections/general/MemberOfRabe'
import MemberOfAcicel from '@/components/sections/general/MemberOfAcicel'
import OurDiplomasAndCertificates from '@/components/sections/general/OurDiplomasAndCertificates'
import CompanyCard from '@/components/sections/general/CompanyCard'
import LegalDocuments from '@/components/sections/general/LegalDocuments'

const PageLegal = ({ programs }) => {
  usePageHandleContext({ programs })

  return (
    <>
      <NextSeo
        title={'Сведения об организации - Moscow Business Academy'}
        description={
          'Лицензия на осуществление образовательной деятельности, приложение к...'
        }
        canonical={'https://moscow.mba/legal'}
      />

      <section className={breadcrumbsStls.jumbotronGeneral}>
        <Wrapper>
          <Breadcrumbs />
        </Wrapper>
      </section>
      <Wrapper classNames={[stls.wrapper]}>
        <h1 className={stls.title}>Сведения об организации</h1>
      </Wrapper>
      {/* TODO: add cursor pointer to each license */}
      <CurrentLicenses />
      <MemberOfRabe />
      <MemberOfAcicel />
      <OurDiplomasAndCertificates />
      <CompanyCard />
      <LegalDocuments />
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.legal, context })

export default PageLegal
