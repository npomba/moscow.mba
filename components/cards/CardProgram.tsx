import stls from '@/styles/components/cards/Cardprogram.module.sass'
import Link from 'next/link'
import Price from '@/components/costs/Price'
import { IconArrowTopRight } from '@/components/icons'
import { getStringDeclensionNumber, SetString, useAt } from '@/helpers/index'
import lang from '@/data/translation/months'
import TrainingPeriod from '@/components/costs/TrainingPeriod'

const CardProgram = ({ professionLayout, program, number, type, format }) => {
  const at = useAt()

  return (
    <Link href={`/programs/${type}/${format}/${program?.slug}`}>
      <a className={stls.container}>
        <div className={stls.arrow}>
          <IconArrowTopRight />
        </div>
        <div>
          <span className={stls.category}>
            {at.mini
              ? 'Mini MBA'
              : at.mba
              ? 'MBA'
              : at.profession
              ? 'Профессия'
              : at.course
              ? 'Курс'
              : ''}
          </span>
        </div>
        <h3 className={stls.programTitle}>{program?.title}</h3>
        <div className={stls.bottomContainer}>
          <div>
            <Price
              discount={!at.blended}
              type={type}
              format={format}
              programPrice={(at.profession || at.course) && program?.price}
              renderedByComponent='CardProgram'
            />
          </div>
          <div className={stls.duration}>
            {program?.duration ? (
              `${program?.duration?.minStudyMonths} ${SetString(
                lang.months,
                false,
                getStringDeclensionNumber(program?.duration?.minStudyMonths)
              )}`
            ) : (
              <TrainingPeriod type={type} />
            )}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CardProgram
