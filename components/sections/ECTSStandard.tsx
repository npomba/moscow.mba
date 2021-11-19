import stls from '@/styles/components/sections/ECTSStandard.module.sass'
import IconECTS from '@/components/icons/IconECTS'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'

const ECTSStandard = () => {
  return (
    <section className={stls.container}>
      <div className={stls.icon}>
        <IconECTS />
      </div>
      <div className={stls.content}>
        <h3 className={stls.title}>{SetString(lang.standartECTSTitle)}</h3>
        <p className={stls.desc}>{SetString(lang.standartECTSTDesc)}</p>
      </div>
    </section>
  )
}

export default ECTSStandard
