import stls from '@/styles/components/pages/InternationalBusinessLaw.module.sass'
import { NextSeo, CourseJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import truncate from 'truncate'
import {
  JumbotronProgram,
  Reviews,
  ProgramGoal,
  WhatWillYouLearn,
  ProgramDesc,
  HowProcessGoes,
  ProgramsModules,
  ContactUs,
  Qna,
  Students,
  Teachers,
  UpToDateContent,
  Diploma,
  CorporateClients,
  CostOfStudy,
  Accreditation,
  Pros,
  GetStudyPlan
} from '@/components/sections'

const PageOnlineProgram = ({ program, teachers }) => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title={`${program?.title} MBA - Moscow Business Academy`}
        description={truncate(program?.goalStr, 120)}
        canonical={`https://moscow.mba${router.asPath}`}
      />
      <CourseJsonLd
        courseName={`${program?.title} MBA`}
        provider={{
          name: 'Moscow Business Academy',
          url: `https://moscow.mba${router.asPath}`
        }}
        description={truncate(program?.goalStr, 120)}
      />

      <JumbotronProgram program={program} />

      <ProgramGoal data={program} />
      <WhatWillYouLearn data={program} />
      <ProgramDesc />
      <Pros format={'online'} />
      <HowProcessGoes />
      <ProgramsModules program={program} />
      <GetStudyPlan />
      <Teachers
        programId={program?._id}
        programTitle={program?.title}
        teachers={teachers}
      />
      <UpToDateContent withBottomLine />
      <CorporateClients />
      <Accreditation />
      <Diploma />
      <Students />
      <Reviews />
      <CostOfStudy
        programId={program?._id}
        programTitle={program?.title}
        programFormat={program?.studyFormat}
        programType={program?.category?.type}
      />
      <Qna programId={program?._id} programTitle={program?.title} />
      <ContactUs
        programId={program?._id}
        programTitle={program?.title}
        title={'Не знаете что выбрать?'}
        titleNewStr={'Получите консультацию по программам MBA'}
        overlapsFooter
      />
    </>
  )
}

export default PageOnlineProgram
