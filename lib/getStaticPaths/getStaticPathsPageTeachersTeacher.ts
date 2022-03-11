import {
  TypePageTeachersTeacherPaths,
  TypePageTeachersTeacherPathsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { fallback } from '@/config/index'

const getStaticPathsPageTeachersTeacher = async (): Promise<{
  paths: TypePageTeachersTeacherPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageTeachersTeacherPathsQuery>({
    query: gql`
      query GetStaticPathsPageTeachersTeacher {
        teachers {
          slug
        }
      }
    `
  })

  return {
    paths: Array.from(
      new Set(
        res.data?.teachers?.map(teacher => ({
          params: {
            teacher: teacher?.slug || 'teacher'
          }
        }))
      )
    ) || [{ params: { teacher: 'teacher' } }],
    fallback: fallback.default
  }
}

export default getStaticPathsPageTeachersTeacher
