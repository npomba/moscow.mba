import { handleGetStaticProps } from '@/helpers/index'

import InternationalBusinessLaw from '@/components/pages/InternationalBusinessLaw'
import HengeleGetPrograms from '@/helpers/hengeleGetPrograms'


const PageProgramsInternationalBusinessLaw = ({ program, programs }) => {
  HengeleGetPrograms(programs)

  return <InternationalBusinessLaw program={program} />
}

export const getStaticProps = async () =>
  handleGetStaticProps({
    programSlug: 'international-business-law',
    programStudyFormat: 'online',
    programType: 'mbl'
  })

export default PageProgramsInternationalBusinessLaw
