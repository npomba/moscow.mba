import {
  TypeCategories,
  TypeStudyFormat,
  TypeProgramDefault
} from '@/types/index'
import {
  createBlended,
  fetchProgramsGetStaticProps,
  fetchProgramsGetStaticPropsProfession,
  fetchProgramsGetStaticPropsCourse,
  fetchProgramsGetStaticPropsPromo,
  fetchProgram
} from '@/helpers/index'
import { revalidate } from '@/config/index'

type TypeHandleGetStaticProps = {
  ofType?: TypeCategories
  dataFor?: 'default' | 'profession' | 'course' | 'promo'
  programSlug?: string
  programStudyFormat?: TypeStudyFormat
  programType?: TypeCategories
}

const handleGetStaticProps = async (
  {
    ofType = null,
    dataFor = 'default',
    programSlug = null,
    programStudyFormat = null,
    programType = null
  }: TypeHandleGetStaticProps = {
    ofType: null,
    dataFor: 'default',
    programSlug: null,
    programStudyFormat: null,
    programType: null
  }
) => {
  let res

  if (dataFor === 'promo') {
    res = await fetchProgramsGetStaticPropsPromo({
      ofType
    })
  } else if (dataFor === 'profession') {
    res = await fetchProgramsGetStaticPropsProfession({ ofType })
  } else if (dataFor === 'course') {
    res = await fetchProgramsGetStaticPropsCourse({ ofType })
  } else {
    res = await fetchProgramsGetStaticProps({ ofType })
  }

  const { programs, teachers } = res

  const programsWithBlended = createBlended(programs)
  const program =
    programSlug && programStudyFormat && programType
      ? await fetchProgram({
          slug: programSlug,
          studyFormat: programStudyFormat,
          type: programType
        })
      : null

  return {
    props: {
      program,
      programs: programsWithBlended,
      teachers
    },
    revalidate: revalidate.default
  }
}

export default handleGetStaticProps
