import stls from '@/styles/pages/Contact.module.sass'
import { NextSeo, CorporateContactJsonLd } from 'next-seo'
import truncate from 'truncate'
import {
  SetString,
  HandleGetPrograms,
  handleGetStaticProps
} from '@/helpers/index'
import { header } from '@/data/index'
import { ContactCards, Breadcrumbs } from '@/components/general'
import { contactData } from '@/config/index'

import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'

const PageContact = ({ programs }) => {
  HandleGetPrograms(programs)
  const contactInfo = contactData()
  return (
    <>
      <NextSeo
        title={`${SetString(header.linkContacts)} - Moscow Business Academy`}
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
            telephone: contactInfo.ru.tels[0].val,
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
        <h1 className={stls.h1}>{SetString(header.linkContacts)}</h1>
        <ContactCards />
      </div>
    </>
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default PageContact
