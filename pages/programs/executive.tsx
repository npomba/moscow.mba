import stls from '@/styles/pages/programs/Executive.module.sass'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import JumbotronProgram from '@/components/sections/JumbotronProgram'
import AboutExecutive from '@/components/sections/AboutExecutive'
import ResultsExecutive from '@/components/sections/ResultsExecutive'
import InPersonWithExperts from '@/components/sections/InPersonWithExperts'
import ModulesAbroad from '@/components/sections/ModulesAbroad'
import WhoStudies from '@/components/sections/WhoStudies'
import ProgramsModules from '@/components/sections/ProgramsModules'
import ContactUs from '@/components/sections/ContactUs'
import Accreditation from '@/components/sections/Accreditation'
import Teachers from '@/components/sections/Teachers'
import Rules from '@/components/sections/Rules'
import ExecutiveRequirements from '@/components/sections/ExecutiveRequirements'
import Students from '@/components/sections/Students'
import Reviews from '@/components/sections/Reviews'
import CostOfStudy from '@/components/sections/CostOfStudy'
import Qna from '@/components/sections/Qna'
import { handleGetStaticProps } from '@/helpers/index'

const pageProgramsExecutive = ({ program, programs }) => {
  return (
    <>
      <NextSeo
        title={`${program.title} - Moscow Business Academy`}
        description={truncate(program.description, 120)}
        canonical={'https://moscow.mba/programs/executive'}
      />
      <CourseJsonLd
        courseName={`${program.title} MBA`}
        providerName='Moscow Business Academy'
        providerUrl={'https://moscow.mba/programs/executive'}
        description={truncate(program.description, 120)}
      />

      <JumbotronProgram program={program} />
      <div className={stls.container}>
        <AboutExecutive />
        <ResultsExecutive />
        <InPersonWithExperts />
        <ModulesAbroad />
        <WhoStudies />

        <ProgramsModules program={program} />
        <ContactUs
          programId={program._id}
          programTitle={program.title}
          title={'Получите консультацию'}
          titleNewStr={'по программе обучения'}
        />
        <Accreditation />
        <Teachers programId={program._id} programTitle={program.title} />
        <Rules prices={{ lowerPrice: '600 000', higherPrice: '2 000 000' }} />
        <ExecutiveRequirements />
        <Students />
        <Reviews />
        <CostOfStudy
          programId={program._id}
          programTitle={program.title}
          programType='executive'
        />
        <Qna programId={program._id} programTitle={program.title} />
        <ContactUs
          programId={program._id}
          programTitle={program.title}
          title={'Не знаете что выбрать?'}
          titleNewStr={'Получите консультацию по программам MBA'}
        />
      </div>
    </>
  )
}

export const getStaticProps = async () =>
  handleGetStaticProps({
    programSlug: 'executive',
    programStudyFormat: 'blended',
    programType: 'executive'
  })

export default pageProgramsExecutive
