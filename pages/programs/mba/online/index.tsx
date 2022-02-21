import Programs from '@/components/pages/Programs'
import { handleGetStaticProps, HandleGetPrograms } from '@/helpers/index'

const PageProgramsMbaOnline = ({ programs }) => {
  HandleGetPrograms(programs)
  const data = programs.filter(
    program =>
      program.studyFormat === 'online' && program.category?.type === 'mba'
  )

  return (
    <Programs programs={data} mbaTypeOfProgram={'mba'} mbaFormat={'online'} />
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default PageProgramsMbaOnline
