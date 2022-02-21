import ProfessionOnlineProgram from '@/components/pages/ProfessionOnlineProgram'
import {
  handleGetStaticProps,
  handleGetStaticPaths,
  HandleGetPrograms
} from '@/helpers/index'

const PageProgramsProfessionOnlineProgram = ({
  program,
  programs,
  teachers
}) => {
  HandleGetPrograms(programs)

  return <ProfessionOnlineProgram program={program} teachers={teachers} />
}

export const getStaticProps = async context =>
  handleGetStaticProps({
    programSlug: context.params.slug,
    programStudyFormat: 'online',
    programType: 'profession'
  })

export const getStaticPaths = async () =>
  handleGetStaticPaths({ studyFormat: 'online', type: 'profession' })

export default PageProgramsProfessionOnlineProgram
