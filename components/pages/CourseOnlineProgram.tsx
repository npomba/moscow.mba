import stls from '@/styles/components/pages/ProfessionOnlineprogram.module.sass'
import { NextSeo, CourseJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import truncate from 'truncate'
import {
  JumbotronProgram,
  WhoItIsFor,
  WhatWillYouLearn,
  ProgramDesc,
  HowProcessGoes,
  ProgramsModules,
  ContactUs,
  Qna,
  Teachers,
  Diploma,
  CorporateClients,
  CostOfStudy,
  HelpWithEmployment,
  Pros,
  GetStudyPlan,
  ProgramDevelopedStandard
} from '@/components/sections'

const CourseOnlineProgram = ({ program, teachers }) => {
  const data = program

  const router = useRouter()

  return (
    <>
      <NextSeo
        title={`${data?.title} MBA - Moscow Business Academy`}
        description={truncate(program?.goal, 120)}
        canonical={`https://moscow.mba${router.asPath}`}
      />
      <CourseJsonLd
        courseName={`${data?.title} MBA`}
        provider={{
          name: 'Moscow Business Academy',
          url: `https://moscow.mba${router.asPath}`
        }}
        description={truncate(program?.goal, 120)}
      />

      <JumbotronProgram program={data} />

      <WhatWillYouLearn data={data} />
      <ProgramDesc />
      <ProgramDevelopedStandard />
      <WhoItIsFor program={program} />

      <Pros format={'online'} />
      <HowProcessGoes />
      <ProgramsModules program={data} smallerMb />
      <GetStudyPlan />
      <Teachers
        programId={data?._id}
        programTitle={data?.title}
        teachers={program?.teachers}
      />
      <HelpWithEmployment />
      <CorporateClients partnershipTitle />
      <Diploma />

      <CostOfStudy
        programId={data?._id}
        programTitle={data?.title}
        programFormat={data?.studyFormat}
        programType={data?.category?.type}
        programPrice={data?.price}
      />
      <Qna programId={data?._id} programTitle={data?.title} />
      <ContactUs
        programId={data?._id}
        programTitle={data?.title}
        title={'Не знаете что выбрать?'}
        titleNewStr={'Получите консультацию по программам'}
        overlapsFooter
      />
    </>
  )
}

export default CourseOnlineProgram
