import Programs from '@/components/pages/Programs'
import HengeleGetPrograms from '@/helpers/hengeleGetPrograms'
import { handleGetStaticProps } from '@/helpers/index'

const programsMiniOnline = ({ programs }) => {
  HengeleGetPrograms(programs)
  const data = programs.filter(
    program =>
      program.studyFormat === 'online' && program.category?.type === 'mini'
  )

  return (
    <Programs programs={data} mbaTypeOfProgram={'mini'} mbaFormat={'online'} />
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default programsMiniOnline
