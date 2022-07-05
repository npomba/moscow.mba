import stls from '@/styles/components/icons/geometrics/IconGeometricThreeHorizontalLines.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

type TypeIconGeometricThreeHorizontalLinesProps = TypeClassNames & {
  color1?: TypeColor
  color2?: TypeColor
}

const IconGeometricThreeHorizontalLines = ({
  classNames,
  color1,
  color2
}: TypeIconGeometricThreeHorizontalLinesProps) => {
  return (
    <IconContainer
      classNames={[
        cn(stls.container, getClassNames({ classNames })) || undefined
      ]}
      ariaHidden='true'>
      <svg viewBox='0 0 190 190' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='190' height='190' fill={color1 || colors.delta} />
        <path d='M0 56L79 56' stroke={color2 || colors.psi} strokeWidth='2' />
        <path d='M0 95L110 95' stroke={color2 || colors.psi} strokeWidth='2' />
        <path
          d='M0 134L147 134'
          stroke={color2 || colors.psi}
          strokeWidth='2'
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeometricThreeHorizontalLines
