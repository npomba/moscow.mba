import stls from '@/styles/components/sections/StudentsInternational.module.sass'
import Image from 'next/image'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import imageData from '@/data/images/studentsInternational'
import { base64pixel } from '@/config/index'
import Wrapper from '../layout/Wrapper'
import { ImgWorldMba } from '@/components/images'

const StudentsInternational = () => {
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <div className={stls.descContainer}>
            <h2>{SetString(lang.mbaWorldTitle)}</h2>
            <p className={stls.desc}>{SetString(lang.mbaWorldDics)}</p>
          </div>
          <div className={stls.imageContainer}>
            <div className={stls.image}>
              <ImgWorldMba/>
            </div>
            <div className={stls.info}>
              <span>{SetString(lang.mbaWorldMoreThan)}</span>
              <strong>15</strong>
              <span>{SetString(lang.mbaWorldCountries)}</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default StudentsInternational
