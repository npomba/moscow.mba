import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/sections/top_path_pic_1.jpg'

const ImgFullAuditorium = ({
  classNames,
  width,
  height
}: TypeClassNames & TypeImg) => {
  const at = useAt()
  console.log(src);
  
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={at.en ? 'Full auditorium during the conference' : 'Полный зал слушателей во время конференции'}
      classNames={classNames}
    />
  )
}

export default ImgFullAuditorium