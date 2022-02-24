import stls from '@/styles/components/sections/About.module.sass'
import { SetString } from '@/helpers/index'
import { index } from '@/data/index'
import Wrapper from '../layout/Wrapper'

const About = () => {
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.title}>{SetString(index.aboutTitle)}</div>
        <div className={stls.flexContainer}>
          <div className={stls.titleDesc}>
            <p className={stls.desc}>{SetString(index.aboutTxtFirst)}</p>
            <p className={stls.desc}>{SetString(index.aboutTxtSecond)}</p>
          </div>
          <ul className={stls.list}>
            <li className={stls.listItem}>
              <div className={stls.number}>
                {SetString(index.aboutBenefitTitleFirst)}
              </div>
              <p>{SetString(index.aboutBenefitDicsFirst)}</p>
            </li>
            <li className={stls.listItem}>
              <div className={stls.number}>9000+</div>
              <p>{SetString(index.aboutBenefitDicsSecond)}</p>
            </li>
            <li className={stls.listItem}>
              <div className={stls.number}>25%</div>
              <p>{SetString(index.aboutBenefitDicsThird)}</p>
            </li>
            <li className={stls.listItem}>
              <div className={stls.number}>150+</div>
              <p>{SetString(index.aboutBenefitDicsFourth)}</p>
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default About
