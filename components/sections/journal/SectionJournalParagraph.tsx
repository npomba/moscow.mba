import stls from '@/styles/components/sections/journal/SectionJournalParagraph.module.sass'
import {
  TypeClassNames,
  TypeLibJournalArticleParagraphBody
} from '@/types/index'
import cn from 'classnames'
import parse from 'html-react-parser'
import truncate from 'truncate'
import { marked } from 'marked'
import { getClassNames } from '@/helpers/index'
import { Wrapper, ContentJournalArticle } from '@/components/layout'

type TypeSectionJournalParagraphProps = TypeClassNames & {
  body: TypeLibJournalArticleParagraphBody | null
  idx: number
}

const SectionJournalParagraph = ({
  classNames,
  body,
  idx
}: TypeSectionJournalParagraphProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <ContentJournalArticle>
          {body
            ?.filter(part => part)
            .map(part => (
              <div
                key={
                  part.text
                    ? truncate(part.text, 21)
                    : `SectionJournalParagraph ${idx}`
                }
                className={cn(stls.paragraph, {
                  [stls.isHighlighted]: part.isHighlighted,
                  [stls.isLarger]: part.isLarger
                })}>
                {part.text && parse(marked(part.text))}
              </div>
            ))}
        </ContentJournalArticle>
      </Wrapper>
    </section>
  )
}

export default SectionJournalParagraph
