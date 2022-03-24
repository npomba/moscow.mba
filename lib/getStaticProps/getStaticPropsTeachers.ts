import { GetStaticPropsContext } from 'next'
import {
  TypePageTeachersProps,
  TypePageTeachersPropsQuery
} from '@/types/index'
import axios from 'axios'
// import { gql } from '@apollo/client'
// import apolloClient from '@/lib/apolloClient'
import { routesBack, revalidate } from '@/config/index'

const getStaticPropsTeachers = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePageTeachersProps
  revalidate: number
}> => {
  const res = await axios.get(
    `${routesBack.root}${routesBack.getStaticPropsTeachers}`
  )
  // const res = await apolloClient.query<TypePageTeachersPropsQuery>({
  //   query: gql`
  //     query GetStaticPropsTeachers {
  //       programs: products {
  //         _id
  //         id
  //         title
  //         slug
  //         studyFormat
  //         category {
  //           type
  //           slug
  //         }
  //         study_field {
  //           id
  //           name
  //           slug
  //           description
  //         }
  //       }
  //       teachers {
  //         name
  //         description
  //         slug
  //         portrait {
  //           width
  //           height
  //           url
  //         }
  //         descriptionItems {
  //           item
  //         }
  //       }
  //     }
  //   `
  // })

  return {
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsTeachers
