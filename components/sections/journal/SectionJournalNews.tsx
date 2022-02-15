import stls from '@/styles/components/sections/journal/SectionJournalNews.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
import { GeneralJuornalSectionTitle } from '@/components/general'
import { Wrapper } from '@/components/layout'

type TypeSectionJournalNewsProps = TypeClassNames

const SectionJournalNews = ({ classNames }: TypeSectionJournalNewsProps) => {
  const { journalCategories, gspContextParamsJournalCategoryTag } = useContext(
    ContextJournalContext
  )

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <GeneralJuornalSectionTitle>Новости</GeneralJuornalSectionTitle>
        SectionJournalNews
      </Wrapper>
    </section>
  )
}

export default SectionJournalNews
