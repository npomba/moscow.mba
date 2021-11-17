import { useContext, useEffect } from 'react'
import programsContext from '@/context/programs/programsContext'


const HengeleGetPrograms = (data) => {
  const { setPrograms } = useContext(programsContext)

  useEffect(() => {
    setPrograms(data)
  }, [])

}

export default HengeleGetPrograms