import Programs from '@/components/pages/Programs'
import HengeleGetPrograms from '@/helpers/hengeleGetPrograms'
import { handleGetStaticProps } from '@/helpers/index'

<<<<<<< HEAD
const programsMiniOnline = ({ programs }) => {
  HengeleGetPrograms(programs)
=======
const PageProgramsProfessionOnline = ({ programs }) => {
>>>>>>> bbab6c952f81983dac0226f26db7aa0eb88a147c
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

export default PageProgramsProfessionOnline
