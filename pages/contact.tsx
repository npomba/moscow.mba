import stls from '@/styles/pages/Contact.module.sass'
import { NextSeo, CorporateContactJsonLd } from 'next-seo'
import truncate from 'truncate'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/header'
import ContactCards from '@/components/general/ContactCards'
import contactData from '@/data/contactData'
import { apiProgramsReqUrl, backendUrl } from '@/config/index'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'

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
        <div className={stls.generalContainer}>
          <Breadcrumbs />
        </div>
      </section>
      <div className={stls.generalContainer}>
        <h1 className={stls.h1}>{SetString(lang.linkContacts)}</h1>
        <ContactCards />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default contact
