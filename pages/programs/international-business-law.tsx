import { handleGetStaticProps, HandleGetPrograms } from '@/helpers/index'
import { usePageHandleContext } from '@/hooks/index'
import InternationalBusinessLaw from '@/components/pages/InternationalBusinessLaw'

const PageProgramsInternationalBusinessLaw = ({
  program,
  programs,
  teachers
}) => {
  usePageHandleContext({ programs })
  return <InternationalBusinessLaw program={program} teachers={teachers} />
}

// export const getStaticProps: GetStaticProps = async context =>
//   await handleGetStaticProps({ page: routesFront.program, context })

export const getStaticProps = async () =>
  handleGetStaticProps({
    programSlug: 'international-business-law',
    programStudyFormat: 'online',
    programType: 'mbl'
  })

export default PageProgramsInternationalBusinessLaw
