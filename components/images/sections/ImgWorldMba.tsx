import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/world_mba_1.jpg'

const ImgWorldMba = ({
  classNames,
  width,
  height
}: TypeClassNames & TypeImg) => {
  const at = useAt()
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={at.en ? 'Group of happy graduates' : 'Группа счастливых выпускников'}
      classNames={classNames}
    />
  )
}

export default ImgWorldMba
