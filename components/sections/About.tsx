import stls from '@/styles/components/sections/About.module.sass'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'

const About = () => {
  return (
    <section className={stls.container}>
      <div className={stls.title}>{SetString(lang.aboutTitle)}</div>
      <div className={stls.flexContainer}>
        <div className={stls.titleDesc}>
          <p className={stls.desc}>{SetString(lang.aboutTxtFirst)}</p>
          <p className={stls.desc}>{SetString(lang.aboutTxtSecond)}</p>
        </div>
        <ul className={stls.list}>
          <li className={stls.listItem}>
            <div className={stls.number}>
              {SetString(lang.aboutBenefitTitleFirst)}
            </div>
            <p>{SetString(lang.aboutBenefitDicsFirst)}</p>
          </li>
          <li className={stls.listItem}>
            <div className={stls.number}>9000+</div>
            <p>{SetString(lang.aboutBenefitDicsSecond)}</p>
          </li>
          <li className={stls.listItem}>
            <div className={stls.number}>25%</div>
            <p>{SetString(lang.aboutBenefitDicsThird)}</p>
          </li>
          <li className={stls.listItem}>
            <div className={stls.number}>150+</div>
            <p>{SetString(lang.aboutBenefitDicsFourth)}</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
