import stls from '@/styles/components/sections/UpToDateContent.module.sass'
import classNames from 'classnames'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/about'
import Image from 'next/image'
import Wrapper from '../layout/Wrapper'

const UpToDateContent = ({ withBottomLine = false }) => {
  return (
    <section
      className={classNames(stls.container, {
        [stls.withLine]: withBottomLine
      })}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.section}>
          <h2>{SetString(lang.uptodateTitle)}</h2>
        </div>
        <div className={stls.content}>
          <div className={stls.top}>
            <div className={stls.desc}>
              {SetString(lang.uptodateDicsFirst)}{' '}
              <strong className={stls.red}>
                {SetString(lang.uptodateDicsRed)}{' '}
              </strong>
              {SetString(lang.uptodateDicsSecond)}
            </div>
            <div className={stls.bottomImg}>
              <Image
                src={'/assets/images/actual_pic_1.jpg'}
                alt='Студенты обучаются на конференции'
                width={850}
                height={366}
              />
            </div>
          </div>
          <div className={stls.rightImg}>
            <Image
              src={'/assets/images/actual_pic_2.jpg'}
              alt='Оператор снимает конференцию'
              width={410}
              height={635}
            />
          </div>
        </div>
        <div className={stls.section}>
          <ul className={stls.list}>
            <li>
              <div className={stls.number}>
                2021 {SetString(lang.uptodateYear)}
              </div>
              <p>
                {SetString(lang.uptodateBenefitOneDics)} 2021{' '}
                {SetString(lang.uptodateYearV2)}
              </p>
            </li>
            <li>
              <div className={stls.number}>
                53 {SetString(lang.uptodateBenefitTwoTitle)}
              </div>
              <p>{SetString(lang.uptodateBenefitTwoDics)}</p>
            </li>
            <li>
              <div className={stls.number}>
                {SetString(lang.uptodateBenefitThreeTitle)}
              </div>
              <p>{SetString(lang.uptodateBenefitThreeDics)}</p>
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default UpToDateContent
