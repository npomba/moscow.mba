import stls from '@/styles/components/layout/ContentJournalArticle.module.sass'
import { TypeChildren, TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeContentJournalArticleProps = TypeClassNames & TypeChildren

const ContentJournalArticle = ({
  classNames,
  children
}: TypeContentJournalArticleProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </div>
  )
}

export default ContentJournalArticle
