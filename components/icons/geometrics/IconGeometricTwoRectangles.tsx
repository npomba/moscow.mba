import stls from '@/styles/components/icons/geometrics/IconGeometricTwoRectangles.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconGeometricTwoRectanglesProps = TypeClassNames

const IconGeometricTwoRectangles = ({
  classNames
}: TypeIconGeometricTwoRectanglesProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 190 190' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_1_1065)'>
          <rect width='190' height='190' fill={colors.gamma} />
          <rect
            x='35'
            y='-44'
            width='120'
            height='120'
            stroke={colors.psi}
            strokeWidth='2'
          />
          <rect
            x='35'
            y='94'
            width='120'
            height='120'
            stroke={colors.psi}
            strokeWidth='2'
          />
        </g>
        <defs>
          <clipPath id='clip0_1_1065'>
            <rect width='190' height='190' fill={colors.psi} />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default IconGeometricTwoRectangles
