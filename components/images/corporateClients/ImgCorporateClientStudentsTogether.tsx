import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporateClients/students-together.jpg'

const ImgCorporateClientStudentsTogether = ({
  classNames,
  width,
  height
}: TypeClassNames & TypeImg) => {
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={'Студенты вместе'}
      classNames={classNames}
    />
  )
}

export default ImgCorporateClientStudentsTogether
