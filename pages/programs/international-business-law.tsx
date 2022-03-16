import { GetStaticProps } from 'next'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import InternationalBusinessLaw from '@/components/pages/InternationalBusinessLaw'

const PageProgramsInternationalBusinessLaw = ({ program, programs }) => {
  usePageHandleContext({ programs })

  if (!program) return null

  return (
    <InternationalBusinessLaw program={program} teachers={program.teachers} />
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.program,
    context,
    type: 'mbl',
    slug: 'international-business-law'
  })

export default PageProgramsInternationalBusinessLaw
