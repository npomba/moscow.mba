import stls from '@/styles/pages/Contact.module.sass'
import { NextSeo, CorporateContactJsonLd } from 'next-seo'
import truncate from 'truncate'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/header'
import ContactCards from '@/components/general/ContactCards'
import contactData from '@/data/contactData'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import { revalidate } from '@/config/index'
import {
  fetchPrograms,
  createBlended,
  getProgramsReducedData
} from '@/helpers/index'

const contact = ({ programs }) => {
  const contactInfo = contactData()
  return (
    <>
      <NextSeo
        title={`${SetString(lang.linkContacts)} - Moscow Business Academy`}
        description={truncate(
          `${SetString(contactInfo.ru.address.city)}, ${SetString(
            contactInfo.ru.address.street
          )}, ${contactInfo.ru.tels[0].val}, ${contactInfo.ru.email.val}`,
          120
        )}
        canonical={'https://moscow.mba/contact'}
      />

      <CorporateContactJsonLd
        url='https://moscow.mba'
        logo='https://moscow.mba/logo.jpg'
        contactPoint={[
          {
            telephone: contactInfo.ru.tels[0].valDashes,
            contactType: 'customer service',
            areaServed: 'RU',
            availableLanguage: ['Russian']
          }
        ]}
      />
      <section className={breadcrumbsStls.jumbotronGeneral}>
        <div className={stls.container}>
          <Breadcrumbs />
        </div>
      </section>
      <div className={stls.container}>
        <h1 className={stls.h1}>{SetString(lang.linkContacts)}</h1>
        <ContactCards />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const programs = await fetchPrograms()
  const programsReducedData = getProgramsReducedData({
    programs,
    data: [
      'id',
      'title',
      'slug',
      'category.slug',
      'category.type',
      'studyFormat'
    ]
  })
  const programsWithBlended = createBlended(programsReducedData)

  return {
    props: {
      programs: programsWithBlended
    },
    revalidate: revalidate.default
  }
}

export default contact
