import stls from '@/styles/components/sections/journal/SectionJournalTitle.module.sass'
import { TypeClassNames, TypeLibJournalArticleTitleBody } from '@/types/index'
import cn from 'classnames'
import parse from 'html-react-parser'
import truncate from 'truncate'
import { marked } from 'marked'
import { getClassNames } from '@/helpers/index'
import { Wrapper, ContentJournalArticle } from '@/components/layout'

type TypeSectionJournalTitleProps = TypeClassNames & {
  body: TypeLibJournalArticleTitleBody | null
  idx: number
}

const SectionJournalTitle = ({
  classNames,
  body,
  idx
}: TypeSectionJournalTitleProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <ContentJournalArticle>
          <h2 className={stls.title}>
            {body
              ?.filter(part => part)
              .map(part => (
                <span
                  key={
                    part.text
                      ? truncate(part.text, 21)
                      : `SectionJournalTitle ${idx}`
                  }
                  className={cn({
                    [stls.isHighlighted]: part.isHighlighted
                  })}>
                  {part.text &&
                    parse(
                      marked(part.text).replace('<p>', '').replace('</p>', '')
                    )}
                </span>
              ))}
          </h2>
        </ContentJournalArticle>
      </Wrapper>
    </section>
  )
}

export default SectionJournalTitle
