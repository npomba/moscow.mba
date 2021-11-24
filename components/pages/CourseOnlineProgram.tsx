import stls from '@/styles/components/pages/ProfessionOnlineProgram.module.sass'
import { NextSeo, CourseJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import truncate from 'truncate'
import JumbotronProgram from '@/components/sections/JumbotronProgram'
import WhoItIsFor from '@/components/sections/WhoItIsFor'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/ProgramDesc'
import HowProcessGoes from '@/components/sections/HowProcessGoes'
import ProgramModules from '@/components/sections/ProgramsModules'
import ContactUs from '@/components/sections/ContactUs'
import Qna from '@/components/sections/Qna'
import Teachers from '@/components/sections/Teachers'
import Diploma from '@/components/sections/Diploma'
import CorporateClients from '@/components/sections/CorporateClients'
import CostOfStudy from '@/components/sections/CostOfStudy'
import HelpWithEmployment from '@/components/sections/HelpWithEmployment'
import Pros from '@/components/sections/Pros'
import GetStudyPlan from '@/components/sections/GetStudyPlan'
import ProgramDevelopedStandard from '@/components/sections/ProgramDevelopedStandard'

const CourseOnlineProgram = ({ program }) => {
  const data = program

  const router = useRouter()

  return (
    <>
      <NextSeo
        title={`${data.title} MBA - Moscow Business Academy`}
        description={truncate(program.goal, 120)}
        canonical={`https://moscow.mba${router.asPath}`}
      />
      <CourseJsonLd
        courseName={`${data.title} MBA`}
        providerName='Moscow Business Academy'
        providerUrl={`https://moscow.mba${router.asPath}`}
        description={truncate(program.goal, 120)}
      />

      <JumbotronProgram program={data} />

      <div className={stls.container}>
        <WhatWillYouLearn data={data} />
        <ProgramDesc />
        <ProgramDevelopedStandard/>
        <WhoItIsFor program={program} />

        <Pros format={'online'} />
        <HowProcessGoes />
        <ProgramModules program={data} smallerMb />
        <GetStudyPlan />
        <Teachers programId={data._id} programTitle={data.title} />
        <HelpWithEmployment />
        <CorporateClients partnershipTitle />
        <Diploma />

        <CostOfStudy
          programId={data._id}
          programTitle={data.title}
          programFormat={data.studyFormat}
          programType={data.category?.type}
        />
        <Qna programId={data._id} programTitle={data.title} />
        <ContactUs
          programId={data._id}
          programTitle={data.title}
          title={'Не знаете что выбрать?'}
          titleNewStr={'Получите консультацию по программам'}
          overlapsFooter
        />
      </div>
    </>
  )
}

export default CourseOnlineProgram
