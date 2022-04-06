import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporateClients/corporateClientsBg.jpg'

const ImgCorporateClientsBg = ({
  classNames,
  width,
  height
}: TypeClassNames & TypeImg) => {
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={'Спикер выступает для аудитории'}
      layout='fill'
      priority
      objectFit='cover'
      classNames={classNames}
    />
  )
}

export default ImgCorporateClientsBg
