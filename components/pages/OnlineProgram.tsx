import stls from '@/styles/components/pages/OnlineProgram.module.sass'
import { NextSeo, CourseJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import truncate from 'truncate'
import JumbotronProgram from '@/components/sections/JumbotronProgram'
import Reviews from '@/components/sections/Reviews'
import ProgramGoal from '@/components/sections/ProgramGoal'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/ProgramDesc'
import HowProcessGoes from '@/components/sections/HowProcessGoes'
import ProgramModules from '@/components/sections/ProgramsModules'
import ContactUs from '@/components/sections/ContactUs'
import Qna from '@/components/sections/Qna'
import Students from '@/components/sections/Students'
import Teachers from '@/components/sections/Teachers'
import UpToDateContent from '@/components/sections/UpToDateContent'
import Diploma from '@/components/sections/Diploma'
import CorporateClients from '@/components/sections/CorporateClients'
import CostOfStudy from '@/components/sections/CostOfStudy'
import Accreditation from '@/components/sections/Accreditation'
import Pros from '@/components/sections/Pros'
import GetStudyPlan from '@/components/sections/GetStudyPlan'

const PageOnlineProgram = ({ program }) => {
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
        <ProgramGoal data={data} />
        <WhatWillYouLearn data={data} />
        <ProgramDesc />
        <Pros format={'online'} />
        <HowProcessGoes />
        <ProgramModules data={data} />
        {/* <ContactUs
          programId={data._id}
          programTitle={data.title}
          title={'Получите консультацию'}
          titleNewStr={'по программе обучения'}
        /> */}
        <GetStudyPlan />
        <Teachers programId={data._id} programTitle={data.title} />
        <UpToDateContent withBottomLine />
        <CorporateClients />
        <Accreditation />
        <Diploma />
        <Students />
        <Reviews />
        <CostOfStudy
          programId={data._id}
          programTitle={data.title}
          programFormat={data.studyFormat}
          programType={data.category.type}
        />
        <Qna programId={data._id} programTitle={data.title} />
        <ContactUs
          programId={data._id}
          programTitle={data.title}
          title={'Не знаете что выбрать?'}
          titleNewStr={'Получите консультацию по программам MBA'}
        />
      </div>
    </>
  )
}

export default PageOnlineProgram
