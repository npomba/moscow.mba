import stls from '@/styles/components/sections/UpToDateContent.module.sass'
import Image from 'next/image'
import cn from 'classnames'
import { SetString } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { about } from '@/data/index'

const UpToDateContent = ({ withBottomLine = false }) => {
  return (
    <section
      className={cn(stls.container, {
        [stls.withLine]: withBottomLine
      })}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.section}>
          <h2>{SetString(about.uptodateTitle)}</h2>
        </div>
        <div className={stls.content}>
          <div className={stls.top}>
            <div className={stls.desc}>
              {SetString(about.uptodateDicsFirst)}{' '}
              <strong className={stls.red}>
                {SetString(about.uptodateDicsRed)}{' '}
              </strong>
              {SetString(about.uptodateDicsSecond)}
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
                2021 {SetString(about.uptodateYear)}
              </div>
              <p>
                {SetString(about.uptodateBenefitOneDics)} 2021{' '}
                {SetString(about.uptodateYearV2)}
              </p>
            </li>
            <li>
              <div className={stls.number}>
                53 {SetString(about.uptodateBenefitTwoTitle)}
              </div>
              <p>{SetString(about.uptodateBenefitTwoDics)}</p>
            </li>
            <li>
              <div className={stls.number}>
                {SetString(about.uptodateBenefitThreeTitle)}
              </div>
              <p>{SetString(about.uptodateBenefitThreeDics)}</p>
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default UpToDateContent
