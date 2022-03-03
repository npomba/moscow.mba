import { useContext } from 'react'
import { OverlayContext, MenuContext } from '@/context/index'
import cn from 'classnames'

const Main = ({ children }) => {
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
      className={cn({
        'main-content': true,
        'show-overlay': overlayIsShown
      })}
      onClick={handleOnClick}>
      {children}
    </main>
  )
}

export default Main
