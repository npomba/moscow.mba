import { routesBack } from '@/config/index'
import qs from 'qs'
import axios from 'axios'

type TypefetchPaths = {
  studyFormat: string
  type: string
}

const fetchPaths = async ({ studyFormat, type }: TypefetchPaths) => {
  // const query = qs.stringify({
  //   _limit: -1
  // })

  const paths = await axios.get(
    `${routesBack.root}${routesBack.programsPaths}/${type}`
  )

  return paths.data
}

export default fetchPaths
