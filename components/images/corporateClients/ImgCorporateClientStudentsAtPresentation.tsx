import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporateClients/students-at-presentation.jpg'

const ImgCorporateClientStudentsAtPresentation = ({
  classNames,
  width,
  height
}: TypeClassNames & TypeImg) => {
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={'Студенты на презентации'}
      classNames={classNames}
    />
  )
}

export default ImgCorporateClientStudentsAtPresentation
