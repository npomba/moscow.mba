import Programs from '@/components/pages/Programs'
import { handleGetStaticProps } from '@/helpers/index'

const programsMiniOnline = ({ programs }) => {
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
    extraData: ['study_field.id', 'study_field.name', 'duration.minStudyMonths']
  })

export default programsMiniOnline
