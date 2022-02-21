import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/handsome-business-man.jpg'

const ListenersAtTheConferenceBusiness = ({
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
      alt={at.en ? 'Students at the conference' : 'Слушатели на конференции'}
      classNames={classNames}
    />
  )
}

export default ListenersAtTheConferenceBusiness
