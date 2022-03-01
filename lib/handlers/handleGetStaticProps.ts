import { GetStaticPropsContext } from 'next'
import {
  TypePageHomeProps,
  TypeRoutesFront,
  TypePageJournalArticlesProps,
  TypePageJournalArticleProps
} from '@/types/index'
import { routesFront, revalidate } from '@/config/index'
import {
  getStaticPropsTeachers,
  getStaticPropsDefault,
  getStaticPropsPrograms,
  getStaticPropsPagePromo,
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
    case routesFront.journal:
      return await getStaticPropsPageJournalArticles({ context })

    case routesFront.journalCategoryTagArticle:
      return await getStaticPropsPageJournalArticle({ context })

    case routesFront.programs:
      return await getStaticPropsPrograms({ context })

    case routesFront.webinarsArchive:
      return await getStaticPropsDefault({ context })

    case routesFront.webinars:
      return await getStaticPropsDefault({ context })

    case routesFront.webinarsUpcoming:
      return await getStaticPropsDefault({ context })

    case routesFront.about:
      return await getStaticPropsTeachers({ context })

    case routesFront.contact:
      return await getStaticPropsDefault({ context })

    case routesFront.home:
      return await getStaticPropsDefault({ context })

    case routesFront.legal:
      return await getStaticPropsDefault({ context })

    case routesFront.payment:
      return await getStaticPropsDefault({ context })

    case routesFront.promo:
      return await getStaticPropsPagePromo({ context })

    case routesFront.teachers:
      return await getStaticPropsTeachers({ context })

    default:
      return await getStaticPropsDefault({ context })
  }
}

export default handleGetStaticProps
