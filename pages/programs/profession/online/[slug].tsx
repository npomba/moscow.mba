import { handleGetStaticProps, handleGetStaticPaths } from '@/helpers/index'
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

export const getStaticPaths = async () =>
  handleGetStaticPaths({ studyFormat: 'online', type: 'profession' })

export default programsMiniOnlineProgram
