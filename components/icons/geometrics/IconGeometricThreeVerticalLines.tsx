import stls from '@/styles/components/icons/geometrics/IconGeometricThreeVerticalLines.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

type TypeIconGeometricThreeVerticalLinesProps = TypeClassNames & {
  color1?: TypeColor
  color2?: TypeColor
}

const IconGeometricThreeVerticalLines = ({
  classNames,
  color1,
  color2
}: TypeIconGeometricThreeVerticalLinesProps) => {
  return (
    <IconContainer
      classNames={[
        cn(stls.container, getClassNames({ classNames })) || undefined
      ]}
      ariaHidden='true'>
      <svg viewBox='0 0 190 190' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='190' height='190' fill={color1 || colors.zeta} />
        <path
          d='M57 190L57 111'
          stroke={color2 || colors.psi}
          strokeWidth='2'
        />
        <path
          d='M94.8555 190L94.8555 80'
          stroke={color2 || colors.psi}
          strokeWidth='2'
        />
        <path
          d='M132.51 190L132.51 43'
          stroke={color2 || colors.psi}
          strokeWidth='2'
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeometricThreeVerticalLines
