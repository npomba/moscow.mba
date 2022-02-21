import stls from '@/styles/components/icons/geometrics/IconGeometricThreeHorizontalLines.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconGeometricThreeHorizontalLinesProps = TypeClassNames

const IconGeometricThreeHorizontalLines = ({
  classNames
}: TypeIconGeometricThreeHorizontalLinesProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 190 190' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='190' height='190' fill={colors.delta} />
        <path d='M0 56L79 56' stroke={colors.psi} strokeWidth='2' />
        <path d='M0 95L110 95' stroke={colors.psi} strokeWidth='2' />
        <path d='M0 134L147 134' stroke={colors.psi} strokeWidth='2' />
      </svg>
    </div>
  )
}

export default IconGeometricThreeHorizontalLines
