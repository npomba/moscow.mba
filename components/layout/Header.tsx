import stls from '@/styles/components/layout/Header.module.sass'
import Link from 'next/link'
import { useContext } from 'react'
import MenuContext from '@/context/menu/menuContext'
import OverlayContext from '@/context/overlay/overlayContext'
import langMenu from '@/data/translation/menu'
import { SetString } from '@/helpers/index'
import { useAt } from '@/helpers/index'
import classNames from 'classnames'
import ProgramsColumn from '@/components/general/ProgramsColumn'
import HeaderTop from '@/components/header/HeaderTop'
import HeaderNav from '@/components/header/HeaderNav'
import HeaderMenuMobile from '@/components/header/HeaderMenuMobile'

const Header = ({ programs }) => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  const { overlayIsShown, showOverlay, hideOverlay, toggleOverlay } =
    useContext(OverlayContext)

  const handleMenu = () => {
    toggleMenu()
    toggleOverlay()
  }

  const handleMenuClose = e => {
    if (at.promo) {
      e.preventDefault()
      return
    }

    closeMenu()
    hideOverlay()
  }

  const handleMouseEnter = e => {
    const list = Array.from(
      document.querySelectorAll('.header-podmenu-tabs a')
    ).slice(0, -1)
    list.forEach(item => item.classList.remove('active-tab'))
    e.currentTarget.classList.add('active-tab')

    const contentList = Array.from(
      document.querySelectorAll('.header-podmenu-content')
    )
    contentList.forEach(item => {
      if (item.id === e.currentTarget.dataset.tab.slice(1)) {
        item.classList.add('dflex')
        item.classList.remove('dnone')
      } else {
        item.classList.add('dnone')
        item.classList.remove('dflex')
      }
    })
  }

  const at = useAt()

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
      href: '/programs/international-business-law',
      val: SetString(langMenu.internationalBusinessLaw)
    },
    {
      href: '/programs/mini/online',
      val: SetString(langMenu.allPrograms)
    }
  ]

  return (
    <>
      <header className={stls.container}>
        <div className={stls.topnav}>
          <HeaderTop handleMenuClose={handleMenuClose} />
          {!at.promo && (
            <HeaderNav
              handleMenu={handleMenu}
              handleMenuClose={handleMenuClose}
            />
          )}
        </div>
        <div
          className={classNames({
            'header-podmenu': true,
            [stls.hidden]: !menuIsOpen
          })}>
          <div className='container'>
            <div className='header-podmenu-flex'>
              <div className='header-podmenu-left'>
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
                            idx === 0 || idx === 1
                              ? e => handleMouseEnter(e)
                              : undefined
                          }>
                          {item.val}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className='header-podmenu-premium'>
                  <div className='label'>
                    <span>Premium</span>
                  </div>
                  <Link href='/programs/executive' locale='ru'>
                    <a onClick={handleMenuClose}>Executive MBA</a>
                  </Link>
                </div>
              </div>
              <div className='header-podmenu-right'>
                <ProgramsColumn
                  data={programs}
                  id={'header-podmenu-1'}
                  type={'mini'}
                />
                <ProgramsColumn
                  data={programs}
                  id={'header-podmenu-2'}
                  type={'mba'}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className='header-overlay'></div> */}

        <HeaderMenuMobile
          handleMenuClose={handleMenuClose}
          programs={programs}
        />
      </header>
    </>
  )
}

export default Header
