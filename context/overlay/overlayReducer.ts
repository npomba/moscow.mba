import { OPEN_OVERLAY, CLOSE_OVERLAY, TOGGLE_OVERLAY } from '@/context/types'

const overlayReducer = (state, action) => {
  switch (action.type) {
    case OPEN_OVERLAY:
      return {
        ...state,
        overlayIsShown: action.payload
      }
    case CLOSE_OVERLAY:
      return {
        ...state,
        overlayIsShown: action.payload
      }
    case TOGGLE_OVERLAY:
      return {
        ...state,
        overlayIsShown: !state.overlayIsShown
      }
    default:
      return state
  }
}

export default overlayReducer
