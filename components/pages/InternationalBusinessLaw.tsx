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

const PageOnlineProgram = () => {
  const router = useRouter()

  const data = {
    _id: '03067005-fa44-4c28-87bb-3d893fd93fdf',
    title: 'Магистр Международного Права',
    goalsOfProgram: (
      <>
        Курс подходит как специалистам, желающим после его окончания занять
        руководящие посты, так и действующим руководителям и владельцам бизнеса
        <br />
        <br />
        Курс является аналогом MBA, с конкурентно более сильным академическим
        блоком юридических дисциплин. Программа подготовки основана на лучших
        международных образцах, соответствует зарубежным стандартам обучения для
        лиц, получивших первый опыт работы. Аббревиатура &quot;MBL&quot;
        является узнаваемым за рубежом и в России форматом переподготовки в
        юридической сфере
        <br />
        <br />
        Выпускник должен приобрести академические и неформальные культурные
        компетенции в области права для достижения новых высот в карьере, более
        эффективного управления людьми и процессами, защиты бизнеса и
        формирования новых стратегий развития
      </>
    ),
    goalsOfProgramStr:
      'Курс подходит как специалистам, желающим после его окончания занять руководящие посты, так и действующим руководителям и владельцам бизнеса. Курс является аналогом MBA, с конкурентно более сильным академическим блоком юридических дисциплин. Программа подготовки основана на лучших международных образцах, соответствует зарубежным стандартам обучения для лиц, получивших первый опыт работы. Аббревиатура "MBL" является узнаваемым за рубежом и в России форматом переподготовки в юридической сфере. Выпускник должен приобрести академические и неформальные культурные компетенции в области права для достижения новых высот в карьере, более эффективного управления людьми и процессами, защиты бизнеса и формирования новых стратегий развития',
    whatWillYouLearn: [
      'Изучите международное частное, экономическое, интеграционное, налоговое, инвестиционное и бизнес-право. Поймете как работать с офшорами и трастами',
      'Узнаете об особенностях рассмотрения трансграничных коммерческих споров в государственных судах',
      'Изучите международные, национальные стандарты и технологии управления проектами',
      'Узнаете об особенностях рассмотрения споров в Международном коммерческом арбитраже',
      'Узнаете международные стандарты финансовой отчетности и особенности трансформации',
      'Получите навыки soft skills необходимые для профессиональной деятельности юриста'
    ],
    mbaFormat: 'online',
    mbaTypeOfProgram: 'mbl',
    specializedSubjects: [],
    picture: 'bg-header-9.jpg'
  }

  const program = data

  return (
    <>
      <NextSeo
        title={`${data.title} MBA - Moscow Business Academy`}
        description={truncate(program.goalsOfProgramStr, 120)}
        canonical={`https://moscow.mba${router.asPath}`}
      />
      <CourseJsonLd
        courseName={`${data.title} MBA`}
        providerName='Moscow Business Academy'
        providerUrl={`https://moscow.mba${router.asPath}`}
        description={truncate(program.goalsOfProgramStr, 120)}
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
