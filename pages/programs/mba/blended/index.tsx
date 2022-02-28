import Programs from '@/components/pages/Programs'
import { handleGetStaticProps, HandleGetPrograms } from '@/helpers/index'
import { usePageHandleContext } from '@/hooks/index'

const PageProgramsMbaBlended = ({ programs }) => {
  usePageHandleContext({ programs })

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
