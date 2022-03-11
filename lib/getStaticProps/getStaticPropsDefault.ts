import { GetStaticPropsContext } from 'next'
import { TypePageDefaultProps, TypePageDefaultPropsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import { createBlended } from '@/helpers/index'

const getStaticPropsDefault = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePageDefaultProps
  revalidate: number
}> => {
  const res = await apolloClient.query<TypePageDefaultPropsQuery>({
    query: gql`
      query GetStaticPropsDefault {
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

export default getStaticPropsDefault
