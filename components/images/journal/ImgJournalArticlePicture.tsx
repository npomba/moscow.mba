import stls from '@/styles/components/images/journal/ImgJournalArticlePicture.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { ImgTemplate } from '@/components/images'

type TypeImgJournalArticlePictureProps = TypeClassNames &
  TypeImg &
  TypeImgExtended

const ImgJournalArticlePicture = ({
  classNames,
  src,
  width,
  height,
  alt,
  title
}: TypeImgJournalArticlePictureProps) => {
  if (!src || !width || !height) return null
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={alt || 'Изображение'}
        title={title || 'Изображение'}
      />
    </>
  )
}

export default ImgJournalArticlePicture
