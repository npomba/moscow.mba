import stls from '@/styles/components/sections/WhatWillYouLearn.module.sass'
import classNames from 'classnames'
import Image from 'next/image'
import { base64pixel } from '@/config/index'
import MovingWithScroll from '@/helpers/MovingWithScroll'

const WhatWillYouLearn = ({ data = null }) => {
  const aboutAcademy = [
    'Одна из немногих школ России, которая имеет европейскую аккредитацию Ecicel',
    'Членство в Российской Ассоциации Бизнес-образования (РАБО)',
    '11 лет на рынке образования',
    '0% рассрочка без переплат',
    '6 филиалов за рубежом',
    '2000+ выпускников',
    'Программы, соответствующие международным требованиям',
    'Спикеры - практикующие специалисты, имеющие международный опыт преподавания',
    'Корпоративные клиенты'
  ]

  const list = data ? data.whatWillYouLearn : aboutAcademy

  return (
    <section className={stls.container}>
      <div className={stls.content}>
        <div
          className={classNames(stls.titleContainer, stls.floatLeft, {
            [stls.smallPl]: !data
          })}>
          <h2 className={stls.title}>
            {data ? (
              <>
                Чему <br />
                Вы научитесь?
              </>
            ) : (
              <>
                Moscow Business <br /> Academy это:
              </>
            )}
          </h2>
        </div>
        <div className={stls.floatRight}>
          <ul className={stls.list}>
            {list &&
              list.map((item, idx) => {
                return (
                  <li key={(item.string || item) + idx} className={stls.item}>
                    {item.string || item}
                  </li>
                )
              })}
          </ul>
        </div>
        <div className={stls.floatLeft}>
          <div className={stls.image}>
            <MovingWithScroll start={0} end={200}>
              <Image
                src='/assets/images/learning_pic_1.jpg'
                width='651'
                height='389'
                alt='Слушатели во время конференции'
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </MovingWithScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
// 651 x 389

export default WhatWillYouLearn
