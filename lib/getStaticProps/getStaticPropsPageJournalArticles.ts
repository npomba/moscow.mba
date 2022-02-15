import { GetStaticPropsContext } from 'next'
import {
  TypePageJournalArticlesProps,
  TypePageJournalArticlesPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageJournalArticles = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePageJournalArticlesProps
  revalidate: number
}> => {
  const gspContextParamsJournalCategory =
    context?.params?.journalCategory?.toString() || null
  const gspContextParamsJournalCategoryTag =
    context?.params?.journalTag?.toString() || null
  const gspContextParamsJournalCategoryTagArticle =
    context?.params?.journalArticle?.toString() || null

  const res = await apolloClient.query<TypePageJournalArticlesPropsQuery>({
    query: gql`
      query GetStaticPropsPageJournalArticles {
        journalCategories {
          title
          slug
        }
        journalTags {
          title
          slug
        }
        journalArticles {
          title
          slug
          journal_tag {
            title
            slug
          }
          journal_category {
            title
            slug
          }
          picture {
            url
            width
            height
          }
          shortDescription
          createdAt
        }
      }
    `
  })

  return {
    props: {
      ...res.data,
      gspContextParamsJournalCategory,
      gspContextParamsJournalCategoryTag,
      gspContextParamsJournalCategoryTagArticle
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageJournalArticles
