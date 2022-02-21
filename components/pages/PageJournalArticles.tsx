import stls from '@/styles/components/pages/PageJournalArticles.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
import {
  SectionJournalTags,
  SectionJournalCategories,
  SectionJournalHeroArticle,
  SectionJournalAllArticles,
  SectionJournalNews,
  SectionJournalTagsWithPictures,
  SectionJournalTagedArticles,
  SectionJournalMoreTags
} from '@/components/sections'

type TypePageJournalArticlesProps = {}

const PageJournalArticles = () => {
  const { journalTags } = useContext(ContextJournalContext)

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
      <SectionJournalAllArticles />
      <SectionJournalNews />
      <SectionJournalTagsWithPictures />
      <SectionJournalTagedArticles />
      {journalTags?.map(tag => (
        <SectionJournalTagedArticles key={tag.slug} tag={tag} />
      ))}
      <SectionJournalMoreTags />
    </>
  )
}

export default PageJournalArticles
