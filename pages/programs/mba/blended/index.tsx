import Programs from '@/components/pages/Programs'
import { fetchPrograms, createBlended } from '@/helpers/index'

const programsMbaBlended = ({ programs }) => {
  const data = programs.filter(
    program =>
      program.studyFormat === 'blended' && program.category?.type === 'mba'
  )

  return (
    <Programs programs={data} mbaTypeOfProgram={'mba'} mbaFormat={'blended'} />
  )
}

export async function getStaticProps() {
  const programs = await fetchPrograms()
  const programsWithBlended = createBlended(programs)

  return {
    props: {
      programs: programsWithBlended
    }
  }
}

export default programsMbaBlended
