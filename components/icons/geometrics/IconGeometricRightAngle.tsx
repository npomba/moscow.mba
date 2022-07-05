import stls from '@/styles/components/icons/geometrics/IconGeometricRightAngle.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

type TypeIconGeometricRightAngleProps = TypeClassNames & {
  color1?: TypeColor
  color2?: TypeColor
}

const IconGeometricRightAngle = ({
  classNames,
  color1,
  color2
}: TypeIconGeometricRightAngleProps) => {
  return (
    <IconContainer
      classNames={[
        cn(stls.container, getClassNames({ classNames })) || undefined
      ]}
      ariaHidden='true'>
      <svg viewBox='0 0 190 190' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='190' height='190' fill={color1 || colors.alpha} />
        <path
          d='M65 190V78.2353H125V0'
          stroke={color2 || colors.psi}
          strokeWidth='2'
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeometricRightAngle
