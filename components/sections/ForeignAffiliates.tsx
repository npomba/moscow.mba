import stls from '@/styles/components/sections/ForeignAffiliates.module.sass'
import Image from 'next/image'
import { SetString } from '@/helpers/index'
import { index, foreignAffiliates } from '@/data/index'
import { base64pixel } from '@/config/index'
import Wrapper from '../layout/Wrapper'

const ForeignAffiliates = () => {
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <h2>{SetString(index.foreignAffiliatesTitle)}</h2>
        <p className={stls.title}>{SetString(index.foreignAffiliatesDisc)}</p>
        <div className={stls.flexContainer}>
          <ul className={stls.imagesList}>
            <li className={stls.imagesListItem}>
              <div className={stls.image}>
                <Image
                  src={foreignAffiliates.circleOne.src}
                  alt={SetString(foreignAffiliates.circleOne.alt)}
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
                  src={foreignAffiliates.circleTwo.src}
                  alt={SetString(foreignAffiliates.circleTwo.alt)}
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
                  src={foreignAffiliates.circleThree.src}
                  alt={SetString(foreignAffiliates.circleThree.alt)}
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
                <p>{SetString(index.foreignAffiliatesSurfaceArea)}</p>
              </div>
            </li>
          </ul>
          <div className={stls.mapContainer}>
            {/*TODO: swap fixed layout with default, fix up the css for an image */}
            <Image
              src='/assets/images/branches_map-alt.png'
              alt={SetString(index.foreignAffiliatesDisc)}
              width={659}
              height={394}
              layout='fixed'
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ForeignAffiliates
