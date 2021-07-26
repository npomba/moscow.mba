import { useContext } from 'react'
import OverlayContext from '@/context/overlay/overlayContext'
import MenuContext from '@/context/menu/menuContext'
import classNames from 'classnames'

const Content = ({ children }) => {
  const { overlayIsShown, showOverlay, hideOverlay, toggleOverlay } =
    useContext(OverlayContext)

  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  const handleOnClick = () => {
    closeMenu()
    hideOverlay()
  }
  return (
    <main
      className={classNames({
        'main-content': true,
        'show-overlay': overlayIsShown
      })}
      onClick={handleOnClick}>
      {children}
    </main>
  )
}

export default Content
