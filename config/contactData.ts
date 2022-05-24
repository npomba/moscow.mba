import { useAt } from '@/hooks/index'

const useContactInfo = () => {
  const at = useAt()
  return {
    ru: {
      tels: [
        {
          href: 'tel:+7-800-500-27-47',
          val: '+7 (800) 500-27-47',
          description: at.en ? 'Free for Russia' : 'Бесплатно по России'
        },
        {
          href: 'tel:+7-495-149-00-20',
          val: '+7 (495) 149-00-20',
          description: at.en ? 'Free for Moscow' : 'Бесплатно по Москве'
        }
      ],
      address: {
        city: at.en ? 'Moscow' : 'Москва',
        street: at.en
          ? 'Derbenevskaya Naberezhnaya 11'
          : 'Дербеневская набережная 11'
      },
      email: { val: 'info@moscow.mba', mailTo: 'mailto:info@moscow.mba' }
    },
    kz: [
      {
        tels: [
          {
            href: 'tel:+7-727-311-09-11',
            val: '+7 (727) 311-09-11'
          },
          {
            href: 'tel:+7-771-766-22-20',
            val: '+7 (771) 766-22-20'
          },
          {
            href: 'tel:+7-771-766-22-23',
            val: '+7 (771) 766-22-23'
          }
        ],
        address: {
          city: at.en ? 'Almaty' : 'Алматы',
          street: at.en
            ? 'Al-Farabi Avenue 17, Nurly Tau BC, block 4B office 1603'
            : 'Проспект Аль-Фараби 17, БЦ Нурлы-Тау, Блок 4Б офис 1603'
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
          city: at.en ? 'Shymkent' : 'Шымкент',
          street: at.en ? '9 Baytursynov St' : 'ул.Байтурсынова 9'
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
        city: at.en ? 'Tashkent' : 'Ташкент',
        street: at.en
          ? '14 Afrosiab St, Afrosiyab BC'
          : 'ул.Афросиаб 14, БЦ "Афросиеб"'
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
        city: at.en ? 'New York' : 'Нью-йорк',
        street: 'Loisaida Ave 55'
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
        city: at.en ? 'Barcelona' : 'Барселона',
        street: 'Carrer de Gongora 68'
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
        city: at.en ? 'Berlin' : 'Берлин',
        street: 'Goltzstrabe 50'
      },
      email: { val: 'info@moscow.mba', mailTo: 'mailto:info@moscow.mba' }
    }
  }
}

export default useContactInfo
