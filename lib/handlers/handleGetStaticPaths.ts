import {
  TypeRoutesFront,
  TypePageJournalCategoryPaths,
  TypePageJournalTagPaths,
  TypePageJournalArticlePaths
} from '@/types/index'
import { routesFront, routesBack, fallback } from '@/config/index'
import {
  getStaticPathsPageJournalCategory,
  getStaticPathsPageJournalCategoryTag,
  getStaticPathsPageJournalCategoryTagArticle
} from '@/lib/index'

type TypeHandleGetStaticPathsProps = {
  page: TypeRoutesFront[keyof TypeRoutesFront]
}

const handleGetStaticPaths = async ({
  page
}: TypeHandleGetStaticPathsProps): Promise<{
  paths:
    | TypePageJournalCategoryPaths
    | TypePageJournalTagPaths
    | TypePageJournalArticlePaths
    | []
  fallback: boolean | 'blocking'
}> => {
  switch (page) {
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
}

export default handleGetStaticPaths
