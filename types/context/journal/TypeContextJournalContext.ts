import {
  TypeContextJournalState,
  TypeLibJournalCategories,
  TypeLibJournalTags,
  TypeLibJournalArticles,
  TypeLibJournalArticle
} from '@/types/index'

type TypeContextJournalContext = TypeContextJournalState & {
  setJournalCategories: (
    journalCategories: TypeLibJournalCategories | null
  ) => void
  setJournalTags: (journalTags: TypeLibJournalTags | null) => void
  setJournalArticles: (journalArticles: TypeLibJournalArticles | null) => void
  setJournalArticlesArticle: (
    journalArticlesArticle: TypeLibJournalArticle | null
  ) => void
  setGSPContextParamsJournalCategory: (
    gspContextParamsJournalCategory: string | null
  ) => void
  setGSPContextParamsJournalCategoryTag: (
    gspContextParamsJournalCategoryTag: string | null
  ) => void
  setGSPContextParamsJournalCategoryTagArticle: (
    gspContextParamsJournalCategoryTagArticle: string | null
  ) => void
}

export default TypeContextJournalContext
