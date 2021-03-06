import { GetStaticPropsContext } from 'next'
import { TypePagePromoProps, TypePagePromoPropsQuery } from '@/types/index'
import axios from 'axios'
// import { gql } from '@apollo/client'
// import apolloClient from '@/lib/apolloClient'
import { routesBack, revalidate } from '@/config/index'

const getStaticPropsPagePromo = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePagePromoProps
  revalidate: number | boolean
}> => {
  const res = await axios.get(
    `${routesBack.root}${routesBack.programsGetStaticPropsPromo}`
  )
  // const res = await apolloClient.query<TypePagePromoPropsQuery>({
  //   query: gql`
  //     query GetStaticPropsPagePromo($type: String!) {
  //       programs: products(where: { category: { type: $type } }) {
  //         _id
  //         id
  //         title
  //         slug
  //         studyFormat
  //         whatWillYouLearn {
  //           string
  //         }
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
  //   `,
  //   variables: {
  //     type: 'mini'
  //   }
  // })

  return {
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsPagePromo
