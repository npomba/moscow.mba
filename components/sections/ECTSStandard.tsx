import stls from '@/styles/components/sections/ECTSStandard.module.sass'
import { IconECTS } from '@/components/icons'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import WrapperComponent from '../layout/WrapperComponent'

const ECTSStandard = () => {
  return (
    <section className={stls.container}>
      <WrapperComponent classNames={[stls.wrapper]}>
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
      </WrapperComponent>
    </section>
  )
}

export default ECTSStandard
