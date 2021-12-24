import stls from '@/styles/components/sections/ProgramGoal.module.sass'
import WrapperComponent from '@/components/layout/WrapperComponent'

const ProgramGoal = ({ data }) => {
  return (
    <section className={stls.container}>
      <WrapperComponent classNames={[stls.content]}>
        <h2>Цель программы</h2>
        <div className={stls.goals}>{data.goal}</div>
      </WrapperComponent>
    </section>
  )
}

export default ProgramGoal
