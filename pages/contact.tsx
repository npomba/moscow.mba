import stls from '@/styles/pages/Contact.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo, CorporateContactJsonLd } from 'next-seo'
import truncate from 'truncate'
import { SetString } from '@/helpers/index'
import { handleGetStaticProps } from '@/lib/index'
import lang from '@/data/translation/header'
import { ContactCards, Breadcrumbs } from '@/components/general'
import { contactData, routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'

import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'

const PageContact = ({ programs }) => {
  usePageHandleContext({ programs })
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
        <h1 className={stls.h1}>{SetString(lang.linkContacts)}</h1>
        <ContactCards />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.contact, context })

export default PageContact
