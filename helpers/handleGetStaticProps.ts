import {
  TypeCategories,
  TypeStudyFormat,
  TypeProgramDefault
} from '@/types/index'
import {
  createBlended,
  fetchProgramsGetStaticProps,
  fetchProgramsGetStaticPropsProfession,
  fetchProgramsGetStaticPropsPromo,
  fetchProgram
} from '@/helpers/index'
import { revalidate } from '@/config/index'

type TypeHandleGetStaticProps = {
  ofType?: TypeCategories
  dataFor?: 'default' | 'profession' | 'promo'
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
  let programs

  if (dataFor === 'promo') {
    programs = await fetchProgramsGetStaticPropsPromo({
      ofType
    })
  } else if (dataFor === 'profession') {
    programs = await fetchProgramsGetStaticPropsProfession({ ofType })
  } else {
    programs = await fetchProgramsGetStaticProps({ ofType })
  }

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
      programs: programsWithBlended
    },
    revalidate: revalidate.default
  }
}

export default handleGetStaticProps
