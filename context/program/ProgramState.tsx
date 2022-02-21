import { useReducer } from 'react'
import { ProgramContext, programReducer } from '@/context/index'
import { SET_PROGRAM } from '@/context/types'

const ProgramState = props => {
  const initialState = {
    program: {}
  }

  const [state, dispatch] = useReducer(programReducer, initialState)

  const setProgram = (program = []) => {
    dispatch({ type: SET_PROGRAM, payload: program })
  }

  return (
    <ProgramContext.Provider
      value={{
        program: state.program,
        setProgram
      }}>
      {props.children}
    </ProgramContext.Provider>
  )
}

export default ProgramState
