import stls from '@/styles/pages/PageJournalCategory.module.sass'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageJournalArticlesProps } from '@/types/index'
import { routesFront } from '@/config/index'
import { handleGetStaticProps, handleGetStaticPaths } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import PageJournalArticles from '@/components/pages/PageJournalArticles'

const PageJournalCategory: NextPage<TypePageJournalArticlesProps> = ({
  programs,
  journalCategories,
  journalTags,
  journalArticles,
  gspContextParamsJournalCategory,
  gspContextParamsJournalCategoryTag,
  gspContextParamsJournalCategoryTagArticle
}) => {
  usePageHandleContext({
    programs,
    journalCategories,
    journalTags,
    journalArticles,
    gspContextParamsJournalCategory,
    gspContextParamsJournalCategoryTag,
    gspContextParamsJournalCategoryTagArticle
  })

  return (
    <>
      <PageJournalArticles />
    </>
  )
}

export default PageJournalCategory

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routesFront.journalCategory })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.journal, context })
