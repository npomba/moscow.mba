import { NextSeo } from 'next-seo'
import { server, apiProgramsReqUrl } from '@/config/index'
import CurrentLicenses from '@/components/sections/CurrentLicenses'
import MemberOfRABE from '@/components/sections/MemberOfRABE'
import OurDiplomasAndCertificates from '@/components/sections/OurDiplomasAndCertificates'
import CompanyCard from '@/components/sections/CompanyCard'
import LegalDocuments from '@/components/sections/LegalDocuments'
import stls from '@/styles/modules/LegalPage.module.sass'

const legal = ({ programs }) => {
  return (
    <>
      <NextSeo
        title={'Нормативные документы - Moscow Business Academy'}
        description={
          'Лицензия на осуществление образовательной деятельности, приложение к...'
        }
        canonical={'https://moscow.mba/legal'}
      />

      <div className='container'>
        <h1 className={stls.mainHeading}>Сведения об организации</h1>
        <CurrentLicenses />
        <MemberOfRABE />
        <OurDiplomasAndCertificates />
        <CompanyCard />
        <LegalDocuments />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${server}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default legal
