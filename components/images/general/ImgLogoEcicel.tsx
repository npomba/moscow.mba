import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/general/logo-ecicel.jpg'

type ImgLogoEcicelType = {
  classNames?: string[]
  width?: number
  height?: number
}

const ImgLogoEcicel = ({
  classNames = [],
  width,
  height
}: ImgLogoEcicelType) => {
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt='Accreditation Service for E-Learning Providers'
      classNames={classNames}
    />
  )
}

export default ImgLogoEcicel
