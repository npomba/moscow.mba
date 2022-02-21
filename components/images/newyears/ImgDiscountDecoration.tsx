import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/newyears/discount-decoration.png'

const ImgDiscountDecoration = ({
  classNames,
  width,
  height
}: TypeClassNames & TypeImg) => {
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={'Снежинки'}
      classNames={classNames}
    />
  )
}

export default ImgDiscountDecoration
