import stls from '@/styles/pages/programs/Executive.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import { v4 as uuidv4 } from 'uuid'
import { studyFormats, routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
// import {
//   JumbotronProgram,
//   AboutExecutive,
//   ResultsExecutive,
//   InPersonWithExperts,
//   ModulesAbroad,
//   WhoStudies,
//   ProgramsModules,
//   ContactUs,
//   Accreditation,
//   Teachers,
//   Rules,
//   ExecutiveRequirements,
//   Students,
//   Reviews,
//   CostOfStudy,
//   Qna
// } from '@/components/sections'
import JumbotronProgram from '@/components/sections/general/JumbotronProgram'
import AboutExecutive from '@/components/sections/general/AboutExecutive'
import ResultsExecutive from '@/components/sections/general/ResultsExecutive'
import InPersonWithExperts from '@/components/sections/general/InPersonWithExperts'
import ModulesAbroad from '@/components/sections/general/ModulesAbroad'
import WhoStudies from '@/components/sections/general/WhoStudies'
import ProgramsModules from '@/components/sections/general/ProgramsModules'
import ContactUs from '@/components/sections/general/ContactUs'
import Accreditation from '@/components/sections/general/Accreditation'
import Teachers from '@/components/sections/general/Teachers'
import Rules from '@/components/sections/general/Rules'
import ExecutiveRequirements from '@/components/sections/general/ExecutiveRequirements'
import Students from '@/components/sections/general/Students'
import Reviews from '@/components/sections/general/Reviews'
import CostOfStudy from '@/components/sections/general/CostOfStudy'
import Qna from '@/components/sections/general/Qna'

const PageProgramsExecutive = ({ program, programs }) => {
  usePageHandleContext({ programs })

  const id = uuidv4()
  const programBlended =
    (program && {
      ...program,
      studyFormat: studyFormats.blended,
      id,
      _id: id
    }) ||
    null

  return (
    <>
      <NextSeo
        title={`${programBlended?.title} - Moscow Business Academy`}
        description={truncate(programBlended?.description, 120)}
        canonical={'https://moscow.mba/programs/executive'}
      />
      <CourseJsonLd
        courseName={`${programBlended?.title} MBA`}
        provider={{
          name: 'Moscow Business Academy',
          url: 'https://moscow.mba/programs/executive'
        }}
        description={truncate(programBlended?.description, 120)}
      />

      <JumbotronProgram program={programBlended && programBlended} />
      <AboutExecutive />
      <ResultsExecutive />
      <InPersonWithExperts />
      <ModulesAbroad />
      <WhoStudies />
      <ProgramsModules program={programBlended && programBlended} />
      <ContactUs
        programId={programBlended?._id}
        programTitle={programBlended?.title}
        title={'Получите консультацию'}
        titleNewStr={'по программе обучени'}
      />
      <Accreditation />
      <Teachers
        programId={programBlended?._id}
        programTitle={programBlended?.title}
        teachers={programBlended?.teachers}
      />
      <Rules prices={{ lowerPrice: '600 000', higherPrice: '2 000 000' }} />
      <ExecutiveRequirements />
      <Students />
      <Reviews />
      <CostOfStudy
        programId={programBlended?._id}
        programTitle={programBlended?.title}
        programType='executive'
      />
      <Qna
        programId={programBlended?._id}
        programTitle={programBlended?.title}
      />
      <ContactUs
        programId={programBlended?._id}
        programTitle={programBlended?.title}
        title={'Не знаете что выбрать?'}
        titleNewStr={'Получите консультацию по программам MBA'}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.program,
    context,
    format: 'blended',
    type: 'executive',
    slug: 'executive'
  })

export default PageProgramsExecutive
