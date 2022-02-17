import stls from '@/styles/pages/PageJournalCategoryTagArticle.module.sass'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageJournalArticleProps } from '@/types/index'
import { Fragment, useEffect, useState } from 'react'
import { routesFront } from '@/config/index'
import { getImageHeight } from '@/helpers/index'
import { handleGetStaticProps, handleGetStaticPaths } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { GeneralJournalArticleCreatedAt } from '@/components/general'
import { Wrapper, ContentJournalArticle } from '@/components/layout'
import { ImgJournalArticle } from '@/components/images'
import {
  SectionJournalParagraph,
  SectionJournalTitle,
  SectionJournalPicture,
  SectionJournalEmphasis,
  SectionJournalQuote,
  SectionJournalTagedArticles,
  SectionJournalTagsWithPictures
} from '@/components/sections'

const PageJournalCategoryTagArticle: NextPage<TypePageJournalArticleProps> = ({
  journalCategories,
  journalTags,
  journalArticles,
  journalArticlesArticle,
  gspContextParamsJournalCategory,
  gspContextParamsJournalCategoryTag,
  gspContextParamsJournalCategoryTagArticle
}) => {
  usePageHandleContext({
    journalCategories,
    journalTags,
    journalArticles,
    journalArticlesArticle,
    gspContextParamsJournalCategory,
    gspContextParamsJournalCategoryTag,
    gspContextParamsJournalCategoryTagArticle
  })

  const { title, journal_category, createdAt, picture, articleBody } =
    journalArticlesArticle

  const [pageYOffset, setPageYOffset] = useState(0)
  const [scollHeight, setScrollHeight] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  const handleScroll = () => {
    setPageYOffset(window.pageYOffset)
    setScrollHeight(document.body.scrollHeight)
    setClientHeight(
      window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
    )
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  console.log(articleBody)

  return (
    <>
      <div className={stls.scrollProgress}>
        <div
          className={stls.scrollProgressBar}
          style={{
            transform: `translateX(-${
              100 - pageYOffset / ((scollHeight - clientHeight) / 100)
            }%)`
          }}></div>
      </div>
      <section>
        <Wrapper column>
          <ContentJournalArticle classNames={[stls.content]}>
            <h1 className={stls.title}>{title}</h1>
            <div className={stls.categorydate}>
              <div className={stls.category}>{journal_category.title}</div>
              <GeneralJournalArticleCreatedAt
                classNames={[stls.date]}
                createdAt={createdAt}
                formatString='dd.MM.yyyy'
              />
            </div>
            <ImgJournalArticle
              src={picture.url || undefined}
              width={picture.url && 850}
              height={
                picture.url &&
                getImageHeight({
                  width: 850,
                  widthInitial: picture.width,
                  heightInitial: picture.height
                })
              }
              alt={title}
              title={title}
              classNames={[stls.img]}
            />
          </ContentJournalArticle>
        </Wrapper>
      </section>
      {articleBody?.map((component, idx) => (
        <Fragment key={`${component.__typename} ${idx}`}>
          {component.__typename === 'ComponentJournalParagraph' && (
            <SectionJournalParagraph body={component.paragraphBody} idx={idx} />
          )}
          {component.__typename === 'ComponentJournalTitle' && (
            <SectionJournalTitle body={component.titleBody} idx={idx} />
          )}
          {component.__typename === 'ComponentGeneralPicture' && (
            <SectionJournalPicture
              picture={component.picture}
              title={component.title}
              idx={idx}
            />
          )}
          {component.__typename === 'ComponentJournalEmphasis' && (
            <SectionJournalEmphasis body={component.emphasisBody} />
          )}
          {component.__typename === 'ComponentJournalQuote' && (
            <SectionJournalQuote
              body={component.body}
              authorPosition={component.athorPosition}
              authorName={component.authorName}
            />
          )}
        </Fragment>
      ))}
      <SectionJournalTagedArticles suggestions />
      <SectionJournalTagsWithPictures />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routesFront.journalCategoryTagArticle })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.journalCategoryTagArticle,
    context
  })

export default PageJournalCategoryTagArticle
