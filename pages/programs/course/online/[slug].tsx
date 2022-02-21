import {
  handleGetStaticProps,
  handleGetStaticPaths,
  HandleGetPrograms
} from '@/helpers/index'
import CourseOnlineProgram from '@/components/pages/CourseOnlineProgram'

const PageProgramsCourseOnlineProgram = ({ program, programs, teachers }) => {
  HandleGetPrograms(programs)

  return <CourseOnlineProgram program={program} teachers={teachers} />
}

export const getStaticProps = async context =>
  handleGetStaticProps({
    programSlug: context.params.slug,
    programStudyFormat: 'online',
    programType: 'course'
  })

export const getStaticPaths = async () =>
  handleGetStaticPaths({ studyFormat: 'online', type: 'course' })

export default PageProgramsCourseOnlineProgram
