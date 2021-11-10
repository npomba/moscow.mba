import {
  fetchPrograms,
  createBlended,
  getPaths,
  handleGetStaticProps
} from '@/helpers/index'

import BlendedProgram from '@/components/pages/BlendedProgram'

const programsMiniBlendedProgram = ({ program, programs }) => {
  return <BlendedProgram program={program} />
}

export const getStaticProps = async context =>
  handleGetStaticProps({
    programSlug: context.params.slug,
    programStudyFormat: 'blended',
    programType: 'mini'
  })

export const getStaticPaths = async () => {
  const programs = await fetchPrograms()
  const programsWithBlended = createBlended(programs)
  const paths = getPaths({
    programs: programsWithBlended,
    studyFormat: 'blended',
    type: 'mini'
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default programsMiniBlendedProgram
