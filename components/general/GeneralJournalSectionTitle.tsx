import stls from '@/styles/components/general/GeneralJournalSectionTitle.module.sass'
import { TypeClassNames, TypeChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeGeneralJournalSectionTitleProps = TypeClassNames & TypeChildren

const GeneralJournalSectionTitle = ({
  classNames,
  children
}: TypeGeneralJournalSectionTitleProps) => {
  return (
    <h2
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </h2>
  )
}

export default GeneralJournalSectionTitle
