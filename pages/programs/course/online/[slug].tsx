import { GetStaticPaths, GetStaticProps } from 'next'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import { CourseOnlineProgram } from '@/components/pages'
import { SeoOrganizationJsonLd, SeoPagesProgram } from '@/components/seo'

const PageProgramsCourseOnlineProgram = ({ program, programs }) => {
  usePageHandleContext({ programs, program })

  return (
    <>
      <SeoPagesProgram program={program} />
      <CourseOnlineProgram program={program} teachers={program?.teachers} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.program,
    context,
    type: 'course',
    format: 'online'
  })

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({
    page: routesFront.program,
    type: 'course',
    format: 'online'
  })

export default PageProgramsCourseOnlineProgram
