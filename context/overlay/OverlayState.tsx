import { useReducer } from 'react'
import OverlayContext from '@/context/overlay/overlayContext'
import overlayReducer from '@/context/overlay/overlayReducer'
import { OPEN_OVERLAY, CLOSE_OVERLAY, TOGGLE_OVERLAY } from '@/context/types'

const OverlayState = props => {
  const initialState = {
    isOpen: false
  }

  const [state, dispatch] = useReducer(overlayReducer, initialState)

  const showOverlay = () => {
    dispatch({ type: OPEN_OVERLAY, payload: true })
  }

  const hideOverlay = () => {
    dispatch({ type: CLOSE_OVERLAY, payload: false })
  }

  const toggleOverlay = () => {
    dispatch({ type: TOGGLE_OVERLAY, payload: null })
  }

  return (
    <OverlayContext.Provider
      value={{
        overlayIsShown: state.overlayIsShown,
        showOverlay,
        hideOverlay,
        toggleOverlay
      }}>
      {props.children}
    </OverlayContext.Provider>
  )
}

export default OverlayState
