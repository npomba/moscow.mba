import stls from '@/styles/components/sections/journal/SectionJournalCategories.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextJournalContext } from '@/context/index'
import { Wrapper } from '@/components/layout'

type TypeSectionJournalCategoriesProps = TypeClassNames

const SectionJournalCategories = ({
  classNames
}: TypeSectionJournalCategoriesProps) => {
  const { journalCategories, gspContextParamsJournalCategoryTag } = useContext(
    ContextJournalContext
  )

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <ul className={stls.categories}>
          {journalCategories
            ?.filter(category => category.title && category.slug)
            .map(category => (
              <li key={category.slug} className={stls.categoryItem}>
                <Link
                  href={`${routesFront.journal}/${category.slug}/${gspContextParamsJournalCategoryTag}`}>
                  <a className={stls.categoryItem}>{category.title}</a>
                </Link>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionJournalCategories
