import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/clients/executive_pic_2.jpg'

const ImgStudentsExecutive = ({
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
        alt={at.en ? 'Executive students at the conference' : 'Студенты Executive на конференции'}
        classNames={classNames}
      />
    )
}  

export default ImgStudentsExecutive