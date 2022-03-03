import stls from '@/styles/pages/programs/Executive.module.sass'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import { handleGetStaticProps } from '@/helpers/index'
import { usePageHandleContext } from '@/hooks/index'
import {
  JumbotronProgram,
  AboutExecutive,
  ResultsExecutive,
  InPersonWithExperts,
  ModulesAbroad,
  WhoStudies,
  ProgramsModules,
  ContactUs,
  Accreditation,
  Teachers,
  Rules,
  ExecutiveRequirements,
  Students,
  Reviews,
  CostOfStudy,
  Qna
} from '@/components/sections'

const PageProgramsExecutive = ({ program, programs, teachers }) => {
  usePageHandleContext({ programs })
  return (
    <>
      <NextSeo
        title={`${program.title} - Moscow Business Academy`}
        description={truncate(program.description, 120)}
        canonical={'https://moscow.mba/programs/executive'}
      />
      <CourseJsonLd
        courseName={`${program.title} MBA`}
        provider={{
          name: 'Moscow Business Academy',
          url: 'https://moscow.mba/programs/executive'
        }}
        description={truncate(program.description, 120)}
      />

      <JumbotronProgram program={program} />
      <AboutExecutive />
      <ResultsExecutive />
      <InPersonWithExperts />
      <ModulesAbroad />
      <WhoStudies />
      <ProgramsModules program={program} />
      <ContactUs
        programId={program._id}
        programTitle={program.title}
        title={'Получите консультацию'}
        titleNewStr={'по программе обучени'}
      />
      <Accreditation />
      <Teachers
        programId={program._id}
        programTitle={program.title}
        teachers={teachers}
      />
      <Rules prices={{ lowerPrice: '600 000', higherPrice: '2 000 000' }} />
      <ExecutiveRequirements />
      <Students />
      <Reviews />
      {/* ! Fix bug with price */}
      <CostOfStudy
        programId={program._id}
        programTitle={program.title}
        programType='executive'
      />
      <Qna programId={program._id} programTitle={program.title} />
      <ContactUs
        programId={program._id}
        programTitle={program.title}
        title={'Не знаете что выбрать?'}
        titleNewStr={'Получите консультацию по программам MBA'}
      />
    </>
  )
}

// export const getStaticProps: GetStaticProps = async context =>
//   await handleGetStaticProps({ page: routesFront.program, context })

export const getStaticProps = async () =>
  handleGetStaticProps({
    programSlug: 'executive',
    programStudyFormat: 'blended',
    programType: 'executive'
  })

export default PageProgramsExecutive
