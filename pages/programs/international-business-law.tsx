import { handleGetStaticProps, HandleGetPrograms } from '@/helpers/index'
import InternationalBusinessLaw from '@/components/pages/InternationalBusinessLaw'

const PageProgramsInternationalBusinessLaw = ({
  program,
  programs,
  teachers
}) => {
  HandleGetPrograms(programs)
  return <InternationalBusinessLaw program={program} teachers={teachers} />
}

export const getStaticProps = async () =>
  handleGetStaticProps({
    programSlug: 'international-business-law',
    programStudyFormat: 'online',
    programType: 'mbl'
  })

export default PageProgramsInternationalBusinessLaw
