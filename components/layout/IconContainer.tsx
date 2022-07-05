import stls from '@/styles/components/layout/IconContainer.module.sass'
import { TypeClassNames, TypeChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TIconContainerProps = TypeClassNames &
  TypeChildren & {
    ariaHidden?: 'true' | 'false' // TODO: figure out native types
  }

const IconContainer = ({
  classNames,
  children,
  ariaHidden
}: TIconContainerProps) => {
  return (
    <span
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={ariaHidden}>
      {children}
    </span>
  )
}

export default IconContainer
