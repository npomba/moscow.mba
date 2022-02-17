import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/new_abroad_modules_pic_1.jpg'

const ImgStatueLiberty = ({
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
      alt={at.en ? 'View of the Statue of Liberty, USA' : 'Вид на Статую Свободы, США'}
      classNames={classNames}
    />
  )
}

export default ImgStatueLiberty