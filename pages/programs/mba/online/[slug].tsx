import { handleGetStaticProps, handleGetStaticPaths } from '@/helpers/index'
import OnlineProgram from '@/components/pages/OnlineProgram'

const PageProgramsMbaOnlineProgram = ({ program, programs }) => {
  return <OnlineProgram program={program} />
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
