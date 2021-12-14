import stls from "@/styles/components/layout/Header.module.sass"
import { useContext } from "react"
import OverlayContext from '@/context/overlay/overlayContext'
import HeaderMenu from '../header/HeaderMenu'
import HeaderTop from '../header/HeaderTop'
import MenuContext from '@/context/menu/menuContext'
import useAt from "@/helpers/useAt"


const Header = ({programs}) => {
    const at = useAt()
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










    return (
        <header>
            <div>
                <HeaderTop/>
            </div>
            <div className={stls.menu}>
                <HeaderMenu programs={programs}/>
            </div>
        </header>
    )
}

export default Header