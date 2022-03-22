import {
  TypeLibJournalCategories,
  TypeLibJournalTags,
  TypeLibJournalArticles,
  TypeLibJournalArticle,
  TypeLibPrograms
} from '@/types/index'
import { useContext, useEffect } from 'react'
import { ProgramsContext, ContextJournalContext } from '@/context/index'

type TypeUsePageHandleContextProps = {
  readonly programs: TypeLibPrograms
  readonly journalCategories?: TypeLibJournalCategories | null
  readonly journalTags?: TypeLibJournalTags | null
  readonly journalArticles?: TypeLibJournalArticles | null
  readonly journalArticlesArticle?: TypeLibJournalArticle | null
  readonly gspContextParamsJournalCategory?: string | null
  readonly gspContextParamsJournalCategoryTag?: string | null
  readonly gspContextParamsJournalCategoryTagArticle?: string | null
}

const usePageHandleContext = ({
  programs,
  journalCategories,
  journalTags,
  journalArticles,
  journalArticlesArticle,
  gspContextParamsJournalCategory,
  gspContextParamsJournalCategoryTag,
  gspContextParamsJournalCategoryTagArticle
}: TypeUsePageHandleContextProps) => {
  const { setPrograms } = useContext(ProgramsContext)

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
    setPrograms(programs || null)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    programs,
    journalCategories,
    journalTags,
    journalArticles,
    journalArticlesArticle,
    gspContextParamsJournalCategory,
    gspContextParamsJournalCategoryTag,
    gspContextParamsJournalCategoryTagArticle
  ])
}

export default usePageHandleContext
