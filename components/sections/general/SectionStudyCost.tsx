import stls from '@/styles/components/sections/general/SectionStudyCost.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { ProgramContext } from '@/context/index'
import { getClassNames } from '@/helpers/index'
import { GeneralStickerDiscount } from '@/components/general'
import { Loan, Price, TrainingPeriod, Until } from '@/components/costs'
import { Wrapper } from '@/components/layout'

type TypeSectionStudyCostProps = TypeClassNames

const SectionStudyCost = ({ classNames }: TypeSectionStudyCostProps) => {
  const at = useAt()
  const { program } = useContext(ProgramContext)

  const pros = [
    'Практические домашние задания',
    'Современная программа 2022 года',
    'Интерактивные онлайн-семинары',
    'Карьерные консультации',
    'Дипломы заносятся в ФРДО',
    'Ежедневная помощь от кураторов и преподавателей'
  ]

  const isDiscounted = at.online || at.mbl

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <div className={stls.heading}>
          <h2 className={stls.title}>
            {at.en ? 'Study Cost' : 'Стоимость обучения'}
          </h2>
          <GeneralStickerDiscount />
        </div>
        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.programInfos}>
              <div className={stls.programInfo}>
                <p className={stls.programInfoTitle}>
                  <TrainingPeriod
                    type={
                      at.mini
                        ? 'mini'
                        : at.mba
                        ? 'mba'
                        : at.executive
                        ? 'executive'
                        : at.mbl
                        ? 'mba'
                        : null
                    }
                  />
                </p>
                <p className={stls.programInfoContent}>
                  Возможно закончить экстерном
                </p>
              </div>
              <div className={stls.programInfo}>
                <p className={stls.programInfoTitle}>
                  {at.blended ? 'С очными модулями' : 'Дистанционно'}
                </p>
                <p className={stls.programInfoContent}>
                  {at.blended
                    ? 'Живое общение с экспертами'
                    : 'Онлайн-встречи с преподавателями'}
                </p>
              </div>
            </div>
            <div className={stls.programAdmission}>
              <p className={stls.programAdmissionTitle}>
                Ближайший набор{' '}
                <span className={stls.highlight}>
                  <Until preposition={false} executive={at.executive} />{' '}
                </span>
              </p>
              <p className={stls.programAdmissionContent}>
                *количество мест ограничено
              </p>
            </div>
            <ul className={stls.pros}>
              {pros.map((pro, idx) => (
                <li key={`${pro}-${idx}`} className={stls.proItem}>
                  <p className={stls.pro}>{pro}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={stls.right}>
            <div className={stls.ps}>
              <p className={stls.p}>
                Успех в карьере напрямую связывают с получением образования
              </p>
              <p className={stls.p}>
                Получите актульные знания, увеличьте свой доход и продвиньтесь
                по карьерной лестнице!
              </p>
            </div>
            <p className={stls.getStartedTodayP}>
              Запишитесь на курс MBA сегодня:
            </p>
            <div className={stls.loan}>
              <Loan
                discount={isDiscounted}
                type={program?.category?.type}
                format={program?.studyFormat}
                programPrice={(at.profession || at.course) && program?.price}
                variant='SectionStudyCost'
              />
            </div>
            <button>Оставить заявку</button>
            <p className={stls.btwP}>
              *согласно опросу за 2020 год, 93% наших студентов окупили обучение
              уже на 2-й месяц
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionStudyCost
