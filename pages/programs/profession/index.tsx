import Programs from '@/components/pages/Programs'
import {
  fetchPrograms,
  createBlended,
  getProgramsReducedData
} from '@/helpers/index'
import { revalidate } from '@/config/index'

const programsMini = ({ programs }) => {
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

export async function getStaticProps() {
  const programs = await fetchPrograms()
  const programsReducedData = getProgramsReducedData({
    programs,
    data: [
      'id',
      'title',
      'slug',
      'category.slug',
      'category.type',
      'studyFormat',
      'study_field.id',
      'study_field.name',
      'duration.minStudyMonths'
    ]
  })
  const programsWithBlended = createBlended(programsReducedData)
  return {
    props: {
      programs: programsWithBlended
    },
    revalidate: revalidate.default
  }
}

export default programsMini
