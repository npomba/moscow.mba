import { handleGetStaticProps, handleGetStaticPaths } from '@/helpers/index'
import OnlineProgram from '@/components/pages/OnlineProgram'

const PageProgramsMbaOnlineProgram = ({ program, programs, teachers }) => {
  return <OnlineProgram program={program} teachers={teachers} />
}

export const getStaticProps = async context =>
  handleGetStaticProps({
    programSlug: context.params.slug,
    programStudyFormat: 'online',
    programType: 'mba'
  })

export const getStaticPaths = async () =>
  handleGetStaticPaths({ studyFormat: 'online', type: 'mba' })

export default PageProgramsMbaOnlineProgram
