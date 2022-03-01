import { GetStaticPropsContext } from 'next'
import { TypePagePromoProps, TypePagePromoPropsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'
import { createBlended } from '@/helpers/index'

const getStaticPropsPagePromo = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePagePromoProps
  revalidate: number
}> => {
  const res = await apolloClient.query<TypePagePromoPropsQuery>({
    query: gql`
      query GetStaticPropsPagePromo($type: String!) {
        programs: products(where: { category: { type: $type } }) {
          _id
          id
          title
          slug
          studyFormat
          whatWillYouLearn {
            string
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
    `,
    variables: {
      type: 'mini'
    }
  })

  return {
    props: {
      ...res?.data
      // programs: createBlended(res?.data?.programs)
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPagePromo