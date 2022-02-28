import { GetStaticPropsContext } from 'next'
import {
  TypePageProgramsProps,
  TypePageProgramsPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'
import { createBlended } from '@/helpers/index'

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
    props: {
      ...res?.data,
      programs: createBlended(res?.data?.programs)
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPrograms
