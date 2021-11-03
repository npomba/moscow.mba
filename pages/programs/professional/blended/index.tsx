import Programs from '@/components/pages/Programs'
import { backendUrl, apiProgramsReqUrl } from '@/config/index'

const programsProfessionalBlended = ({ programs }) => {
  const data = programs.filter(
    program =>
      program.studyFormat === 'blended' && program.category.type === 'mba'
  )

  return (
    <Programs programs={data} mbaTypeOfProgram={'mba'} mbaFormat={'blended'} />
  )
}

export async function getStaticProps() {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default programsProfessionalBlended
