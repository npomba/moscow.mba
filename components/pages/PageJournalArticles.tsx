import stls from '@/styles/components/pages/PageJournalArticles.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
import {
  SectionJournalTags,
  SectionJournalCategories,
  SectionJournalHeroArticle
} from '@/components/sections'

type TypePageJournalArticlesProps = {}

const PageJournalArticles = () => {
  const { journalArticlesArticle } = useContext(ContextJournalContext)

  return (
    <>
      {/* <NextSeo
        title={`${data.title} MBA - Moscow Business Academy`}
        description={truncate(program.goal, 120)}
        canonical={`https://moscow.mba${router.asPath}`}
      /> */}

      <SectionJournalTags />
      <SectionJournalCategories />
      <SectionJournalHeroArticle />
    </>
  )
}

export default PageJournalArticles
