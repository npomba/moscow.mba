import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporateClients/students-meeting.jpg'

const ImgCorporateClientStudentsMeeting = ({
  classNames,
  width,
  height
}: TypeClassNames & TypeImg) => {
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={'Студенты на встрече'}
      classNames={classNames}
    />
  )
}

export default ImgCorporateClientStudentsMeeting
