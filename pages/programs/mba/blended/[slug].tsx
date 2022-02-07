import {
  handleGetStaticProps,
  handleGetStaticPaths,
  HandleGetPrograms
} from '@/helpers/index'
import BlendedProgram from '@/components/pages/BlendedProgram'

const PageProgramsMbaBlendedProgram = ({ program, programs, teachers }) => {
  HandleGetPrograms(programs)

  return <BlendedProgram program={program} teachers={teachers} />
}

export const getStaticProps = async context =>
  handleGetStaticProps({
    programSlug: context.params.slug,
    programStudyFormat: 'blended',
    programType: 'mba'
  })

export const getStaticPaths = async () =>
  handleGetStaticPaths({ studyFormat: 'blended', type: 'mba' })

export default PageProgramsMbaBlendedProgram
