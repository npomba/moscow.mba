import { GetStaticProps } from 'next'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import { handleGetStaticPaths } from '@/helpers/index'
import CourseOnlineProgram from '@/components/pages/CourseOnlineProgram'

const PageProgramsCourseOnlineProgram = ({ program, programs }) => {
  usePageHandleContext({ programs })

  return <CourseOnlineProgram program={program} teachers={program?.teachers} />
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.program,
    context,
    type: 'course',
    format: 'online'
  })

export const getStaticPaths = async () =>
  handleGetStaticPaths({ studyFormat: 'online', type: 'course' })

export default PageProgramsCourseOnlineProgram
