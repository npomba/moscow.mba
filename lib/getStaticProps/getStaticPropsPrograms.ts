import { GetStaticPropsContext } from 'next'
import {
  TypePageProgramsProps,
  TypePageProgramsPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPrograms = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePageProgramsProps
  revalidate: number
}> => {
  const res = await apolloClient.query<TypePageProgramsPropsQuery>({
    query: gql`
      query GetStaticPropsPrograms {
        programs: products {
          _id
          id
          title
          slug
          studyFormat
          price
          duration {
            minStudyMonths
          }
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
      }
    `
  })

  return {
    props: res?.data || null,
    revalidate: revalidate.default
  }
}

export default getStaticPropsPrograms
