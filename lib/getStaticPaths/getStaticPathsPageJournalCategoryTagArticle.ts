import {
  TypePageJournalArticlePaths,
  TypePageJournalArticlePathsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { fallback } from '@/config/index'

const getStaticPathsPageJournalCategoryTagArticle = async (): Promise<{
  paths: TypePageJournalArticlePaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageJournalArticlePathsQuery>({
    query: gql`
      query getStaticPathsPageJournalCategoryTagArticle {
        journalArticles {
          journal_category {
            slug
          }
          journal_tag {
            slug
          }
          slug
        }
      }
    `
  })

  return {
    paths: Array.from(
      new Set(
        res.data?.journalArticles?.map(article => ({
          params: {
            journalCategory:
              article?.journal_category?.slug || 'journalCategory',
            journalTag: article?.journal_tag?.slug || 'journalTag',
            journalArticle: article?.slug || 'journalArticle'
          }
        }))
      )
    ) || [
      {
        params: {
          journalCategory: 'journalCategory',
          journalTag: 'journalTag',
          journalArticle: 'journalArticle'
        }
      }
    ],
    fallback: fallback.default
  }
}

export default getStaticPathsPageJournalCategoryTagArticle
