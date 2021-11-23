import Programs from '@/components/pages/Programs'
import HandleGetPrograms from '@/helpers/HandleGetPrograms'
import { handleGetStaticProps } from '@/helpers/index'


const PageProgramsMiniBlended = ({ programs }) => {
  HandleGetPrograms(programs)

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
