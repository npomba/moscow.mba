import { useContext, useEffect } from 'react'
import programsContext from '@/context/programs/programsContext'


const HandleGetPrograms = (data) => {
  const { setPrograms } = useContext(programsContext)

  useEffect(() => {
    setPrograms(data)
  }, [])

}

export default HandleGetPrograms