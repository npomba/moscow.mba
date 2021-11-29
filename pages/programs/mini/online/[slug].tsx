import { handleGetStaticProps, handleGetStaticPaths } from '@/helpers/index'
import OnlineProgram from '@/components/pages/OnlineProgram'

const PageProgramsMiniOnlineProgram = ({ program, programs, teachers }) => {
  return <OnlineProgram program={program} teachers={teachers} />
}

export const getStaticProps = async context =>
  handleGetStaticProps({
    programSlug: context.params.slug,
    programStudyFormat: 'online',
    programType: 'mini'
  })

export const getStaticPaths = async () =>
  handleGetStaticPaths({ studyFormat: 'online', type: 'mini' })

export default PageProgramsMiniOnlineProgram
