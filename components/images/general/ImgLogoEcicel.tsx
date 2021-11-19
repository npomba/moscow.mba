import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/general/logo-ecicel.jpg'

const ImgLogoEcicel = ({ classNames = [], width, height }: TypeImg) => {
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={'Accreditation Service for E-Learning Providers'}
      classNames={classNames}
    />
  )
}

export default ImgLogoEcicel
