import Programs from '@/components/pages/Programs'
import { handleGetStaticProps } from '@/helpers/index'

const PageProgramsMiniBlended = ({ programs }) => {
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
