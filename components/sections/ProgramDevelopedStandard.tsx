import stls from '@/styles/components/sections/ProgramDevelopedStandard.module.sass'
import React from 'react'
import IconEmblem from '@/components/icons/IconEmblem'


const ProgramDevelopedStandard: React.FC = () => {

  return (
    <div className={stls.container}>
      <div className={stls.icon}>
        <IconEmblem/>
      </div>
      <div className={stls.content}>
        <div className={stls.title}>
          <p>Программа разработана по профстандарту</p>
        </div>
        <div className={stls.text}>
          <p>
            Программа разработана с учетом требований соответствующего профессионального стандарта, утвержденного
            Министерством труда и социальной защиты Российской Федерации
          </p>
        </div>
      </div>
    </div>
  )
}


export default ProgramDevelopedStandard