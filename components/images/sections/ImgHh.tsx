import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/clients/client_1.jpg'

const ImgHh = ({
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
      alt={at.en ? 'Head Hunter' : 'Head Hunter'}
      classNames={classNames}
    />
  )
}

export default ImgHh
