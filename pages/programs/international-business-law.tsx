import { handleGetStaticProps } from '@/helpers/index'

import InternationalBusinessLaw from '@/components/pages/InternationalBusinessLaw'
import HandleGetPrograms from '@/helpers/HandleGetPrograms'


const PageProgramsInternationalBusinessLaw = ({ program, programs }) => {
  HandleGetPrograms(programs)

  return <InternationalBusinessLaw program={program} />
}

export const getStaticProps = async () =>
  handleGetStaticProps({
    programSlug: 'international-business-law',
    programStudyFormat: 'online',
    programType: 'mbl'
  })

export default PageProgramsInternationalBusinessLaw
