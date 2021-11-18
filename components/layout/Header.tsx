import stls from '@/styles/components/layout/Header.module.sass'
import { useContext } from 'react'
import MenuContext from '@/context/menu/menuContext'
import OverlayContext from '@/context/overlay/overlayContext'
import { useAt } from '@/helpers/index'
import HeaderTop from '@/components/header/HeaderTop'
import HeaderNav from '@/components/header/HeaderNav'
import HeaderMenuMobile from '@/components/header/HeaderMenuMobile'
import HeaderDesktopMenu from '@/components/header/HeaderDesktopMenu'

const Header = ({ programs }) => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } = useContext(
    MenuContext
  )

  const {
    overlayIsShown,
    showOverlay,
    hideOverlay,
    toggleOverlay
  } = useContext(OverlayContext)

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
        <HeaderDesktopMenu
          handleMenuClose={handleMenuClose}
          handleMouseEnter={handleMouseEnter}
          programs={programs}
        />
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
