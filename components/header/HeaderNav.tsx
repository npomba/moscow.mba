import stls from '@/styles/components/header/HeaderNav.module.sass'
import Link from 'next/link'
import { useContext } from 'react'
import MenuContext from '@/context/menu/menuContext'
import lang from '@/data/translation/header'
import { SetString } from '@/helpers/index'
import { useAt } from '@/helpers/index'
import classNames from 'classnames'

const HeaderNav = ({ handleMenu, handleMenuClose }) => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  const at = useAt()

  const links = [
    {
      href: '/about',
      val: SetString(lang.linkAbout),
      red: at.about
    },
    {
      href: '/teachers',
      val: SetString(lang.linkTeachers),
      red: at.teachers,
      locale: 'ru'
    },
    {
      href: '/webinars',
      val: SetString(lang.linkWebinars),
      red: at.webinars,
      locale: 'ru'
    },
    {
      href: '/contact',
      val: SetString(lang.linkContacts),
      red: at.contact,
      locale: 'ru'
    },
    {
      href: '/legal',
      val: SetString(lang.linkLegal),
      red: at.legal,
      locale: 'ru'
    }
  ]

  return (
    <div className='header-bottom'>
      <div className='header-podmenu-outer'>
        <div
          className={classNames({
            'header-podmenu-toggle': true,
            opened: menuIsOpen
          })}
          onClick={handleMenu}>
          <div className='pic'>
            <i></i>
            <i></i>
          </div>
          <span>{SetString(lang.programsBtn)}</span>
        </div>
      </div>
      <ul className='header-menu'>
        {links.map((item, idx) => (
          <li key={item.val + idx}>
            <Link href={item.href} locale={item.locale}>
              <a
                onClick={handleMenuClose}
                className={classNames({
                  ['widescreen-only']: idx + 1 === links.length,
                  ['red']: item.red
                })}>
                {item.val}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HeaderNav
