import { GetStaticPropsContext } from 'next'
import {
  TypePageDefaultProps,
  TypePageHomeProps,
  TypeRoutesFront,
  TypePageJournalArticlesProps,
  TypePageJournalArticleProps,
  TypePageProgramProps,
  TypePageProgramsProps,
  TypePagePromoProps,
  TypePageTeachersProps
} from '@/types/index'
import { routesFront, revalidate } from '@/config/index'
import {
  getStaticPropsTeachers,
  getStaticPropsDefault,
  getStaticPropsPrograms,
  getStaticPropsProgram,
  getStaticPropsPagePromo,
  getStaticPropsPageJournalArticles,
  getStaticPropsPageJournalArticle
} from '@/lib/index'

type TypeHandleGetStaticPropsProps = {
  page?: TypeRoutesFront[keyof TypeRoutesFront]
  context: GetStaticPropsContext
  type?: string | null
  format?: string | null
}

const handleGetStaticProps = async ({
  page,
  context,
  type,
  format
}: TypeHandleGetStaticPropsProps): Promise<{
  props:
    | TypePageDefaultProps
    | TypePageHomeProps
    | TypePageJournalArticlesProps
    | TypePageJournalArticleProps
    | TypePageProgramProps
    | TypePageProgramsProps
    | TypePagePromoProps
    | TypePageTeachersProps
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

    case routesFront.program:
      return await getStaticPropsProgram({ context, type, format })

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
