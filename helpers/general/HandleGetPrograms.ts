import { useContext, useEffect } from 'react'
import { ProgramsContext } from '@/context/index'

const HandleGetPrograms = data => {
  const { setPrograms } = useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(data)
  }, [])
}

export default HandleGetPrograms
