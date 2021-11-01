import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/general/logo-department.png'

type ImgLogoMdeType = {
  classNames?: string[]
  width?: number
  height?: number
}

const ImgLogoMde = ({ classNames = [], width, height }: ImgLogoMdeType) => {
  // 105x31
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt='Департамент образования города москвы'
      classNames={classNames}
    />
  )
}

export default ImgLogoMde
