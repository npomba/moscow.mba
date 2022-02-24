import { header, contact, cities } from '@/data/index'

const contactInfo = () => {
  return {
    ru: {
      tels: [
        {
          href: 'tel:+7-800-500-27-47',
          val: '+7 (800) 500-27-47',
          description: 'Бесплатно по России'
        },
        {
          href: 'tel:+7-495-149-00-20',
          val: '+7 (495) 149-00-20',
          description: 'Бесплатно по Москве'
        }
      ],
      address: {
        city: cities.moscow,
        street: header.addressStreet
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
          city: cities.almaty,
          street: contact.almatyAddressStreet
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
          city: cities.shymkent,
          street: contact.shymkentAddressStreet
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
        city: cities.tashkent,
        street: contact.tashkentAddressStreet
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
        city: cities.newYork,
        street: contact.newyorkAddressStreet
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
        city: cities.barcelona,
        street: contact.barcelonaAddressStreet
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
        city: cities.berlin,
        street: contact.berlinAddressStreet
      },
      email: { val: 'info@moscow.mba', mailTo: 'mailto:info@moscow.mba' }
    }
  }
}

export default contactInfo
