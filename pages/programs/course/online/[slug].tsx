import { handleGetStaticProps, handleGetStaticPaths } from '@/helpers/index'
import CourseOnlineProgram from '@/components/pages/CourseOnlineProgram'

const pageProgramsCourseOnlineProgram = ({ program, programs }) => {
  return <CourseOnlineProgram program={program} />
}

export const getStaticProps = async context =>
  handleGetStaticProps({
    programSlug: context.params.slug,
    programStudyFormat: 'online',
    programType: 'course'
  })

export const getStaticPaths = async () =>
  handleGetStaticPaths({ studyFormat: 'online', type: 'course' })

export default pageProgramsCourseOnlineProgram
