import { useTranslate } from '@/hooks/index'

const useContactInfo = () => {
  return {
    ru: {
      tels: [
        {
          href: 'tel:+7-800-500-27-47',
          val: '+7 (800) 500-27-47',
          description: useTranslate({
            en: 'Free for Russia',
            def: 'Бесплатно по России'
          })
        },
        {
          href: 'tel:+7-495-149-00-20',
          val: '+7 (495) 149-00-20',
          description: useTranslate({
            en: 'Free for Moscow',
            def: 'Бесплатно по Москве'
          })
        }
      ],
      address: {
        city: useTranslate({ en: 'Moscow', def: 'Москва' }),
        street: useTranslate({
          en: 'Derbenevskaya Naberezhnaya 11',
          def: 'Дербеневская набережная 11'
        })
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
          city: useTranslate({
            en: 'Almaty',
            def: 'Алматы'
          }),
          street: useTranslate({
            en: 'Al-Farabi Avenue 17, Nurly Tau BC',
            def: 'Проспект Аль-Фараби 17, БЦ Нурлы-Тау'
          })
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
          city: useTranslate({
            en: 'Shymkent',
            def: 'Шымкент'
          }),
          street: useTranslate({
            en: '9 Baytursynov St',
            def: 'ул.Байтурсынова 9'
          })
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
        city: useTranslate({
          en: 'Tashkent',
          def: 'Ташкент'
        }),
        street: useTranslate({
          en: '14 Afrosiab St, Afrosiyab BC',
          def: 'ул.Афросиаб 14, БЦ "Афросиеб"'
        })
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
        city: useTranslate({
          en: 'New York',
          def: 'Нью-йорк'
        }),
        street: useTranslate({
          en: 'Loisaida Ave 55',
          def: 'Loisaida Ave 55'
        })
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
        city: useTranslate({
          en: 'Barcelona',
          def: 'Барселона'
        }),
        street: useTranslate({
          en: 'Carrer de Gongora 68',
          def: 'Carrer de Gongora 68'
        })
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
        city: useTranslate({
          en: 'Berlin',
          def: 'Берлин'
        }),
        street: useTranslate({
          en: 'Goltzstrabe 50',
          def: 'Goltzstrabe 50'
        })
      },
      email: { val: 'info@moscow.mba', mailTo: 'mailto:info@moscow.mba' }
    }
  }
}

export default useContactInfo
