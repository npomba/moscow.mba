import {
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

type contextJournalReducerState = TypeContextJournalState

type contextJournalReducerAction = {
  // TODO: find a better way to asign type for payload
  payload: any
  type:
    | typeof SET_JOURNAL_CATEGORIES
    | typeof SET_JOURNAL_TAGS
    | typeof SET_JOURNAL_ARTICLES
    | typeof SET_JOURNAL_ARTICLES_ARTICLE
    | typeof SET_GSP_CONTEXT_PARAMS_JOURNAL_CATEGORY
    | typeof SET_GSP_CONTEXT_PARAMS_JOURNAL_CATEGORY_TAG
    | typeof SET_GSP_CONTEXT_PARAMS_JOURNAL_CATEGORY_TAG_ARTICLE
}

const contextJournalReducer = (
  state: contextJournalReducerState,
  action: contextJournalReducerAction
) => {
  switch (action.type) {
    case SET_JOURNAL_CATEGORIES:
      return {
        ...state,
        journalCategories: action.payload || null
      }
    case SET_JOURNAL_TAGS:
      return {
        ...state,
        journalTags: action.payload || null
      }
    case SET_JOURNAL_ARTICLES:
      return {
        ...state,
        journalArticles: action.payload || null
      }
    case SET_JOURNAL_ARTICLES_ARTICLE:
      return {
        ...state,
        journalArticlesArticle: action.payload || null
      }
    case SET_GSP_CONTEXT_PARAMS_JOURNAL_CATEGORY:
      return {
        ...state,
        gspContextParamsJournalCategory: action.payload || null
      }
    case SET_GSP_CONTEXT_PARAMS_JOURNAL_CATEGORY_TAG:
      return {
        ...state,
        gspContextParamsJournalCategoryTag: action.payload || null
      }
    case SET_GSP_CONTEXT_PARAMS_JOURNAL_CATEGORY_TAG_ARTICLE:
      return {
        ...state,
        gspContextParamsJournalCategoryTagArticle: action.payload || null
      }
    default:
      return state
  }
}

export default contextJournalReducer
