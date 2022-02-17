import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/sections/organization_2.jpg'

const ImgHigherMitap = ({
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
      alt={at.en ? 'Mitap' : 'Митап'}
      classNames={classNames}
    />
  )
}

export default ImgHigherMitap
