import stls from '@/styles/components/images/journal/ImgJournalArticle.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import srcDefault from '@/public/assets/images/journal/journalDefault.jpg'

type TypeImgJournalArticleProps = TypeClassNames & TypeImg & TypeImgExtended

const ImgJournalArticle = ({
  classNames,
  src,
  width,
  height,
  alt,
  title
}: TypeImgJournalArticleProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || srcDefault}
        width={width}
        height={height}
        alt={alt || 'Заголовок'}
        title={title || 'Заголовок'}
        darken
      />
    </>
  )
}

export default ImgJournalArticle
