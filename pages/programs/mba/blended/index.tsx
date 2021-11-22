import Programs from '@/components/pages/Programs'
import HengeleGetPrograms from '@/helpers/hengeleGetPrograms'
import { handleGetStaticProps } from '@/helpers/index'


const PageProgramsMbaBlended = ({ programs }) => {
  HengeleGetPrograms(programs)

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
