import { useContext } from 'react'
import OverlayContext from '@/context/overlay/overlayContext'
import classNames from 'classnames'

const Content = ({ children }) => {
  const { overlayIsShown, showOverlay, hideOverlay, toggleOverlay } =
    useContext(OverlayContext)
  return (
    <main
      className={classNames({
        'main-content': true,
        'show-overlay': overlayIsShown
      })}>
      {children}
    </main>
  )
}

export default Content
