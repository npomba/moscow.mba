import { apiProgramsReqUrl, backendUrl } from '@/config/index'

import InternationalBusinessLaw from '@/components/pages/InternationalBusinessLaw'

const programsInternationalBusinessLaw = ({ program, programs }) => {
  return <InternationalBusinessLaw />
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

export default programsInternationalBusinessLaw
