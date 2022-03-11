import stls from '@/styles/components/sections/ProgramGoal.module.sass'
import { Wrapper } from '@/components/layout'

const ProgramGoal = ({ data }) => {
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.content]}>
        <h2>Цель программы</h2>
        <div className={stls.goals}>{data?.goal}</div>
      </Wrapper>
    </section>
  )
}

export default ProgramGoal
