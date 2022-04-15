import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporateClients/rabo-logo.png'

const ImgCorporateClientRaboLogo = ({
  classNames,
  width,
  height
}: TypeClassNames & TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={src}
      width={width}
      height={height}
      alt={'РАБО лого'}
    />
  )
}

export default ImgCorporateClientRaboLogo
