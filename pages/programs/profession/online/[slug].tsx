import { fetchPrograms, handleGetStaticProps, getPaths } from '@/helpers/index'

import ProfessionOnlineProgram from '@/components/pages/ProfessionOnlineProgram'

const programsMiniOnlineProgram = ({ program, programs }) => {
  return <ProfessionOnlineProgram program={program} />
}

export const getStaticProps = async context =>
  handleGetStaticProps({
    programSlug: context.params.slug,
    programStudyFormat: 'online',
    programType: 'profession'
  })

export const getStaticPaths = async () => {
  const programs = await fetchPrograms()
  const paths = getPaths({
    programs: programs,
    studyFormat: 'online',
    type: 'profession'
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default programsMiniOnlineProgram
