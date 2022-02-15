import { TypeStudyFormat, TypeCategories } from '@/types/index'
import { fetchPaths } from '@/helpers/index'
import { fallback } from '@/config/index'

type TypeHandleGetStaticPaths = {
  studyFormat: TypeStudyFormat
  type: TypeCategories
}

const handleGetStaticPaths = async ({
  studyFormat,
  type
}: TypeHandleGetStaticPaths) => {
  const paths = await fetchPaths({
    studyFormat,
    type
  })

  return {
    paths,
    fallback: fallback.default
  }
}

export default handleGetStaticPaths
