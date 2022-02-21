import stls from '@/styles/components/icons/geometrics/IconGeometricThreeVerticalLines.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconGeometricThreeVerticalLinesProps = TypeClassNames

const IconGeometricThreeVerticalLines = ({
  classNames
}: TypeIconGeometricThreeVerticalLinesProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 190 190' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='190' height='190' fill={colors.zeta} />
        <path d='M57 190L57 111' stroke={colors.psi} strokeWidth='2' />
        <path d='M94.8555 190L94.8555 80' stroke={colors.psi} strokeWidth='2' />
        <path d='M132.51 190L132.51 43' stroke={colors.psi} strokeWidth='2' />
      </svg>
    </div>
  )
}

export default IconGeometricThreeVerticalLines
