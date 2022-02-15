import stls from '@/styles/components/icons/geometrics/IconGeometricRightAngle.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconGeometricRightAngleProps = TypeClassNames

const IconGeometricRightAngle = ({
  classNames
}: TypeIconGeometricRightAngleProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 190 190' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='190' height='190' fill={colors.alpha} />
        <path d='M65 190V78.2353H125V0' stroke={colors.psi} strokeWidth='2' />
      </svg>
    </div>
  )
}

export default IconGeometricRightAngle
