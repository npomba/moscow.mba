import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/campuses/campus-2.jpg'

const ImgCampusTwo = ({
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
        alt={at.en ? 'Campus' : 'Здание кампуса'}
        classNames={classNames}
      />
    )
}  

export default ImgCampusTwo