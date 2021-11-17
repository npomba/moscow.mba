import Programs from '@/components/pages/Programs'
import { handleGetStaticProps } from '@/helpers/index'

const pageProgramsProfession = ({ programs }) => {
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

export default pageProgramsProfession
