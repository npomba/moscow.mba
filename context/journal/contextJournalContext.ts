import { TypeContextJournalContext } from '@/types/index'
import { createContext } from 'react'

const contextJournalContext = createContext<TypeContextJournalContext>({
  journalCategories: null,
  journalTags: null,
  journalArticles: null,
  journalArticlesArticle: null,
  gspContextParamsJournalCategory: null,
  gspContextParamsJournalCategoryTag: null,
  gspContextParamsJournalCategoryTagArticle: null,
  setJournalCategories: () => {},
  setJournalTags: () => {},
  setJournalArticles: () => {},
  setJournalArticlesArticle: () => {},
  setGSPContextParamsJournalCategory: () => {},
  setGSPContextParamsJournalCategoryTag: () => {},
  setGSPContextParamsJournalCategoryTagArticle: () => {}
})

export default contextJournalContext
