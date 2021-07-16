import { OPEN_MENU, CLOSE_MENU, TOGGLE_MENU } from '@/context/types'

const contactReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        isOpen: action.payload
      }
    case CLOSE_MENU:
      return {
        ...state,
        isOpen: action.payload
      }
    case TOGGLE_MENU:
      return {
        ...state,
        isOpen: !state.isOpen
      }
    default:
      return state
  }
}

export default contactReducer
