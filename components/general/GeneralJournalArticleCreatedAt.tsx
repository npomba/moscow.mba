import stls from '@/styles/components/general/GeneralJournalArticleCreatedAt.module.sass'
import { TypeClassNames, TypeChildren } from '@/types/index'
import cn from 'classnames'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { getClassNames } from '@/helpers/index'

type TypeGeneralJournalArticleCreatedAtProps = TypeClassNames & {
  createdAt: string | null
  formatString?: string
}

const GeneralJournalArticleCreatedAt = ({
  classNames,
  createdAt,
  formatString
}: TypeGeneralJournalArticleCreatedAtProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {format(new Date(createdAt), formatString || 'dd LLL', {
        locale: ru
      })}
    </div>
  )
}

export default GeneralJournalArticleCreatedAt
