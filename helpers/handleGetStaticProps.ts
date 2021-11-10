import {
  TypeOfType,
  TypePrograms,
  TypeCategories,
  TypeProgram,
  TypeStudyFormat
} from '@/types/index'
import {
  fetchPrograms,
  createBlended,
  getProgramsReducedData,
  getProgram
} from '@/helpers/index'
import { revalidate } from '@/config/index'

type TypeHandleGetStaticProps = {
  ofType?: TypeCategories
  extraData?: string[]
  programSlug?: string
  programStudyFormat?: TypeStudyFormat
  programType?: TypeCategories
}

const handleGetStaticProps = async (
  {
    ofType = null,
    extraData = [],
    programSlug = null,
    programStudyFormat = null,
    programType = null
  }: TypeHandleGetStaticProps = {
    ofType: null,
    extraData: [],
    programSlug: null,
    programStudyFormat: null,
    programType: null
  }
) => {
  const defaultReducedData = [
    'id',
    'title',
    'slug',
    'category.slug',
    'category.type',
    'studyFormat'
  ]
  const programs: TypePrograms = await fetchPrograms({ ofType })
  const programsWithBlended: TypePrograms = createBlended(programs)
  const programsReducedData = getProgramsReducedData({
    programs: programsWithBlended,
    data: [...defaultReducedData, ...extraData]
  })

  const program: TypeProgram =
    programSlug && programStudyFormat && programType
      ? getProgram({
          programs: programsWithBlended,
          slug: programSlug,
          studyFormat: programStudyFormat,
          type: programType
        })
      : null

  return {
    props: {
      program,
      programs: programsReducedData
    },
    revalidate: revalidate.default
  }
}

export default handleGetStaticProps
