import stls from '@/styles/components/header/HeaderTabs.module.sass'
import Link from 'next/link'
import langMenu from '@/data/translation/menu'
import { SetString } from '@/helpers/index'

const HeaderTabs = ({ handleMenuClose, handleMouseEnter }) => {
  const tabs = [
    {
      href: '/programs/mini/online',
      val: 'Mini MBA'
    },
    {
      href: '/programs/mba/online',
      val: 'MBA'
    },
    {
      href: '/programs/profession/online',
      val: SetString(langMenu.professions)
    },
    {
      href: '/programs/course/online',
      val: SetString(langMenu.courses)
    },
    {
      href: '/programs/international-business-law',
      val: SetString(langMenu.internationalBusinessLaw)
    },
    {
      href: '/programs/mini/online',
      val: SetString(langMenu.allPrograms)
    }
  ]

  return (
    <ul className='header-podmenu-tabs'>
      {tabs.map((item, idx) => (
        <li key={item.val + idx}>
          <Link href={item.href} locale='ru'>
            <a
              className={
                idx === 0
                  ? 'active-tab'
                  : item.val === SetString(langMenu.allPrograms)
                  ? 'allPrograms'
                  : undefined
              }
              data-tab={
                idx === 0 || idx === 1
                  ? `#header-podmenu-${idx + 1}`
                  : undefined
              }
              onClick={handleMenuClose}
              onMouseEnter={
                idx === 0 || idx === 1 ? e => handleMouseEnter(e) : undefined
              }>
              {item.val}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default HeaderTabs
