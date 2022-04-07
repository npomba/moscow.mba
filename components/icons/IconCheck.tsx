import stls from '@/styles/components/icons/IconCheck.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeIconCheck = TypeClassNames & { stroke?: string }

const IconCheck = ({ stroke = '#fff', classNames }: TypeIconCheck) => {
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <svg viewBox='0 0 29 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Галочка</title>
        <path
          d='M1.47119 13.7571L7.98548 20.2714L27.5283 0.728516'
          stroke={stroke}
          strokeWidth='2'
        />
      </svg>
    </div>
  )
}

export default IconCheck
