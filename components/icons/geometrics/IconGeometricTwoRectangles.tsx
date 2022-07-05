import stls from '@/styles/components/icons/geometrics/IconGeometricTwoRectangles.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

type TypeIconGeometricTwoRectanglesProps = TypeClassNames & {
  color1?: TypeColor
  color2?: TypeColor
}

const IconGeometricTwoRectangles = ({
  classNames,
  color1,
  color2
}: TypeIconGeometricTwoRectanglesProps) => {
  return (
    <IconContainer
      classNames={[
        cn(stls.container, getClassNames({ classNames })) || undefined
      ]}
      ariaHidden='true'>
      <svg viewBox='0 0 190 190' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_1_1065)'>
          <rect width='190' height='190' fill={color1 || colors.gamma} />
          <rect
            x='35'
            y='-44'
            width='120'
            height='120'
            stroke={color2 || colors.psi}
            strokeWidth='2'
          />
          <rect
            x='35'
            y='94'
            width='120'
            height='120'
            stroke={color2 || colors.psi}
            strokeWidth='2'
          />
        </g>
        <defs>
          <clipPath id='clip0_1_1065'>
            <rect width='190' height='190' fill={color2 || colors.psi} />
          </clipPath>
        </defs>
      </svg>
    </IconContainer>
  )
}

export default IconGeometricTwoRectangles
