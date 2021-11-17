import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/general/logo-rabo.png'

const ImgLogoRabo = ({ classNames = [], width, height }: TypeImg) => {
  // 117x30
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt='Российская ассоциация бизнес-образования'
      classNames={classNames}
    />
  )
}

export default ImgLogoRabo
