import stls from '@/styles/pages/promo/Index.module.sass'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'
import { NextSeo } from 'next-seo'
import { backendUrl, apiProgramsReqUrl } from '@/config/index'
import JumbotronCta from '@/components/sections/JumbotronCta'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'
import CourseOptions from '@/components/sections/CourseOptions'
import ProgramDesc from '@/components/sections/ProgramDesc'
import ContactUs from '@/components/sections/ContactUs'
import Accreditation from '@/components/sections/Accreditation'
import Diploma from '@/components/sections/Diploma'
import WhoItIsFor from '@/components/sections/WhoItIsFor'

const courseOptions = {
  title: 'Форматы обучения',
  suitsForTitle: ['Online MBA', 'Blended MBA'],
  suitsForDesc: [
    <>
      <span className={stls.firstPara}>
        Программа проходит в онлайн-формате. Разработана специально для
        предпринимателей и руководителей, которые ценят свое время и хотят
        пройти обучение без отрыва от работы.{' '}
      </span>{' '}
      Во время обучения Вы будете получать обратную связь от экспертов по
      решению кейсов, проектным работам и домашним заданиям. Сможете в любое
      время задать вопрос и получить полезные советы и рекомендации.
    </>,
    <>
      <span className={stls.firstPara}>
        Смешанная программа MBA с очными сессиями. Разработана для
        предпринимателей и руководителей, которые готовы выделять время на
        посещение наших кампусов в Москве.{' '}
      </span>{' '}
      Во время обучения Вы сможете как в онлайн формате, так и очно получать
      обратную связь от экспертов и коллег по решению кейсов, проектным работам
      и домашним заданиям.
    </>
  ]
}

const promo = ({ programs }) => {
  const data = programs.filter(
    program =>
      program.mbaTypeOfProgram === 'mini' && program.mbaFormat === 'online'
  )

  return (
    <>
      <NextSeo
        title={'Программы Mini MBA - Moscow Business Academy'}
        description={'Программы Mini MBA'}
        canonical={'https://moscow.mba/promo'}
      />

      <JumbotronCta dimmed />
      <div className={stls.generalContainer}>
        <WhatWillYouLearn />
        <ProgramDesc />
        <CourseOptions data={data} />
        <ContactUs title={SetString(lang.receiveConsultation)} />
        <Accreditation />
        <Diploma darkBackground />
        <WhoItIsFor data={courseOptions} />
        <ContactUs
          title={'Есть вопросы?'}
          titleNewStr={'Получите консультацию по программам MBA'}
          overlapsFooter
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default promo
