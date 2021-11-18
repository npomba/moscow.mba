import stls from '@/styles/components/sections/StandardECTS.module.sass'
import IconECTS from '@/components/icons/IconECTS'
import SetString from '@/helpers/SetString'
import lang from '@/data/translation/index'


export const StandardECTS = () => {
  return (
    <section className={stls.container}>
      <div className={stls.icon}>
        <IconECTS/>
      </div>
      <div className={stls.content}>
        <h3 className={stls.title}>{SetString(lang.standartECTSTitle)}</h3>
        <p className={stls.text}>{SetString(lang.standartECTSTDiscription)}</p>
      </div>
    </section>
  )
}
export default StandardECTS