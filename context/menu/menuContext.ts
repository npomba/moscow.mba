import { createContext } from 'react'

const menuContext = createContext({
  isOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
  toggleMenu: () => {}
})

export default menuContext
