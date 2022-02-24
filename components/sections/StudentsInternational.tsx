import stls from '@/styles/components/sections/StudentsInternational.module.sass'
import Image from 'next/image'
import { SetString } from '@/helpers/index'
import { index, studentsInternational } from '@/data/index'
import { base64pixel } from '@/config/index'
import Wrapper from '../layout/Wrapper'

const StudentsInternational = () => {
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <div className={stls.descContainer}>
            <h2>{SetString(index.mbaWorldTitle)}</h2>
            <p className={stls.desc}>{SetString(index.mbaWorldDics)}</p>
          </div>
          <div className={stls.imageContainer}>
            <div className={stls.image}>
              <Image
                src={studentsInternational.image.src}
                alt={SetString(studentsInternational.image.alt)}
                width={769}
                height={597}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
            <div className={stls.info}>
              <span>{SetString(index.mbaWorldMoreThan)}</span>
              <strong>15</strong>
              <span>{SetString(index.mbaWorldCountries)}</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default StudentsInternational
