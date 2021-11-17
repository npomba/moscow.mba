import Programs from '@/components/pages/Programs'
import { handleGetStaticProps } from '@/helpers/index'

const pageProgramsMini = ({ programs }) => {
  const data = programs.filter(
    program =>
      program.studyFormat === 'online' && program.category?.type === 'mini'
  )

  return (
    <Programs programs={data} mbaTypeOfProgram={'mini'} mbaFormat={'online'} />
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default pageProgramsMini
