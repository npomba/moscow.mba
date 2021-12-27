import stls from '@/styles/components/sections/Executive.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import langMenu from '@/data/translation/menu'
import imageData from '@/data/images/executive'
import Price from '@/components/costs/Price'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import { ProgramSubjects } from '@/components/general'
import { base64pixel } from '@/config/index'
import { Wrapper } from '@/components/layout'

const Executive = () => {
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.flexContainer}>
          <div className={stls.content}>
            <div className={stls.title}>
              <span>Premium</span>
            </div>
            <h2>Executive MBA</h2>
            <p className={stls.desc}>{SetString(lang.executiveMBADicsFirst)}</p>
            <p className={stls.desc}>
              {SetString(lang.executiveMBADicsSecond)}
            </p>
            <ul className={stls.list}>
              <li className={stls.listItem}>
                <TrainingPeriod type={'executive'} />
              </li>
              <li className={stls.listItem}>
                2 {SetString(lang.executiveOfflineModules)}
              </li>
              <li className={stls.listItem}>
                <ProgramSubjects sum={true} type={'executive'} />{' '}
                {SetString(langMenu.qtSubjects)}
              </li>
            </ul>
            <div className={stls.price}>
              {SetString(langMenu.price)}:{' '}
              <Price discount={false} type={'executive'} />
            </div>
            <Link href='/programs/executive/' locale='ru'>
              <a className={stls.button}>{SetString(lang.learnMoreBtn)}</a>
            </Link>
          </div>
          <div className={stls.imagesContainer}>
            <div className={classNames(stls.image, stls.imageOne)}>
              <Image
                src={imageData.largerCircle.src}
                alt={SetString(imageData.largerCircle.alt)}
                width={401}
                height={400}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
            <div className={classNames(stls.image, stls.imageTwo)}>
              <Image
                src={imageData.smallerCircle.src}
                alt={SetString(imageData.smallerCircle.alt)}
                width={221}
                height={221}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
            <div className={stls.count}>
              <strong>200+</strong>
              <span>{SetString(lang.graduates)}</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Executive
