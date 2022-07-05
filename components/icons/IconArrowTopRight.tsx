import stls from '@/styles/components/icons/IconArrowTopRight.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

type TypeIconArrowTopRightProps = TypeClassNames & {
  color?: TypeColor
}

const IconArrowTopRight = ({
  classNames,
  color
}: TypeIconArrowTopRightProps) => {
  return (
    <IconContainer
      classNames={[
        cn(stls.container, getClassNames({ classNames })) || undefined
      ]}>
      <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <line
          x1='2.23926'
          y1='1.71973'
          x2='19.0578'
          y2='1.71973'
          stroke={color || colors.rho}
          strokeWidth='2'
        />
        <line
          x1='18.0576'
          y1='18.5771'
          x2='18.0576'
          y2='2.23912'
          stroke={color || colors.rho}
          strokeWidth='2'
        />
        <path
          d='M17.7609 2.23926L1.42285 18.5773'
          stroke={color || colors.rho}
          strokeWidth='2'
        />
      </svg>
    </IconContainer>
  )
}

export default IconArrowTopRight
