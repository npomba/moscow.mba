import Programs from '@/components/pages/Programs'
import { fetchPrograms, createBlended } from '@/helpers/index'
import { revalidate } from '@/config/index'

const programsMbaOnline = ({ programs }) => {
  const data = programs.filter(
    program =>
      program.studyFormat === 'online' && program.category?.type === 'mba'
  )

  return (
    <Programs programs={data} mbaTypeOfProgram={'mba'} mbaFormat={'online'} />
  )
}

export async function getStaticProps() {
  const programs = await fetchPrograms()
  const programsWithBlended = createBlended(programs)

  return {
    props: {
      programs: programsWithBlended
    },
    revalidate: revalidate.default
  }
}

export default programsMbaOnline
