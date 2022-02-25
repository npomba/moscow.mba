import { GetStaticPropsContext } from 'next'
import {
  TypePageHomeProps,
  TypeRoutesFront,
  TypePageJournalArticlesProps,
  TypePageJournalArticleProps
} from '@/types/index'
import { routesFront, revalidate } from '@/config/index'
import {
  getStaticPropsDefault,
  // getStaticPropsPageHome,
  getStaticPropsPageJournalArticles,
  getStaticPropsPageJournalArticle
} from '@/lib/index'

type TypeHandleGetStaticPropsProps = {
  page?: TypeRoutesFront[keyof TypeRoutesFront]
  context: GetStaticPropsContext
}

const handleGetStaticProps = async ({
  page,
  context
}: TypeHandleGetStaticPropsProps): Promise<{
  props:
    | TypePageHomeProps
    | TypePageJournalArticlesProps
    | TypePageJournalArticleProps
    | null
  revalidate: number
}> => {
  switch (page) {
    // case routesFront.home:
    //   return await getStaticPropsPageHome({ context })

    case routesFront.journal:
      return await getStaticPropsPageJournalArticles({ context })

    case routesFront.journalCategoryTagArticle:
      return await getStaticPropsPageJournalArticle({ context })

    default:
      return await getStaticPropsDefault({ context })
  }
}

export default handleGetStaticProps
