import stls from '@/styles/components/sections/WhoStudies.module.sass'
import { IconDecorativeLines } from '@/components/icons'
import { CircularProgressbar } from 'react-circular-progressbar'
import WrapperComponent from '../layout/WrapperComponent'

const WhoStudies = () => {
  return (
    <section className={stls.container}>
      <WrapperComponent classNames={[stls.wrapper]}>
      <h2>Кто учится на программе?</h2>
      <ul className={stls.list}>
        <li>
          <CircularProgressbar className={stls.circleLg} value={45} />
          <strong className={stls.strong}>45%</strong>
          <p>Владельцев крупного бизнеса</p>
        </li>
        <li>
          <CircularProgressbar className={stls.circleLg} value={55} />
          <strong className={stls.strong}>55%</strong>
          <p>SEO и руководителей</p>
        </li>
      </ul>
      <div className={stls.lines}>
        <IconDecorativeLines />
      </div>
      </WrapperComponent>
    </section>
  )
}

export default WhoStudies
