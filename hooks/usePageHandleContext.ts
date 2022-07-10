import {
  TypeLibJournalCategories,
  TypeLibJournalTags,
  TypeLibJournalArticles,
  TypeLibJournalArticle,
  TypeLibPrograms,
  TypeLibProgram
} from '@/types/index'
import { useContext, useEffect } from 'react'
import { ContextJournalContext, ContextStaticProps } from '@/context/index'

type TypeUsePageHandleContextProps = {
  readonly program?: TypeLibProgram
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
  program,
  programs,
  journalCategories,
  journalTags,
  journalArticles,
  journalArticlesArticle,
  gspContextParamsJournalCategory,
  gspContextParamsJournalCategoryTag,
  gspContextParamsJournalCategoryTagArticle
}: TypeUsePageHandleContextProps) => {
  const { setPrograms, setProgram } = useContext(ContextStaticProps)

  const {
    setJournalCategories,
    setJournalTags,
    setJournalArticles,
    setJournalArticlesArticle,
    setGSPContextParamsJournalCategory,
    setGSPContextParamsJournalCategoryTag,
    setGSPContextParamsJournalCategoryTagArticle
  } = useContext(ContextJournalContext)

  useEffect(() => {
    setPrograms(programs || [])
    setProgram(program || null)

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
    program,
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
