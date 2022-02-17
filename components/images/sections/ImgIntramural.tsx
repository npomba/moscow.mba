import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/intramural_moduls_pic_1.jpg'

const ImgIntramural = ({
  classNames,
  width,
  height
}: TypeClassNames & TypeImg) => {
  const at = useAt()
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={at.en ? 'Listeners at the MBA conference' : 'Слушатели на конференции MBA'}
      classNames={classNames}
    />
  )
}

export default ImgIntramural