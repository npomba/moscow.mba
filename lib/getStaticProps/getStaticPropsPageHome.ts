import { GetStaticPropsContext } from 'next'
import { TypePageHomeProps, TypePageHomePropsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'
import { createBlended } from '@/helpers/index'

const getStaticPropsPageHome = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePageHomeProps
  revalidate: number
}> => {
  const res = await apolloClient.query<TypePageHomePropsQuery>({
    query: gql`
      query GetStaticPropsPageHome {
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

export default getStaticPropsPageHome
