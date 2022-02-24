import stls from '@/styles/components/sections/ConferencesInEurope.module.sass'
import Image from 'next/image'
import { SetString, useAt } from '@/helpers/index'
import { index } from '@/data/index'
import { conferencesInEurope } from '@/data/index'
import { base64pixel } from '@/config/index'
import Wrapper from '../layout/Wrapper'

const ConferencesInEurope = () => {
  const at = useAt()
  return (
    <section className={stls.container}>
      <div className={stls.circle} />
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.flexContainer}>
          <div className={stls.descContainer}>
            <h2 className={stls.title}>
              {at.en && <>Conferences</>}
              {at.ru && (
                <>
                  Организация <br className={stls.laptopDesktopWindescreen} />{' '}
                  конференций
                </>
              )}{' '}
              <span className={stls.red}>
                {at.en && <>in&nbsp;Europe</>}
                {at.ru && <>в&nbsp;Европе</>}
              </span>
            </h2>
            <p className={stls.titleDesc}>{SetString(index.orgDisc)}</p>
            <div className={stls.image}>
              <Image
                src={conferencesInEurope.shorterImage.src}
                alt={SetString(conferencesInEurope.shorterImage.alt)}
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
              <Image
                src={conferencesInEurope.higherImage.src}
                alt={SetString(conferencesInEurope.higherImage.alt)}
                width={415}
                height={690}
                layout='responsive'
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ConferencesInEurope
