import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/campuses/campus-3.jpg'

const ImgCampusThree = ({
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
        alt={at.en ? 'People are studying in campus' : 'Люди обучаются за столами внутри кампус'}
        classNames={classNames}
      />
    )
}  

export default ImgCampusThree