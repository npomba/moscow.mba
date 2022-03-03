import {
  TypePageJournalTagPaths,
  TypePageJournalTagPathsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { fallback } from '@/config/index'

const getStaticPathsPageJournalCategoryTag = async (): Promise<{
  paths: TypePageJournalTagPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageJournalTagPathsQuery>({
    query: gql`
      query GetStaticPathsPageJournalCategoryTag {
        journalArticles {
          journal_category {
            slug
          }
          journal_tag {
            slug
          }
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
            journalTag: article?.journal_tag?.slug || 'journalTag'
          }
        }))
      )
    ) || [
      {
        params: { journalCategory: 'journalCategory', journalTag: 'journalTag' }
      }
    ],
    fallback: fallback.default
  }
}

export default getStaticPathsPageJournalCategoryTag
