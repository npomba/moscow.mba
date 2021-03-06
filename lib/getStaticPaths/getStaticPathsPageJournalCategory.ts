import {
  TypePageJournalCategoryPaths,
  TypePageJournalCategoryPathsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { fallback } from '@/config/index'

const getStaticPathsPageJournalCategory = async (): Promise<{
  paths: TypePageJournalCategoryPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageJournalCategoryPathsQuery>({
    query: gql`
      query GetStaticPathsPageJournalCategory {
        journalArticles {
          journal_category {
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
              article?.journal_category?.slug || 'journalCategory'
          }
        }))
      )
    ) || [{ params: { journalCategory: 'journalCategory' } }],
    fallback: fallback.default
  }
}

export default getStaticPathsPageJournalCategory
