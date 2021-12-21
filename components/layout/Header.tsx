import stls from "@/styles/components/layout/Header.module.sass"
import { useContext, useState } from "react"
import HeaderMenu from '../header/HeaderMenu'
import HeaderTop from '../header/HeaderTop'
import MenuContext from '@/context/menu/menuContext'
import OverlayContext from '@/context/overlay/overlayContext'


const Header = ({ programs }) => {
  const { menuIsOpen, openMenu, closeMenu } = useContext(MenuContext)
  const { hideOverlay, showOverlay } = useContext(OverlayContext)

  const handleMenu = (value: boolean) => {
    if (value) {
      openMenu()
      showOverlay()
    } else {
      closeMenu()
      hideOverlay()
    }
  }

  return (
    <header>
      <div>
        <HeaderTop handleMenu={handleMenu} openMenu={menuIsOpen} />
      </div>
      {
        menuIsOpen && <div className={stls.menu}>
          <HeaderMenu programs={programs} handleMenu={handleMenu} />
        </div>
      }
    </header>
  )
}

export default Header