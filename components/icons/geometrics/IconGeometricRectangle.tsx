import stls from '@/styles/components/icons/geometrics/IconGeometricRectangle.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconGeometricRectangleProps = TypeClassNames

const IconGeometricRectangle = ({
  classNames
}: TypeIconGeometricRectangleProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 190 190' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='190' height='190' fill={colors.eta} />
        <rect
          x='34'
          y='35'
          width='121'
          height='121'
          stroke={colors.psi}
          strokeWidth='2'
        />
      </svg>
    </div>
  )
}

export default IconGeometricRectangle
