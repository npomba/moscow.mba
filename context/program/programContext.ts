import { createContext } from 'react'

const programContext = createContext({
  program: null,
  setProgram: program => {}
})

export default programContext
