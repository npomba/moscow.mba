import stls from '@/styles/components/sections/ProgramGoal.module.sass'

const ProgramGoal = ({ data }) => {
  return (
    <section className={stls.container}>
      <div className={stls.content}>
        <h2>Цель программы</h2>
        <div className={stls.goals}>{data.goalsOfProgram}</div>
      </div>
    </section>
  )
}

export default ProgramGoal
