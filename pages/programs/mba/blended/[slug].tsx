import { handleGetStaticProps, handleGetStaticPaths } from '@/helpers/index'
import BlendedProgram from '@/components/pages/BlendedProgram'

const pageProgramsMbaBlendedProgram = ({ program, programs }) => {
  return <BlendedProgram program={program} />
}

export const getStaticProps = async context =>
  handleGetStaticProps({
    programSlug: context.params.slug,
    programStudyFormat: 'blended',
    programType: 'mba'
  })

export const getStaticPaths = async () =>
  handleGetStaticPaths({ studyFormat: 'blended', type: 'mba' })

export default pageProgramsMbaBlendedProgram
