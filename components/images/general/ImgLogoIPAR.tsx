import { TypeClassNames, TypeImg } from '@/types/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/general/logo-ipar.png'

type TImgLogoIPAR = TypeClassNames & TypeImg

const ImgLogoIPAR = ({ classNames, width, height }: TImgLogoIPAR) => {
  const at = useAt()

  const alt = at.en
    ? 'Institute of professional accountants of Russia'
    : 'Институт профессиональных бухгалтеров и аудиторов России'

  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={alt}
      classNames={classNames}
      title={alt}
    />
  )
}

export default ImgLogoIPAR
