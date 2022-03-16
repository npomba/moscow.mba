import { GetStaticPropsContext } from 'next'
import {
  TypePageJournalArticleProps,
  TypePageJournalArticlePropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageJournalArticle = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePageJournalArticleProps
  revalidate: number
}> => {
  const gspContextParamsJournalCategory =
    context?.params?.journalCategory?.toString() || null
  const gspContextParamsJournalCategoryTag =
    context?.params?.journalTag?.toString() || null
  const gspContextParamsJournalCategoryTagArticle =
    context?.params?.journalArticle?.toString() || null

  const res = await apolloClient.query<TypePageJournalArticlePropsQuery>({
    query: gql`
      query getStaticPropsPageJournalArticle(
        $gspContextParamsJournalCategory: String!
        $gspContextParamsJournalCategoryTag: String!
        $gspContextParamsJournalCategoryTagArticle: String!
      ) {
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
        journalArticles {
          title
          slug
          journal_tag {
            slug
            title
          }
          journal_category {
            slug
            title
          }
          picture {
            width
            height
            url
          }
          shortDescription
          createdAt
        }
        journalCategories {
          title
          slug
        }
        journalTags {
          title
          slug
        }
        journalArticlesArticle: journalArticles(
          where: {
            journal_category: { slug: $gspContextParamsJournalCategory }
            journal_tag: { slug: $gspContextParamsJournalCategoryTag }
            slug: $gspContextParamsJournalCategoryTagArticle
          }
        ) {
          title
          slug
          journal_category {
            title
            slug
          }
          journal_tag {
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
          articleBody {
            ... on ComponentJournalParagraph {
              paragraphBody {
                text
                isHighlighted
                isLarger
              }
            }
            ... on ComponentJournalTitle {
              titleBody {
                text
                isHighlighted
              }
            }
            ... on ComponentGeneralPicture {
              title
              picture {
                url
                width
                height
              }
            }
            ... on ComponentJournalEmphasis {
              emphasisBody
            }
            ... on ComponentJournalQuote {
              body
              authorName
              athorPosition
            }
            ... on ComponentJournalList {
              listItem {
                body
              }
            }
            ... on ComponentJournalConclusion {
              item {
                title
                body
              }
            }
            ... on ComponentJournalJournalRecommendedProgram {
              program {
                category {
                  slug
                  type
                  labelCases {
                    singular
                  }
                }
                title
                slug
                discount
                whatWillYouLearn {
                  title
                  string
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      gspContextParamsJournalCategory,
      gspContextParamsJournalCategoryTag,
      gspContextParamsJournalCategoryTagArticle
    }
  })

  return {
    props: {
      ...(res?.data || null),
      journalArticlesArticle: res?.data?.journalArticlesArticle?.[0] || null,
      gspContextParamsJournalCategory,
      gspContextParamsJournalCategoryTag,
      gspContextParamsJournalCategoryTagArticle
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageJournalArticle
