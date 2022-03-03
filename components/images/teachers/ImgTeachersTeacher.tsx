import stls from '@/styles/components/images/teachers/ImgTeachersTeacher.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import srcDefault from '@/public/assets/images/teachers/teacher-default-large.png'

type TypeImgTeachersTeacherProps = TypeClassNames & TypeImg & TypeImgExtended

const ImgTeachersTeacher = ({
  classNames,
  src,
  width,
  height,
  alt,
  title
}: TypeImgTeachersTeacherProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || srcDefault}
        width={width}
        height={height}
        alt={alt || 'Преподаватель'}
        title={title || 'Преподаватель'}
      />
    </>
  )
}

export default ImgTeachersTeacher
