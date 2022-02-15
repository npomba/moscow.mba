import {
  TypeLibJournalCategories,
  TypeLibJournalTags,
  TypeLibJournalArticles,
  TypeLibJournalArticle
} from '@/types/index'
import { ContextJournalContext } from '@/context/index'
import { useContext, useEffect } from 'react'

type TypeUsePageHandleContextProps = {
  readonly journalCategories: TypeLibJournalCategories | null
  readonly journalTags: TypeLibJournalTags | null
  readonly journalArticles: TypeLibJournalArticles | null
  readonly journalArticlesArticle?: TypeLibJournalArticle | null
  readonly gspContextParamsJournalCategory?: string | null
  readonly gspContextParamsJournalCategoryTag?: string | null
  readonly gspContextParamsJournalCategoryTagArticle?: string | null
}

const usePageHandleContext = ({
  journalCategories,
  journalTags,
  journalArticles,
  journalArticlesArticle,
  gspContextParamsJournalCategory,
  gspContextParamsJournalCategoryTag,
  gspContextParamsJournalCategoryTagArticle
}: TypeUsePageHandleContextProps) => {
  const {
    setJournalCategories,
    setJournalTags,
    setJournalArticles,
    setJournalArticlesArticle,
    setGSPContextParamsJournalCategory,
    setGSPContextParamsJournalCategoryTag,
    setGSPContextParamsJournalCategoryTagArticle
  } = useContext(ContextJournalContext)
  // const { setProgram } = useContext(ProgramContext)

  useEffect(() => {
    setJournalCategories(journalCategories || null)
    setJournalTags(journalTags || null)
    setJournalArticles(journalArticles || null)
    setJournalArticlesArticle(journalArticlesArticle || null)
    setGSPContextParamsJournalCategory(gspContextParamsJournalCategory || null)
    setGSPContextParamsJournalCategoryTag(
      gspContextParamsJournalCategoryTag || null
    )
    setGSPContextParamsJournalCategoryTagArticle(
      gspContextParamsJournalCategoryTagArticle || null
    )
  }, [journalCategories, journalTags, journalArticles, journalArticlesArticle])
}

export default usePageHandleContext
