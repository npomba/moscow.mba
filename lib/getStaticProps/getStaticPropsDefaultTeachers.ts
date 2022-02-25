import { GetStaticPropsContext } from 'next'
import {
  TypePageDefaultTeachersProps,
  TypePageDefaultTeachersPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'
import { createBlended } from '@/helpers/index'

const getStaticPropsDefaultTeachers = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePageDefaultTeachersProps
  revalidate: number
}> => {
  const res = await apolloClient.query<TypePageDefaultTeachersPropsQuery>({
    query: gql`
      query GetStaticPropsDefaultTeachers {
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
      ...res?.data,
      programs: createBlended(res?.data?.programs)
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsDefaultTeachers
