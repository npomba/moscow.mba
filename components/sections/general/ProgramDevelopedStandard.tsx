import stls from '@/styles/components/sections/ProgramDevelopedStandard.module.sass'
import { IconEmblem } from '@/components/icons'
import { Wrapper } from '@/components/layout'

const ProgramDevelopedStandard = () => {
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <IconEmblem classNames={[stls.icon]} />
        <div className={stls.content}>
          <div className={stls.title}>
            <h2>Программа разработана по&nbsp;профстандарту</h2>
          </div>
          <div className={stls.text}>
            <p>
              Программа разработана с учетом требований соответствующего
              профессионального стандарта, утвержденного Министерством труда и
              социальной защиты Российской Федерации
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ProgramDevelopedStandard
