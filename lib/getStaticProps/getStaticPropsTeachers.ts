import { GetStaticPropsContext } from 'next'
import {
  TypePageTeachersProps,
  TypePageTeachersPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import { createBlended } from '@/helpers/index'

const getStaticPropsTeachers = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePageTeachersProps
  revalidate: number
}> => {
  const res = await apolloClient.query<TypePageTeachersPropsQuery>({
    query: gql`
      query GetStaticPropsTeachers {
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
        teachers {
          name
          description
          slug
          portrait {
            width
            height
            url
          }
          descriptionItems {
            item
          }
        }
      }
    `
  })

  return {
    props: {
      ...(res?.data || null),
      programs: createBlended(res?.data?.programs)
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsTeachers
