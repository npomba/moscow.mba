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

  const slugs = await axios.get(
    `${routesBack.root}${routesBack.programsPaths}/${type}`
  )

  const paths = slugs.data.map(({ slug }) => ({
    params: { slug }
  }))

  return paths
}

export default fetchPaths
