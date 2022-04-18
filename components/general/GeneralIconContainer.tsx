import stls from '@/styles/components/general/GeneralIconContainer.module.sass'
import { TypeClassNames, TypeChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TGeneralIconContainerProps = TypeClassNames & TypeChildren

const GeneralIconContainer = ({
  classNames,
  children
}: TGeneralIconContainerProps) => {
  return (
    <span
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </span>
  )
}

export default GeneralIconContainer
