import Programs from '@/components/pages/Programs'
import { handleGetStaticProps, HandleGetPrograms } from '@/helpers/index'
import { usePageHandleContext } from '@/hooks/index'

const PageProgramsCourse = ({ programs }) => {
  usePageHandleContext({ programs })

  const data = programs.filter(
    program =>
      program.studyFormat === 'online' && program.category?.type === 'course'
  )

  return (
    <Programs
      programs={data}
      mbaTypeOfProgram={'course'}
      mbaFormat={'online'}
    />
  )
}

export const getStaticProps = async () =>
  handleGetStaticProps({
    dataFor: 'course'
  })

export default PageProgramsCourse
