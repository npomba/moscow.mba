import stls from '@/styles/components/pages/ProfessionOnlineProgram.module.sass'
import { NextSeo, CourseJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import truncate from 'truncate'
import JumbotronProgram from '@/components/sections/JumbotronProgram'
import Reviews from '@/components/sections/Reviews'
import WhoItIsFor from '@/components/sections/WhoItIsFor'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/ProgramDesc'
import HowProcessGoes from '@/components/sections/HowProcessGoes'
import ProgramModules from '@/components/sections/ProgramsModules'
import ContactUs from '@/components/sections/ContactUs'
import Qna from '@/components/sections/Qna'
import Students from '@/components/sections/Students'
import Teachers from '@/components/sections/Teachers'
import Diploma from '@/components/sections/Diploma'
import CorporateClients from '@/components/sections/CorporateClients'
import CostOfStudy from '@/components/sections/CostOfStudy'
import HelpWithEmployment from '@/components/sections/HelpWithEmployment'
import Accreditation from '@/components/sections/Accreditation'
import Pros from '@/components/sections/Pros'
import GetStudyPlan from '@/components/sections/GetStudyPlan'

const ProfessionOnlineProgram = ({ program }) => {
  const data = program

  const router = useRouter()

  return (
    <>
      <NextSeo
        title={`${data.title} MBA - Moscow Business Academy`}
        description={truncate(program.goalsOfProgram, 120)}
        canonical={`https://moscow.mba${router.asPath}`}
      />
      <CourseJsonLd
        courseName={`${data.title} MBA`}
        providerName='Moscow Business Academy'
        providerUrl={`https://moscow.mba${router.asPath}`}
        description={truncate(program.goalsOfProgram, 120)}
      />

      <JumbotronProgram data={data} />

      <div className={stls.generalContainer}>
        <WhatWillYouLearn data={data} />
        <ProgramDesc />
        <WhoItIsFor data={data} />

        <Pros format={'online'} />
        <HowProcessGoes />
        <ProgramModules data={data} smallerMb />
        <GetStudyPlan />
        <Teachers programId={data._id} programTitle={data.title} />
        <Students />
        <Reviews />
        <Accreditation />
        <HelpWithEmployment />
        <CorporateClients partnershipTitle />
        <Diploma />

        <CostOfStudy
          programId={data._id}
          programTitle={data.title}
          programFormat={data.mbaFormat}
          programType={data.mbaTypeOfProgram}
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

export default ProfessionOnlineProgram
