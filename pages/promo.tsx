import stls from '@/styles/pages/promo/Index.module.sass'
import {
  SetString,
  HandleGetPrograms,
  handleGetStaticProps
} from '@/helpers/index'
import { index } from '@/data/index'
import { NextSeo } from 'next-seo'
import JumbotronCta from '@/components/sections/JumbotronCta'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'
import CourseOptions from '@/components/sections/CourseOptions'
import ProgramDesc from '@/components/sections/ProgramDesc'
import ContactUs from '@/components/sections/ContactUs'
import Accreditation from '@/components/sections/Accreditation'
import Diploma from '@/components/sections/Diploma'
import WhoItIsFor from '@/components/sections/WhoItIsFor'

const PagePromo = ({ programs }) => {
  HandleGetPrograms(programs)
  const courseOptions = {
    whoIsFor: [
      {
        name: 'Online MBA',
        description: (
          <>
            <span className={stls.firstPara}>
              Программа проходит в онлайн-формате. Разработана специально для
              предпринимателей и руководителей, которые ценят свое время и хотят
              пройти обучение без отрыва от работы.{' '}
            </span>{' '}
            Во время обучения Вы будете получать обратную связь от экспертов по
            решению кейсов, проектным работам и домашним заданиям. Сможете в
            любое время задать вопрос и получить полезные советы и рекомендации.
          </>
        )
      },
      {
        name: 'Blended MBA',
        description: (
          <>
            <span className={stls.firstPara}>
              Смешанная программа MBA с очными сессиями. Разработана для
              предпринимателей и руководителей, которые готовы выделять время на
              посещение наших кампусов в Москве.{' '}
            </span>{' '}
            Во время обучения Вы сможете как в онлайн формате, так и очно
            получать обратную связь от экспертов и коллег по решению кейсов,
            проектным работам и домашним заданиям.
          </>
        )
      }
    ]
  }

  return (
    <>
      <NextSeo
        title={'Программы Mini MBA - Moscow Business Academy'}
        description={'Программы Mini MBA'}
        canonical={'https://moscow.mba/promo'}
      />

      <JumbotronCta />
      <div className={stls.container}>
        <CourseOptions
          data={programs.filter(program => program.studyFormat === 'online')}
        />
        <ContactUs title={SetString(index.receiveConsultation)} />
        <WhatWillYouLearn />
        <ProgramDesc />
        <Accreditation />
        <Diploma darkBackground />
        <WhoItIsFor program={courseOptions} />
        <ContactUs
          title={'Есть вопросы?'}
          titleNewStr={'Получите консультацию по программам MBA'}
          overlapsFooter
        />
      </div>
    </>
  )
}

export const getStaticProps = async () =>
  handleGetStaticProps({ ofType: 'mini', dataFor: 'promo' })

export default PagePromo
