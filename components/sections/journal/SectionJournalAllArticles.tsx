import stls from '@/styles/components/sections/journal/SectionJournalAllArticles.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
import { GeneralJournalSectionTitle } from '@/components/general'
import { Wrapper } from '@/components/layout'

type TypeSectionJournalAllArticlesProps = TypeClassNames

const SectionJournalAllArticles = ({
  classNames
}: TypeSectionJournalAllArticlesProps) => {
  const { journalCategories, gspContextParamsJournalCategoryTag } = useContext(
    ContextJournalContext
  )

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <GeneralJournalSectionTitle>Все материалы</GeneralJournalSectionTitle>
        SectionJournalAllArticles
      </Wrapper>
    </section>
  )
}

export default SectionJournalAllArticles
