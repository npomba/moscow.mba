import stls from '@/styles/components/sections/journal/SectionJournalEmphasis.module.sass'
import { TypeClassNames, TypeLibJournalEmphasisBody } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper, ContentJournalArticle } from '@/components/layout'

type TypeSectionJournalEmphasisProps = TypeClassNames & {
  body: TypeLibJournalEmphasisBody | null
}

const SectionJournalEmphasis = ({
  classNames,
  body
}: TypeSectionJournalEmphasisProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <ContentJournalArticle>
          <p className={stls.p}>{body}</p>
        </ContentJournalArticle>
      </Wrapper>
    </section>
  )
}

export default SectionJournalEmphasis
