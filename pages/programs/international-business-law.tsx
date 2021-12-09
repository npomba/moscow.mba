import { handleGetStaticProps } from '@/helpers/index'

import InternationalBusinessLaw from '@/components/pages/InternationalBusinessLaw'

const PageProgramsInternationalBusinessLaw = ({
<<<<<<< HEAD
                                                program,
                                                programs,
                                                teachers
                                              }) => {
=======
  program,
  programs,
  teachers
}) => {
  HandleGetPrograms(programs)
>>>>>>> 750b45b309c38a568f1dafe62d1f9c664a1457d2
  return <InternationalBusinessLaw program={program} teachers={teachers} />
}

export const getStaticProps = async () =>
  handleGetStaticProps({
    programSlug: 'international-business-law',
    programStudyFormat: 'online',
    programType: 'mbl'
  })

export default PageProgramsInternationalBusinessLaw