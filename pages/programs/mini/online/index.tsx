import Programs from '@/components/pages/Programs'
import {
  fetchPrograms,
  createBlended,
  getProgramsReducedData
} from '@/helpers/index'
import { revalidate } from '@/config/index'

const programsMiniOnline = ({ programs }) => {
  const data = programs.filter(
    program =>
      program.studyFormat === 'online' && program.category?.type === 'mini'
  )

  return (
    <Programs programs={data} mbaTypeOfProgram={'mini'} mbaFormat={'online'} />
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
      'studyFormat'
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

export default programsMiniOnline
