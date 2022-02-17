import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/new_abroad_modules_pic_2.jpg'

const ImgWangjingSOHO = ({
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
      alt={at.en ? 'View of the skyscraper Wangjing SOHO, China' : 'Вид на небоскреб Wangjing SOHO, Китай'}
      classNames={classNames}
    />
  )
}

export default ImgWangjingSOHO