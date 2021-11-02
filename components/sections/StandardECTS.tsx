import stls from '@/styles/components/sections/StandardECTS.module.sass'
import IconECTS from '@/components/icons/IconECTS'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'


export const StandardECTS = () => {
  return (
    <section className={stls.container}>
      <div className={stls.icon}>
        <IconECTS/>
      </div>
      <div className={stls.content}>
        <h3>{SetString(lang.standartECTSTitle)}</h3>
        <p>{SetString(lang.standartECTSTDiscriotion)}</p>
      </div>
    </section>
  )
}
export default StandardECTS