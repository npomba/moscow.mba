import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/newyears/stickybottom-decoration.png'

const ImgStickyBottomDecoration = ({
  classNames = [],
  width,
  height
}: TypeImg) => {
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={'Снежинки'}
      classNames={classNames}
    />
  )
}

export default ImgStickyBottomDecoration
