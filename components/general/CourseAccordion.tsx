import stls from '@/styles/components/general/CourseAccordion.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import Until from '@/components/costs/Until'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import { IconCheckCircle, IconClock, IconScreen } from '@/components/icons'

const CourseAccordion = ({
  course,
  accordionIndex,
  activeAccordion,
  setActiveAccordion
}) => {
  const { title, whatWillYouLearn, mbaTypeOfProgram, mbaFormat, url } = course

  const coursePros = [
    'Международный диплом установленного образца с присвоением степени MBA',
    <>
      <span>Последнее обновление </span>
      программы было в 2021 г.
    </>,
    <>
      <span>Разработана по </span>
      международным стандартам
    </>,
    <>
      <span>Спикеры являются </span>
      практикующими специалистами
    </>
  ]

  const handleAccordionClick = () => {
    if (activeAccordion) setActiveAccordion(-1)

    if (!activeAccordion && setActiveAccordion)
      setActiveAccordion(accordionIndex)
  }

  return (
    <div
      className={classNames(stls.container, {
        [stls.opened]: activeAccordion
      })}>
      <div className={stls.mainInfoContainer} onClick={handleAccordionClick}>
        <span className={stls.accordionLabel}>Курс MBA</span>
        <ul className={stls.courseMainInfoList}>
          <li className={stls.courseMainInfoItem}>
            От {<TrainingPeriod type={mbaTypeOfProgram} />}
          </li>
          <li className={stls.courseMainInfoItem}>Очно или дистанционно</li>
          <li className={stls.courseMainInfoItem}>
            Старт {<Until preposition={false} />}
          </li>
        </ul>
        <h3 className={stls.courseTitle}>{title}</h3>
        <div className={stls.plus}>
          <i></i>
          <i></i>
        </div>
      </div>
      <div className={stls.additionalInfoContainer}>
        <p className={stls.listTitle}>Чему научитесь:</p>
        <ul className={stls.whatWillLearnList}>
          {whatWillYouLearn.map(item => (
            <li key={item} className={stls.whatWillLearnItem}>
              {item}
            </li>
          ))}
        </ul>
        <ul className={stls.courseAdditionalInfoList}>
          <li className={stls.courseAdditionalInfoItem}>
            <IconClock fill={'#ff3535'} />
            От {<TrainingPeriod type={mbaTypeOfProgram} />}
          </li>
          <li className={stls.courseAdditionalInfoItem}>
            <IconScreen fill={'#ff3535'} />
            Дистанционное или очное обучение
          </li>
        </ul>
        <ul className={stls.courseProsList}>
          {coursePros.map((pro, idx) => (
            <li key={idx} className={stls.courseProsItem}>
              <IconCheckCircle fill={'#ff3535'} />
              <p className={stls.courseProDesc}>{pro}</p>
            </li>
          ))}
        </ul>
        <Link href={`/programs/${mbaTypeOfProgram}/${mbaFormat}/${url}`}>
          <a className={stls.learnMoreBtn}>Узнать больше о программе</a>
        </Link>
      </div>
    </div>
  )
}

export default CourseAccordion
