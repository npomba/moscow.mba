import { fetchPaths, handleGetStaticProps } from '@/helpers/index'

import OnlineProgram from '@/components/pages/OnlineProgram'

const programsMiniOnlineProgram = ({ program, programs }) => {
  return <OnlineProgram program={program} />
}

export const getStaticProps = async context =>
  handleGetStaticProps({
    programSlug: context.params.slug,
    programStudyFormat: 'online',
    programType: 'mini'
  })

export const getStaticPaths = async () => {
  const paths = await fetchPaths({
    studyFormat: 'online',
    type: 'mini'
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default programsMiniOnlineProgram
