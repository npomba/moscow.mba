import stls from '@/styles/components/sections/journal/SectionJournalTagedArticles.module.sass'
import { TypeClassNames, TypeLibJournalTag } from '@/types/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
import { GeneralJuornalSectionTitle } from '@/components/general'
import { Wrapper } from '@/components/layout'

type TypeSectionJournalTagedArticlesProps = TypeClassNames & {
  tag?: TypeLibJournalTag | null
}

const SectionJournalTagedArticles = ({
  classNames,
  tag
}: TypeSectionJournalTagedArticlesProps) => {
  const { journalCategories, gspContextParamsJournalCategoryTag } = useContext(
    ContextJournalContext
  )

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <GeneralJuornalSectionTitle>
          {!tag ? (
            <>Самое читаемое</>
          ) : (
            <>
              <span className={stls.highlight}>#</span>
              {tag.title}
            </>
          )}
        </GeneralJuornalSectionTitle>
        SectionJournalTagedArticles
      </Wrapper>
    </section>
  )
}

export default SectionJournalTagedArticles
