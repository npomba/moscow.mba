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
        <li>
          <Link href='/about'>
            <a onClick={handleMenuClose} className={at.about ? 'red' : ''}>
              {SetString(lang.linkAbout)}
            </a>
          </Link>
        </li>
        <li>
          <Link href='/teachers' locale='ru'>
            <a onClick={handleMenuClose} className={at.teachers ? 'red' : ''}>
              {SetString(lang.linkTeachers)}
            </a>
          </Link>
        </li>
        <li>
          <Link href='/webinars' locale='ru'>
            <a onClick={handleMenuClose} className={at.webinars ? 'red' : ''}>
              {SetString(lang.linkWebinars)}
            </a>
          </Link>
        </li>

        <li>
          <Link href='/contact'>
            <a onClick={handleMenuClose} className={at.contact ? 'red' : ''}>
              {SetString(lang.linkContacts)}
            </a>
          </Link>
        </li>

        <li className='widescreen-only'>
          <Link href='/legal' locale='ru'>
            <a onClick={handleMenuClose} className={at.legal ? 'red' : ''}>
              {SetString(lang.linkLegal)}
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HeaderNav
