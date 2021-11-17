import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/general/logo-department.png'

const ImgLogoMde = ({ classNames = [], width, height }: TypeImg) => {
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
