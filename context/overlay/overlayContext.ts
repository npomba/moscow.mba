import { createContext } from 'react'

const overlayContext = createContext({
  overlayIsShown: false,
  showOverlay: () => {},
  hideOverlay: () => {},
  toggleOverlay: () => {}
})

export default overlayContext
