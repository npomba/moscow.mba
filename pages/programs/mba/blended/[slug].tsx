import {
  fetchPrograms,
  createBlended,
  handleGetStaticProps,
  getPaths
} from '@/helpers/index'

import BlendedProgram from '@/components/pages/BlendedProgram'

const programsMbaBlendedProgram = ({ program, programs }) => {
  return <BlendedProgram program={program} />
}

export const getStaticProps = async context =>
  handleGetStaticProps({
    programSlug: context.params.slug,
    programStudyFormat: 'blended',
    programType: 'mba'
  })

export const getStaticPaths = async () => {
  const programs = await fetchPrograms()
  const programsWithBlended = createBlended(programs)
  const paths = getPaths({
    programs: programsWithBlended,
    studyFormat: 'blended',
    type: 'mba'
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default programsMbaBlendedProgram
