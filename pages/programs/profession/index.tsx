import Programs from '@/components/pages/Programs'
import HengeleGetPrograms from '@/helpers/hengeleGetPrograms'
import { handleGetStaticProps } from '@/helpers/index'


const PageProgramsProfession = ({ programs }) => {
  HengeleGetPrograms(programs)
  const data = programs.filter(
    program =>
      program.studyFormat === 'online' &&
      program.category?.type === 'profession'
  )

  return (
    <Programs
      programs={data}
      mbaTypeOfProgram={'profession'}
      mbaFormat={'online'}
    />
  )
}

export const getStaticProps = async () =>
  handleGetStaticProps({
    dataFor: 'profession'
  })

export default PageProgramsProfession
