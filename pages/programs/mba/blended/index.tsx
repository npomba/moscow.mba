import Programs from '@/components/pages/Programs'
import HandleGetPrograms from '@/helpers/HandleGetPrograms'
import { handleGetStaticProps } from '@/helpers/index'


const PageProgramsMbaBlended = ({ programs }) => {
  HandleGetPrograms(programs)

  const data = programs.filter(
    program =>
      program.studyFormat === 'blended' && program.category?.type === 'mba'
  )

  return (
    <Programs programs={data} mbaTypeOfProgram={'mba'} mbaFormat={'blended'} />
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default PageProgramsMbaBlended
