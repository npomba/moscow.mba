import {
  TypeLibJournalCategories,
  TypeLibJournalTags,
  TypeLibJournalArticles,
  TypeLibJournalArticle
} from '@/types/index'

type TypeContextJournalState = {
  journalCategories: TypeLibJournalCategories | null
  journalTags: TypeLibJournalTags | null
  journalArticles: TypeLibJournalArticles | null
  journalArticlesArticle: TypeLibJournalArticle | null
  gspContextParamsJournalCategory: string | null
  gspContextParamsJournalCategoryTag: string | null
  gspContextParamsJournalCategoryTagArticle: string | null
}

export default TypeContextJournalState
