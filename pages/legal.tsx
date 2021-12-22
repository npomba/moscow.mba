import stls from '@/styles/pages/Legal.module.sass'
import { NextSeo } from 'next-seo'
import { handleGetStaticProps } from '@/helpers/index'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import CurrentLicenses from '@/components/sections/CurrentLicenses'
import MemberOfRabe from '@/components/sections/MemberOfRabe'
import MemberOfAcicel from '@/components/sections/MemberOfAcicel'
import OurDiplomasAndCertificates from '@/components/sections/OurDiplomasAndCertificates'
import CompanyCard from '@/components/sections/CompanyCard'
import LegalDocuments from '@/components/sections/LegalDocuments'
import HandleGetPrograms from '@/helpers/HandleGetPrograms'
import WrapperComponent from '@/components/layout/WrapperComponent'


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
        <WrapperComponent>
          <Breadcrumbs />
        </WrapperComponent>
      </section>
      <WrapperComponent classNames={[stls.wrapper]}>
        <h1 className={stls.title}>Сведения об организации</h1>
      </WrapperComponent>
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
