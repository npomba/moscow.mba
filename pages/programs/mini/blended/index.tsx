import Programs from '@/components/pages/Programs'
import HengeleGetPrograms from '@/helpers/hengeleGetPrograms'
import { handleGetStaticProps } from '@/helpers/index'


const PageProgramsMiniBlended = ({ programs }) => {
  HengeleGetPrograms(programs)

  const data = programs.filter(
    program =>
      program.studyFormat === 'blended' && program.category?.type === 'mini'
  )

  return (
    <Programs programs={data} mbaTypeOfProgram={'mini'} mbaFormat={'blended'} />
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default PageProgramsMiniBlended
