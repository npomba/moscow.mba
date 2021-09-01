import stls from '@/styles/components/general/ProgramsModule.module.sass'
import classNames from 'classnames'
import { useState } from 'react'

const ProgramsModule = ({
  title = 'Модуль',
  subTitle = '',
  items,
  fadeOutEffect = false
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={stls.container}>
      <div
        className={classNames(stls.module, { [stls.opened]: isOpen })}
        onClick={() => setIsOpen(prevState => !prevState)}>
        <div className={stls.plus}>
          <i></i>
          <i></i>
        </div>
        {title}
      </div>
      <div
        className={classNames(stls.content, {
          [stls.show]: isOpen,
          [stls.fadeOutEffect]: fadeOutEffect
        })}>
        {subTitle && <h4 className={stls.title}>{subTitle}</h4>}
        <ul className={stls.list}>
          {items &&
            items.map((item, idx) => (
              <li key={idx} className={stls.listItem}>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default ProgramsModule
