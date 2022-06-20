import { OrganizationJsonLd } from 'next-seo'
import { routesFront, contactData, companyName } from '@/config/index'

const SeoOrganizationJsonLd = () => {
  const contactInfo = contactData()

  return (
    <>
      <OrganizationJsonLd
        organizationType='EducationalOrganization'
        id={routesFront.root}
        logo={`${routesFront.root}${routesFront.assetsImgsIconsManifestIcon512}`}
        legalName={companyName}
        name={companyName}
        address={{
          streetAddress: `${contactInfo.ru.address.street}`,
          addressLocality: contactInfo.ru.address.city,
          postalCode: contactInfo.ru.address.zip,
          addressCountry: contactInfo.ru.address.countryCode
        }}
        contactPoints={[
          {
            telephone: contactInfo.ru.tels[0].val,
            contactType: contactInfo.ru.tels[0].contactType,
            areaServed: contactInfo.ru.tels[0].areaServed,
            availableLanguage: contactInfo.ru.tels[0].availableLanguage
          }
        ]}
        sameAs={[routesFront.root]}
        url={routesFront.root}
      />
    </>
  )
}

export default SeoOrganizationJsonLd
