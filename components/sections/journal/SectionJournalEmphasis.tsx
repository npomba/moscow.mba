import stls from '@/styles/components/sections/journal/SectionJournalEmphasis.module.sass'
import { TypeClassNames, TypeLibJournalArticleTitleBody } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper, ContentJournalArticle } from '@/components/layout'

type TypeSectionJournalEmphasisProps = TypeClassNames & {
  emphasisBody: any
}

const SectionJournalEmphasis = ({
  classNames,
  emphasisBody
}: TypeSectionJournalEmphasisProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <ContentJournalArticle>
          <p className={stls.p}>{emphasisBody}</p>
        </ContentJournalArticle>
      </Wrapper>
    </section>
  )
}

export default SectionJournalEmphasis
