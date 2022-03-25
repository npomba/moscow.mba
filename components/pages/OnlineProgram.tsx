import stls from '@/styles/components/pages/OnlineProgram.module.sass'
import { NextSeo, CourseJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import truncate from 'truncate'
// import {
//   JumbotronProgram,
//   Reviews,
//   ProgramGoal,
//   WhatWillYouLearn,
//   ProgramDesc,
//   HowProcessGoes,
//   ProgramsModules,
//   GetStudyPlan,
//   ContactUs,
//   Qna,
//   Students,
//   Teachers,
//   UpToDateContent,
//   Diploma,
//   CorporateClients,
//   Accreditation,
//   Pros,
//   SectionStudyCost,
//   ECTSStandard
// } from '@/components/sections'
import JumbotronProgram from '@/components/sections/general/JumbotronProgram'
import Reviews from '@/components/sections/general/Reviews'
import ProgramGoal from '@/components/sections/general/ProgramGoal'
import WhatWillYouLearn from '@/components/sections/general/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/general/ProgramDesc'
import HowProcessGoes from '@/components/sections/general/HowProcessGoes'
import ProgramsModules from '@/components/sections/general/ProgramsModules'
import GetStudyPlan from '@/components/sections/general/GetStudyPlan'
import ContactUs from '@/components/sections/general/ContactUs'
import Qna from '@/components/sections/general/Qna'
import Students from '@/components/sections/general/Students'
import Teachers from '@/components/sections/general/Teachers'
import UpToDateContent from '@/components/sections/general/UpToDateContent'
import Diploma from '@/components/sections/general/Diploma'
import CorporateClients from '@/components/sections/general/CorporateClients'
import SectionStudyCost from '@/components/sections/general/SectionStudyCost'
import Accreditation from '@/components/sections/general/Accreditation'
import Pros from '@/components/sections/general/Pros'

const PageOnlineProgram = ({ program, teachers }) => {
  const router = useRouter()

  console.log(program)

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
      <Pros format={'online'} />
      <HowProcessGoes />
      <ProgramsModules program={program} />
      {/* <ECTSStandard /> */}
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
      <SectionStudyCost
        id={program?._id}
        title={program?.title}
        format={program?.studyFormat}
        type={program?.category?.type}
        price={program?.price}
      />
      <Qna programId={program?._id} programTitle={program?.title} />
      <ContactUs
        programId={program?._id}
        programTitle={program?.title}
        title={''}
        titleNewStr={'Получите консультацию по программам MBA'}
        overlapsFooter
      />
    </>
  )
}

export default PageOnlineProgram
