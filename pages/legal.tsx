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

const pageLegal = ({ programs }) => {
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
        <div className={stls.container}>
          <Breadcrumbs />
        </div>
      </section>
      <div className={stls.container}>
        <h1 className={stls.title}>Сведения об организации</h1>
        <CurrentLicenses />
        <MemberOfRabe />
        <MemberOfAcicel />
        <OurDiplomasAndCertificates />
        <CompanyCard />
        <LegalDocuments />
      </div>
    </>
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default pageLegal
