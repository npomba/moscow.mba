import stls from '@/styles/components/sections/ProgramDevelopedStandard.module.sass'
import React from 'react'
import { IconEmblem } from '@/components/icons'
import WrapperComponent from '../layout/WrapperComponent'

const ProgramDevelopedStandard: React.FC = () => {
  return (
    <section className={stls.container}>
      <WrapperComponent classNames={[stls.wrapper]}>
        <IconEmblem classNames={stls.icon} />
        <div className={stls.content}>
          <div className={stls.title}>
            <p>Программа разработана по профстандарту</p>
          </div>
          <div className={stls.text}>
            <p>
              Программа разработана с учетом требований соответствующего
              профессионального стандарта, утвержденного Министерством труда и
              социальной защиты Российской Федерации
            </p>
          </div>
        </div>
      </WrapperComponent>
    </section>
  )
}

export default ProgramDevelopedStandard
