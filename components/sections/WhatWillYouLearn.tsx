import stls from '@/styles/components/sections/WhatWillYouLearn.module.sass'
import classNames from 'classnames'
import useAt from '@/components/hooks/useAt'
import Image from 'next/image'
import { base64pixel } from '@/config/index'

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

const WhatWillYouLearn = ({ data = null }) => {
  const at = useAt()
  const listContent = data ? data.whatWillYouLearn : aboutAcademy

  return (
    <section
      className={classNames(stls.container, { [stls.withTopLine]: at.promo })}>
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
            {listContent.map((item, idx) => {
              return (
                <li key={idx} className={stls.item}>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
        <div className={stls.floatLeft}>
          <div className={stls.image}>
            <Image
              src='/assets/images/learning_pic_1.jpg'
              width='651'
              height='389'
              alt='Слушатели во время конференции'
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
// 651 x 389

export default WhatWillYouLearn
