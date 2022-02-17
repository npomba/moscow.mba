import stls from '@/styles/components/sections/ConferencesInEurope.module.sass'
import Image from 'next/image'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import imageData from '@/data/images/conferencesInEurope'
import { base64pixel } from '@/config/index'
import Wrapper from '../layout/Wrapper'
import { ImgHigherMitap } from '@/components/images'

const ConferencesInEurope = () => {
  return (
    <section className={stls.container}>
      <div className={stls.circle} />
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.flexContainer}>
          <div className={stls.descContainer}>
            <h2 className={stls.title}>
              {SetString(lang.orgTitleFirst)}{' '}
              <span className={stls.red}>{SetString(lang.orgTitleSecond)}</span>
            </h2>
            <p className={stls.titleDesc}>{SetString(lang.orgDisc)}</p>
            <div className={stls.image}>
              <Image
                src={imageData.shorterImage.src}
                alt={SetString(imageData.shorterImage.alt)}
                width={623}
                height={364}
                layout='responsive'
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
          </div>
          <div className={stls.imageContainer}>
            <div className={stls.image}>
            <ImgHigherMitap/>      
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ConferencesInEurope
