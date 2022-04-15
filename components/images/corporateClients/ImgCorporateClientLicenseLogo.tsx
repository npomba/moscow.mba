import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporateClients/license-logo.png'

const ImgCorporateClientLicenseLogo = ({
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
      alt={'Герб РФ'}
    />
  )
}

export default ImgCorporateClientLicenseLogo
