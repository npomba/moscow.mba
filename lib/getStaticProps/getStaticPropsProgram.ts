import { GetStaticPropsContext } from 'next'
import { TypePageProgramProps, TypePageProgramPropsQuery } from '@/types/index'
// import { gql } from '@apollo/client'
// import apolloClient from '@/lib/apolloClient'
import axios from 'axios'
import { routesBack, revalidate } from '@/config/index'

const getStaticPropsProgram = async ({
  context,
  format,
  type,
  slug
}: {
  context: GetStaticPropsContext
  format?: string | null
  type?: string | null
  slug?: string | null
}): Promise<{
  props: TypePageProgramProps
  revalidate: number | boolean
}> => {
  const res = await axios.get(
    `${routesBack.root}${routesBack.getStaticPropsPrograms}/${type || 'mini'}/${
      slug || context.params?.slug || 'program'
    }`
  )
  // const res = await apolloClient.query<TypePageProgramPropsQuery>({
  //   query: gql`
  // query GetStaticPropsProgram($type: String!, $slug: String!) {
  //   programs: products {
  //     _id
  //     id
  //     title
  //     slug
  //     studyFormat
  //     category {
  //       type
  //       slug
  //     }
  //     study_field {
  //       id
  //       name
  //       slug
  //       description
  //     }
  //   }
  //   program: products(where: { category: { type: $type }, slug: $slug }) {
  //     _id
  //     id
  //     title
  //     slug
  //     studyFormat
  //     category {
  //       type
  //       slug
  //     }
  //     study_field {
  //       id
  //       name
  //       slug
  //       description
  //     }
  //     picture {
  //       url
  //       width
  //       height
  //     }
  //     whatWillYouLearn {
  //       string
  //     }
  //     specializedSubjects {
  //       string
  //       title
  //     }
  //     goal
  //     description
  //     duration {
  //       studyHours
  //       minStudyMonths
  //     }
  //     price
  //     discount
  //     baseSubjects {
  //       string
  //       title
  //     }
  //     subjectsStickerType
  //     programModulesCounters {
  //       leftCounter
  //       rightCounter
  //     }
  //     diplomas {
  //       diploma {
  //         url
  //         width
  //         height
  //       }
  //       name
  //     }
  //     whoIsFor {
  //       name
  //       description
  //     }
  //     specializedSubjectsAddons {
  //       Practice
  //       OfflineModule
  //       diplomaProtection
  //     }
  //     teachers {
  //       name
  //       description
  //       slug
  //       portrait {
  //         url
  //         width
  //         height
  //       }
  //       descriptionItems {
  //         item
  //       }
  //     }
  //     questions {
  //       question
  //       answer
  //     }
  //     reviews {
  //       picture {
  //         url
  //         width
  //         height
  //       }
  //       name
  //       desc
  //       story
  //     }
  //   }
  // }
  //   `,
  //   variables: {
  //     type: type || 'mini',
  //     slug: slug || context.params?.slug || 'program'
  //   }
  // })

  return {
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsProgram
