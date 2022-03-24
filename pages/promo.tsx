import stls from '@/styles/pages/promo/Index.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext, useAt } from '@/hooks/index'
// import {
//   JumbotronCta,
//   WhatWillYouLearn,
//   CourseOptions,
//   ProgramDesc,
//   ContactUs,
//   Accreditation,
//   Diploma,
//   WhoItIsFor
// } from '@/components/sections'
import JumbotronCta from '@/components/sections/general/JumbotronCta'
import WhatWillYouLearn from '@/components/sections/general/WhatWillYouLearn'
import CourseOptions from '@/components/sections/general/CourseOptions'
import ProgramDesc from '@/components/sections/general/ProgramDesc'
import ContactUs from '@/components/sections/general/ContactUs'
import Accreditation from '@/components/sections/general/Accreditation'
import Diploma from '@/components/sections/general/Diploma'
import WhoItIsFor from '@/components/sections/general/WhoItIsFor'

const PagePromo = ({ programs }) => {
  usePageHandleContext({ programs })

  const at = useAt()

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
        <CourseOptions />
        <ContactUs
          title={
            at.en
              ? 'Receive a consultation on the MBA programs'
              : 'Получите консультацию по программам'
          }
        />
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

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.promo, context })

export default PagePromo
