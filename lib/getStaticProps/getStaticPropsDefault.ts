import { GetStaticPropsContext } from 'next'
import { TypePageDefaultProps, TypePageDefaultPropsQuery } from '@/types/index'
import axios from 'axios'
// import { gql } from '@apollo/client'
// import apolloClient from '@/lib/apolloClient'
import { routesBack, revalidate } from '@/config/index'

const getStaticPropsDefault = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePageDefaultProps
  revalidate: number | boolean
}> => {
  const res = await axios.get(
    `${routesBack.root}${routesBack.getStaticPropsDefault}`
  )
  // const res = await apolloClient.query<TypePageDefaultPropsQuery>({
  //   query: gql`
  //     query GetStaticPropsDefault {
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
  //     }
  //   `
  // })

  return {
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsDefault
