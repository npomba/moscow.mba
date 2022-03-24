import { GetStaticPropsContext } from 'next'
import { TypePageTeacherProps, TypePageTeacherPropsQuery } from '@/types/index'
import axios from 'axios'
// import { gql } from '@apollo/client'
// import apolloClient from '@/lib/apolloClient'
import { routesBack, revalidate } from '@/config/index'

const getStaticPropsTeacher = async ({
  context
}: {
  context: GetStaticPropsContext
}): Promise<{
  props: TypePageTeacherProps
  revalidate: number
}> => {
  const res = await axios.get(
    `${routesBack.root}${routesBack.getStaticPropsTeachers}/${context?.params?.teacher}`
  )
  // const res = await apolloClient.query<TypePageTeacherPropsQuery>({
  //   query: gql`
  //     query GetStaticPropsTeacher($slug: String!) {
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
  //       teacher: teachers(where: { slug: $slug }) {
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
  //   `,
  //   variables: {
  //     slug: context?.params?.teacher || 'teacher'
  //   }
  // })

  return {
    // props: {
    //   ...res?.data,
    //   programs: createBlended(res?.data?.programs),
    //   teacher: res?.data.teacher?.[0] || null
    // },
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsTeacher
