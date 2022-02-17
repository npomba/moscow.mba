import stls from '@/styles/components/sections/JumbotronMain.module.sass'
import Link from 'next/link'
import Image from 'next/image'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import { Breadcrumbs } from '@/components/general'
import { IconArrowTopRight } from '@/components/icons'

import { base64pixel } from '@/config/index'
import { ImgJumbotronFill } from '@/components/images'

const JumbotronMain = () => {
  return (
    <section className={stls.container}>
      <div className={stls.image}>
        {/* should replace following alt with english supported version */}
        <ImgJumbotronFill/>
        {/* <Image
          src='/assets/images/jumbotron_1.jpg'
          layout='fill'
          alt={'Студенты обучаются'}
        /> */}
      </div>
      <div className={stls.generalContainer}>
        <div className={stls.content}>
          <Breadcrumbs />
          <div className={stls.flexContainer}>
            <div className={stls.descContainer}>
              <div className={stls.imageContainer}>
                <Image
                  src='/assets/images/mba_text.png'
                  alt='Moscow Business Academy'
                  width={482}
                  height={146}
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <h1>Moscow Business Academy</h1>
              <div className={stls.desc}>{SetString(lang.headerSubtitle)}</div>
            </div>
          </div>
          <Link href='/programs/mini/online' locale='ru'>
            <a className={stls.square}>
              <p>{SetString(lang.redCubeLink)}</p>
              <div className={stls.arrow}>
                <IconArrowTopRight />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default JumbotronMain
