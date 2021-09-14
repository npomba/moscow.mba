import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/general/logo-rabo.png'

type ImgLogoRaboType = {
  classNames?: string[]
  width?: number
  height?: number
}

const ImgLogoRabo = ({ classNames = [], width, height }: ImgLogoRaboType) => {
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
