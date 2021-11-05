import { fetchPrograms, createBlended } from '@/helpers/index'

import InternationalBusinessLaw from '@/components/pages/InternationalBusinessLaw'

const programsInternationalBusinessLaw = ({ program, programs }) => {
  return <InternationalBusinessLaw program={program} />
}

export async function getStaticProps() {
  const programs = await fetchPrograms()
  const programsWithBlended = createBlended(programs)
  const program = programsWithBlended.filter(
    program =>
      program.category?.type === 'mbl' && program.studyFormat === 'online'
  )[0]

  return {
    props: {
      program,
      programs: programsWithBlended
    }
  }
}

export default programsInternationalBusinessLaw
