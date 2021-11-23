import Programs from '@/components/pages/Programs'
import HandleGetPrograms from '@/helpers/HandleGetPrograms'
import { handleGetStaticProps } from '@/helpers/index'





const PageProgramsMiniOnline = ({ programs }) => {
  HandleGetPrograms(programs)


  const data = programs.filter(
    program =>
      program.studyFormat === 'online' && program.category?.type === 'mini'
  )


  return (
    <Programs programs={data} mbaTypeOfProgram={'mini'} mbaFormat={'online'} />
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default PageProgramsMiniOnline
