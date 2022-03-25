import stls from '@/styles/pages/programs/Executive.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import { v4 as uuidv4 } from 'uuid'
import { studyFormats, routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
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
  SectionStudyCost,
  Qna
} from '@/components/sections'

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
      <SectionStudyCost
        id={program?._id}
        title={program?.title}
        format={program?.studyFormat}
        type={program?.category?.type}
        price={program?.price}
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
