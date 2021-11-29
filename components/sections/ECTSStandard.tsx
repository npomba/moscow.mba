import stls from '@/styles/components/sections/ECTSStandard.module.sass'
import { IconECTS } from '@/components/icons'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'

const ECTSStandard = () => {
  return (
    <section className={stls.container}>
      <div className={stls.left}>
        <IconECTS classNames={[stls.icon]} />
      </div>
      <div className={stls.right}>
        <h3 className={stls.title}>
          Программа разработана по международному стандарту
        </h3>
        <p className={stls.desc}>
          Программа разработана <br className={stls.desktop} /> в соответствии{' '}
          <br className={stls.widescreen} /> с ECTS — Европейская система
          перевода и накопления баллов. В связи с этим, выдаваемый диплом
          признается <br className={stls.desktop} />
          за рубежом
        </p>
      </div>
    </section>
  )
}

export default ECTSStandard
