import { GetStaticPropsContext } from 'next'
import {
  TypeRoutesFront,
  TypePageJournalArticlesProps,
  TypePageJournalArticleProps
} from '@/types/index'
import { routesFront, revalidate } from '@/config/index'
import {
  getStaticPropsPageJournalArticles,
  getStaticPropsPageJournalArticle
} from '@/lib/index'

type TypeHandleGetStaticPropsProps = {
  page: TypeRoutesFront[keyof TypeRoutesFront]
  context: GetStaticPropsContext
}

const handleGetStaticProps = async ({
  page,
  context
}: TypeHandleGetStaticPropsProps): Promise<{
  props: TypePageJournalArticlesProps | TypePageJournalArticleProps | null
  revalidate: number
}> => {
  switch (page) {
    case routesFront.journal:
      return await getStaticPropsPageJournalArticles({ context })

    case routesFront.journalCategoryTagArticle:
      return await getStaticPropsPageJournalArticle({ context })

    default:
      return {
        props: null,
        revalidate: revalidate.default
      }
  }
}

export default handleGetStaticProps
