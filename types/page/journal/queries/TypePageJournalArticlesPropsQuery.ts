import {
  TypeLibJournalCategories,
  TypeLibJournalTags,
  TypeLibJournalArticles,
  TypeLibPrograms
} from '@/types/index'

type TypePageJournalArticlesPropsQuery = {
  readonly programs: TypeLibPrograms | null
  readonly journalCategories: TypeLibJournalCategories | null
  readonly journalTags: TypeLibJournalTags | null
  readonly journalArticles: TypeLibJournalArticles | null
}

export default TypePageJournalArticlesPropsQuery
