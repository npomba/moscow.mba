import { SET_PROGRAM } from '@/context/types'

const programReducer = (state, action) => {
  switch (action.type) {
    case SET_PROGRAM:
      return {
        ...state,
        program: action.payload
      }
    default:
      return state
  }
}

export default programReducer
