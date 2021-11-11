import {
  fetchPrograms,
  fetchPaths,
  handleGetStaticProps
} from '@/helpers/index'

import OnlineProgram from '@/components/pages/OnlineProgram'

const programsMbaOnlineProgram = ({ program, programs }) => {
  return <OnlineProgram program={program} />
}

export const getStaticProps = async context =>
  handleGetStaticProps({
    programSlug: context.params.slug,
    programStudyFormat: 'online',
    programType: 'mba'
  })

export const getStaticPaths = async () => {
  const paths = await fetchPaths({
    studyFormat: 'online',
    type: 'mba'
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default programsMbaOnlineProgram
