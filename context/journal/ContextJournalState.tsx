import {
  TypeChildren,
  TypeContextJournalState,
  TypeLibJournalCategories,
  TypeLibJournalTags,
  TypeLibJournalArticles,
  TypeLibJournalArticle
} from '@/types/index'
import {
  SET_JOURNAL_CATEGORIES,
  SET_JOURNAL_TAGS,
  SET_JOURNAL_ARTICLES,
  SET_JOURNAL_ARTICLES_ARTICLE,
  SET_GSP_CONTEXT_PARAMS_JOURNAL_CATEGORY,
  SET_GSP_CONTEXT_PARAMS_JOURNAL_CATEGORY_TAG,
  SET_GSP_CONTEXT_PARAMS_JOURNAL_CATEGORY_TAG_ARTICLE
} from '@/context/types'
import { useReducer } from 'react'
import { contextJournalReducer, ContextJournalContext } from '@/context/index'

type TypeContextJournalStateProps = TypeChildren

const ContextJournalState = ({ children }: TypeContextJournalStateProps) => {
  const initialState: TypeContextJournalState = {
    journalCategories: null,
    journalTags: null,
    journalArticles: null,
    journalArticlesArticle: null,
    gspContextParamsJournalCategory: null,
    gspContextParamsJournalCategoryTag: null,
    gspContextParamsJournalCategoryTagArticle: null
  }

  const [state, dispatch] = useReducer(contextJournalReducer, initialState)

  const setJournalCategories = (
    journalCategories: TypeLibJournalCategories | null
  ) => {
    dispatch({ type: SET_JOURNAL_CATEGORIES, payload: journalCategories })
  }

  const setJournalTags = (journalTags: TypeLibJournalTags | null) => {
    dispatch({ type: SET_JOURNAL_TAGS, payload: journalTags })
  }
  const setJournalArticles = (
    journalArticles: TypeLibJournalArticles | null
  ) => {
    dispatch({ type: SET_JOURNAL_ARTICLES, payload: journalArticles })
  }
  const setJournalArticlesArticle = (
    journalArticlesArticle: TypeLibJournalArticle | null
  ) => {
    dispatch({
      type: SET_JOURNAL_ARTICLES_ARTICLE,
      payload: journalArticlesArticle
    })
  }
  const setGSPContextParamsJournalCategory = (
    gspContextParamsJournalCategory: string | null
  ) => {
    dispatch({
      type: SET_GSP_CONTEXT_PARAMS_JOURNAL_CATEGORY,
      payload: gspContextParamsJournalCategory
    })
  }
  const setGSPContextParamsJournalCategoryTag = (
    gspContextParamsJournalCategoryTag: string | null
  ) => {
    dispatch({
      type: SET_GSP_CONTEXT_PARAMS_JOURNAL_CATEGORY_TAG,
      payload: gspContextParamsJournalCategoryTag
    })
  }
  const setGSPContextParamsJournalCategoryTagArticle = (
    gspContextParamsJournalCategoryTagArticle: string | null
  ) => {
    dispatch({
      type: SET_GSP_CONTEXT_PARAMS_JOURNAL_CATEGORY_TAG_ARTICLE,
      payload: gspContextParamsJournalCategoryTagArticle
    })
  }

  return (
    <ContextJournalContext.Provider
      value={{
        journalCategories: state.journalCategories,
        journalTags: state.journalTags,
        journalArticles: state.journalArticles,
        journalArticlesArticle: state.journalArticlesArticle,
        gspContextParamsJournalCategory: state.gspContextParamsJournalCategory,
        gspContextParamsJournalCategoryTag:
          state.gspContextParamsJournalCategoryTag,
        gspContextParamsJournalCategoryTagArticle:
          state.gspContextParamsJournalCategoryTagArticle,
        setJournalCategories,
        setJournalTags,
        setJournalArticles,
        setJournalArticlesArticle,
        setGSPContextParamsJournalCategory,
        setGSPContextParamsJournalCategoryTag,
        setGSPContextParamsJournalCategoryTagArticle
      }}>
      {children}
    </ContextJournalContext.Provider>
  )
}

export default ContextJournalState
