import {
  TypeRoutesFront,
  TypePageProgramPaths,
  TypePageTeachersTeacherPaths,
  TypePageJournalCategoryPaths,
  TypePageJournalTagPaths,
  TypePageJournalArticlePaths
} from '@/types/index'
import { routesFront, fallback } from '@/config/index'
import {
  getStaticPathsPageProgram,
  getStaticPathsPageTeachersTeacher,
  getStaticPathsPageJournalCategory,
  getStaticPathsPageJournalCategoryTag,
  getStaticPathsPageJournalCategoryTagArticle
} from '@/lib/index'

type TypeHandleGetStaticPathsProps = {
  page: TypeRoutesFront[keyof TypeRoutesFront]
  format?: string
  type?: string
}

const handleGetStaticPaths = async ({
  page,
  format,
  type
}: TypeHandleGetStaticPathsProps): Promise<{
  paths:
    | TypePageProgramPaths
    | TypePageTeachersTeacherPaths
    | TypePageJournalCategoryPaths
    | TypePageJournalTagPaths
    | TypePageJournalArticlePaths
    | []
  fallback: boolean | 'blocking'
}> => {
  try {
    switch (page) {
      case routesFront.program:
        return await getStaticPathsPageProgram({ format, type })

      case routesFront.teachersTeacher:
        return await getStaticPathsPageTeachersTeacher()

      case routesFront.journalCategory:
        return await getStaticPathsPageJournalCategory()

      case routesFront.journalCategoryTag:
        return await getStaticPathsPageJournalCategoryTag()

      case routesFront.journalCategoryTagArticle:
        return await getStaticPathsPageJournalCategoryTagArticle()

      default:
        return {
          paths: [],
          fallback: fallback.default
        }
    }
  } catch (err) {
    console.log(err)
    return {
      paths: [],
      fallback: fallback.default
    }
  }
}

export default handleGetStaticPaths
