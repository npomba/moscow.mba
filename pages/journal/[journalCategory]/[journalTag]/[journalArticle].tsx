import stls from '@/styles/pages/PageJournalCategoryTagArticle.module.sass'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageJournalArticleProps } from '@/types/index'
import { routesFront } from '@/config/index'
import { handleGetStaticProps, handleGetStaticPaths } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { PageJournalArticles } from '@/components/pages'

const PageJournalCategoryTagArticle: NextPage<TypePageJournalArticleProps> = ({
  journalCategories,
  journalTags,
  journalArticles,
  journalArticlesArticle,
  gspContextParamsJournalCategory,
  gspContextParamsJournalCategoryTag,
  gspContextParamsJournalCategoryTagArticle
}) => {
  usePageHandleContext({
    journalCategories,
    journalTags,
    journalArticles,
    journalArticlesArticle,
    gspContextParamsJournalCategory,
    gspContextParamsJournalCategoryTag,
    gspContextParamsJournalCategoryTagArticle
  })

  return (
    <>
      Article
      <PageJournalArticles />
    </>
  )
}

export default PageJournalCategoryTagArticle

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routesFront.journalCategoryTagArticle })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.journalCategoryTagArticle,
    context
  })
