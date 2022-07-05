import stls from '@/styles/components/icons/geometrics/IconGeometricRectangle.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

type TypeIconGeometricRectangleProps = TypeClassNames & {
  color1?: TypeColor
  color2?: TypeColor
}

const IconGeometricRectangle = ({
  classNames,
  color1,
  color2
}: TypeIconGeometricRectangleProps) => {
  return (
    <IconContainer
      classNames={[
        cn(stls.container, getClassNames({ classNames })) || undefined
      ]}
      ariaHidden='true'>
      <svg viewBox='0 0 190 190' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='190' height='190' fill={color1 || colors.eta} />
        <rect
          x='34'
          y='35'
          width='121'
          height='121'
          stroke={color2 || colors.psi}
          strokeWidth='2'
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeometricRectangle
