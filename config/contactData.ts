import lang from '@/data/translation/header'
import langContact from '@/data/translation/contact'
import langCities from '@/data/translation/cities'

const ContactInfo = () => {
  return {
    ru: {
      tels: [
        {
          href: 'tel:+7-800-500-27-47',
          val: '+7 (800) 500-27-47',
          valDashes: '+7-800-500-27-47'
        },
        { href: 'tel:+7-495-149-00-20', val: '+7 (495) 149-00-20' }
      ],
      address: {
        city: langCities.moscow,
        street: lang.addressStreet
      },
      email: { val: 'info@moscow.mba', mailTo: 'mailto:info@moscow.mba' }
    },

    kz: [
      {
        tels: [
          {
            href: 'tel:+7-777-398-97-40',
            val: '+7 (777) 398-97-40'
          },
          {
            href: 'tel:+7-771-766-22-24',
            val: '+7 (771) 766-22-24'
          },
          {
            href: 'tel:+7-727-311-15-00',
            val: '+7 (727) 311-15-00'
          }
        ],
        address: {
          city: langCities.almaty,
          street: langContact.almatyAddressStreet
        },
        email: {
          val: 'almaty@moscow.mba',
          mailTo: 'mailto:almaty@moscow.mba'
        }
      },
      {
        tels: [
          {
            href: 'tel:+7-777-670-53-15',
            val: '+7 (777) 670-53-15'
          },
          {
            href: 'tel:+7-777-670-53-11',
            val: '+7 (777) 670-53-11'
          }
        ],
        address: {
          city: langCities.shymkent,
          street: langContact.shymkentAddressStreet
        },
        email: {
          val: 'shymkent@moscow.mba',
          mailTo: 'mailto:shymkent@moscow.mba'
        }
      }
    ],

    uz: {
      tels: [
        {
          href: 'tel:+998-71-256-01-48',
          val: '+998-71-256-01-48'
        },
        {
          href: 'tel:+998-98-125-85-53',
          val: '+998-98-125-85-53'
        },
        {
          href: 'tel:+998-98-125-85-54',
          val: '+998-98-125-85-54'
        }
      ],
      address: {
        city: langCities.tashkent,
        street: langContact.tashkentAddressStreet
      },
      email: {
        val: 'tashkent@moscow.mba',
        mailTo: 'mailto:tashkent@moscow.mba'
      }
    },

    us: {
      tels: [
        {
          href: 'tel:+1-631-694-27-84',
          val: '+1 (631) 694-27-84'
        }
      ],
      address: {
        city: langCities.newYork,
        street: langContact.newyorkAddressStreet
      },
      email: { val: 'info@moscow.mba', mailTo: 'mailto:info@moscow.mba' }
    },

    es: {
      tels: [
        {
          href: 'tel:+34-93-273-64-90',
          val: '+34 (93) 273-64-90'
        }
      ],
      address: {
        city: langCities.barcelona,
        street: langContact.barcelonaAddressStreet
      },
      email: { val: 'info@moscow.mba', mailTo: 'mailto:info@moscow.mba' }
    },

    de: {
      tels: [
        {
          href: 'tel:+49-30-436-23-98',
          val: '+49 (30) 436-23-98'
        }
      ],
      address: {
        city: langCities.berlin,
        street: langContact.berlinAddressStreet
      },
      email: { val: 'info@moscow.mba', mailTo: 'mailto:info@moscow.mba' }
    }
  }
}

export default ContactInfo
