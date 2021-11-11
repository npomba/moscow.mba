import {
  fetchPrograms,
  createBlended,
  handleGetStaticProps,
  fetchPaths
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
  const paths = await fetchPaths({
    studyFormat: 'blended',
    type: 'mba'
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default programsMbaBlendedProgram
