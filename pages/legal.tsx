import stls from '@/styles/pages/Legal.module.sass'
import { NextSeo } from 'next-seo'
import { handleGetStaticProps, HandleGetPrograms } from '@/helpers/index'
import { Breadcrumbs } from '@/components/general'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'

import {
  CurrentLicenses,
  MemberOfRabe,
  MemberOfAcicel,
  OurDiplomasAndCertificates,
  CompanyCard,
  LegalDocuments
} from '@/components/sections'
import { Wrapper } from '@/components/layout'

const PageLegal = ({ programs }) => {
  HandleGetPrograms(programs)
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
      <CurrentLicenses />
      <MemberOfRabe />
      <MemberOfAcicel />
      <OurDiplomasAndCertificates />
      <CompanyCard />
      <LegalDocuments />
    </>
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default PageLegal
