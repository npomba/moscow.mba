import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/students_pic_2.jpg'

const ImgHappyGraduate = ({
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
      alt={at.en ? 'Happy graduates' : 'Cчастливых выпускников'}
      classNames={classNames}
    />
  )
}

export default ImgHappyGraduate
