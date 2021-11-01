import stls from '@/styles/components/general/cards/CardProgram.module.sass'
import Link from 'next/link'
import Price from '@/components/costs/Price'
import { IconArrowTopRight } from '@/components/icons'
import { getStringDeclensionNumber } from '@/helpers/index'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/months'

const CardProgram = ({ professionLayout, program, number, type, format }) => {
  const studyTimeMonths = program.minStudyTimeM

  return (
    <Link href={`/programs/${type}/${format}/${program.url}`}>
      <a className={stls.program}>
        <div className={stls.arrow}>
          <IconArrowTopRight />
        </div>
        <div className={stls.number}>
          {number < 10 ? `0${number}` : number}.
        </div>
        {professionLayout && (
          <div className={stls.duration}>{`${studyTimeMonths} ${SetString(
            lang.months,
            false,
            getStringDeclensionNumber(studyTimeMonths)
          )}`}</div>
        )}
        <div className={stls.bottomContainer}>
          <h3 className={stls.programTitle}>{program.title}</h3>
          {professionLayout && (
            <div>
              <Price
                discount
                type='profession'
                format='online'
                renderedByComponent='CardProgram'
              />
            </div>
          )}
        </div>
      </a>
    </Link>
  )
}

export default CardProgram
