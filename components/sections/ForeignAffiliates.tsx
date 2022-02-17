import stls from '@/styles/components/sections/ForeignAffiliates.module.sass'
import Image from 'next/image'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import imageData from '@/data/images/foreignAffiliates'
import { base64pixel } from '@/config/index'
import Wrapper from '../layout/Wrapper'
import { ImgMBAAffiliates } from '@/components/images'

const ForeignAffiliates = () => {
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <h2>{SetString(lang.foreignAffiliatesTitle)}</h2>
        <p className={stls.title}>{SetString(lang.foreignAffiliatesDisc)}</p>
        <div className={stls.flexContainer}>
          <ul className={stls.imagesList}>
            <li className={stls.imagesListItem}>
              <div className={stls.image}>
                <Image
                  src={imageData.circleOne.src}
                  alt={SetString(imageData.circleOne.alt)}
                  width={191}
                  height={191}
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
            </li>
            <li className={stls.imagesListItem}>
              <div className={stls.image}>
                <Image
                  src={imageData.circleTwo.src}
                  alt={SetString(imageData.circleTwo.alt)}
                  width={191}
                  height={191}
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
            </li>
            <li className={stls.imagesListItem}>
              <div className={stls.image}>
                <Image
                  src={imageData.circleThree.src}
                  alt={SetString(imageData.circleThree.alt)}
                  width={191}
                  height={191}
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
            </li>
            <li className={stls.imagesListItem}>
              <div className={stls.circle}>
                <div className={stls.number}>
                  5 000 м<sup>2</sup>
                </div>
                <div className={stls.line}></div>
                <p>{SetString(lang.foreignAffiliatesSurfaceArea)}</p>
              </div>
            </li>
          </ul>
          <div className={stls.mapContainer}>
            {/*TODO: swap fixed layout with default, fix up the css for an image */}
            <ImgMBAAffiliates/>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ForeignAffiliates
