import stls from '@/styles/components/pages/BlendedProgram.module.sass'
import { NextSeo, CourseJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import truncate from 'truncate'
import {
  Reviews,
  JumbotronProgram,
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
  Accreditation,
  Pros,
  BlendedMetups,
  CostOfStudy,
  ECTSStandard,
  CostOfStudyDescription,
  GetStudyPlan
} from '@/components/sections'

const PageBlendedProgram = ({ program, teachers }) => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title={`${program?.title} MBA - Moscow Business Academy`}
        description={truncate(program?.goal, 120)}
        canonical={`https://moscow.mba${router.asPath}`}
      />
      <CourseJsonLd
        courseName={`${program?.title} MBA`}
        provider={{
          name: 'Moscow Business Academy',
          url: `https://moscow.mba${router.asPath}`
        }}
        description={truncate(program?.goal, 120)}
      />
      <JumbotronProgram program={program} />
      <ProgramGoal data={program} />
      <WhatWillYouLearn data={program} />
      <ProgramDesc />
      <BlendedMetups />
      <Pros format={'blended'} />
      <HowProcessGoes />
      <ProgramsModules program={program} />
      {/* <ECTSStandard /> */}
      <GetStudyPlan />
      <Teachers
        programId={program._id}
        programTitle={program.title}
        teachers={teachers}
      />
      <UpToDateContent withBottomLine />
      <CorporateClients />
      <Accreditation />
      <Diploma />
      <Students />
      <Reviews />
      <CostOfStudy
        programId={program._id}
        programTitle={program.title}
        programFormat={program.studyFormat}
        programType={program.category?.type}
      />
      <CostOfStudyDescription />
      <Qna programId={program._id} programTitle={program.title} />
      <ContactUs
        programId={program._id}
        programTitle={program.title}
        title={'Не знаете что выбрать?'}
        titleNewStr={'Получите консультацию по программам MBA'}
        overlapsFooter
      />
    </>
  )
}

export default PageBlendedProgram
