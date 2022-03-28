import { GetStaticPropsContext } from 'next'
import {
  TypePageJournalArticlesProps,
  TypePageJournalArticlesPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import { createBlended } from '@/helpers/index'

const getStaticPropsPageJournalArticles = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePageJournalArticlesProps
  revalidate: number | boolean
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
        programs: products {
          _id
          id
          title
          slug
          studyFormat
          category {
            type
            slug
          }
          study_field {
            id
            name
            slug
            description
          }
        }
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
      ...res?.data,
      programs: createBlended(res?.data?.programs),
      gspContextParamsJournalCategory,
      gspContextParamsJournalCategoryTag,
      gspContextParamsJournalCategoryTagArticle
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageJournalArticles
