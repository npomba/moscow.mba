import {
  TypeLibPrograms,
  TypeLibJournalCategories,
  TypeLibJournalTags,
  TypeLibJournalArticles,
  TypeLibJournalArticle
} from '@/types/index'

type TypePageJournalArticlePropsQuery = {
  readonly programs: TypeLibPrograms | null
  readonly journalCategories: TypeLibJournalCategories | null
  readonly journalTags: TypeLibJournalTags | null
  readonly journalArticles: TypeLibJournalArticles | null
  readonly journalArticlesArticle: TypeLibJournalArticle | null
}

export default TypePageJournalArticlePropsQuery
