import { fetchPaths, handleGetStaticProps } from '@/helpers/index'

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
  const paths = await fetchPaths({
    studyFormat: 'blended',
    type: 'mini'
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default programsMiniBlendedProgram
