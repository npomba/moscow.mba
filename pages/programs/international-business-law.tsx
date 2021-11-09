import {
  fetchPrograms,
  createBlended,
  getProgramsReducedData,
  getProgram
} from '@/helpers/index'
import { revalidate } from '@/config/index'

import InternationalBusinessLaw from '@/components/pages/InternationalBusinessLaw'

const programsInternationalBusinessLaw = ({ program, programs }) => {
  return <InternationalBusinessLaw program={program} />
}

export async function getStaticProps() {
  const programs = await fetchPrograms()
  const programsWithBlended = createBlended(programs)
  const programsReducedData = getProgramsReducedData({
    programs: programsWithBlended,
    data: [
      'id',
      'title',
      'slug',
      'category.slug',
      'category.type',
      'studyFormat'
    ]
  })

  const program = getProgram({
    programs: programsWithBlended,
    slug: 'international-business-law',
    studyFormat: 'online',
    type: 'mbl'
  })

  return {
    props: {
      program,
      programs: programsReducedData
    },
    revalidate: revalidate.default
  }
}

export default programsInternationalBusinessLaw
