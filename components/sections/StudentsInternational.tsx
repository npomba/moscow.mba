import stls from '@/styles/components/sections/StudentsInternational.module.sass'
import Image from 'next/image'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import imageData from '@/data/images/studentsInternational'
import { base64pixel } from '@/config/index'
import WrapperComponent from '../layout/WrapperComponent'

const StudentsInternational = () => {
  return (
    <section className={stls.container}>
      <WrapperComponent classNames={[stls.wrapper]}>
      <div className={stls.content}>
        <div className={stls.descContainer}>
          <h2>{SetString(lang.mbaWorldTitle)}</h2>
          <p className={stls.desc}>{SetString(lang.mbaWorldDics)}</p>
        </div>
        <div className={stls.imageContainer}>
          <div className={stls.image}>
            <Image
              src={imageData.image.src}
              alt={SetString(imageData.image.alt)}
              width={769}
              height={597}
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          </div>
          <div className={stls.info}>
            <span>{SetString(lang.mbaWorldMoreThan)}</span>
            <strong>15</strong>
            <span>{SetString(lang.mbaWorldCountries)}</span>
          </div>
        </div>
      </div>
      </WrapperComponent>
    </section>
  )
}

export default StudentsInternational
