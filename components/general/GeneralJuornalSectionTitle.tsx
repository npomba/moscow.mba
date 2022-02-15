import stls from '@/styles/components/general/GeneralJuornalSectionTitle.module.sass'
import { TypeClassNames, TypeChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeGeneralJuornalSectionTitleProps = TypeClassNames & TypeChildren

const GeneralJuornalSectionTitle = ({
  classNames,
  children
}: TypeGeneralJuornalSectionTitleProps) => {
  return (
    <h2
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </h2>
  )
}

export default GeneralJuornalSectionTitle
