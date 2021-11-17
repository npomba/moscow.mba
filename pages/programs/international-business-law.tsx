import { handleGetStaticProps } from '@/helpers/index'

import InternationalBusinessLaw from '@/components/pages/InternationalBusinessLaw'

const pageProgramsInternationalBusinessLaw = ({ program, programs }) => {
  return <InternationalBusinessLaw program={program} />
}

export const getStaticProps = async () =>
  handleGetStaticProps({
    programSlug: 'international-business-law',
    programStudyFormat: 'online',
    programType: 'mbl'
  })

export default pageProgramsInternationalBusinessLaw
