import stls from "@/styles/components/layout/Header.module.sass"
import {useState } from "react"
import HeaderMenu from '../header/HeaderMenu'
import HeaderTop from '../header/HeaderTop'


const Header = ({ programs }) => {

  const [openMenu, setOpenMenu] = useState(false)

  const handleMenu = (value: boolean) => {
    setOpenMenu(value)
  }

  return (
    <header>
      <div>
        <HeaderTop handleMenu={handleMenu} openMenu={openMenu}/>
      </div>
      {
        openMenu && <div className={stls.menu}>
          <HeaderMenu programs={programs} handleMenu={handleMenu} />
        </div>
      }
    </header>
  )
}

export default Header