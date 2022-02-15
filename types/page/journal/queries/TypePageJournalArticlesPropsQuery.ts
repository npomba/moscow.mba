import {
  TypeLibJournalCategories,
  TypeLibJournalTags,
  TypeLibJournalArticles
} from '@/types/index'

type TypePageJournalArticlesPropsQuery = {
  readonly journalCategories: TypeLibJournalCategories | null
  readonly journalTags: TypeLibJournalTags | null
  readonly journalArticles: TypeLibJournalArticles | null
}

export default TypePageJournalArticlesPropsQuery
