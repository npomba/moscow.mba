import stls from '@/styles/components/popups/PopupTeacher.module.sass'
import { MouseEventHandler } from 'react'
import { TypeClassNames, TypeLibTeacher } from '@/types/index'
import cn from 'classnames'
import parse from 'html-react-parser'
import { marked } from 'marked'
import { colors } from '@/config/index'
import { getImageHeight, getClassNames } from '@/helpers/index'
import { IconClose } from '@/components/icons'
import { ImgTeachersTeacher } from '@/components/images'

type TypePopupTeacher = TypeClassNames & {
  close: MouseEventHandler
  teacher: TypeLibTeacher
}

const PopupTeacher = ({ classNames, close, teacher }: TypePopupTeacher) => {
  const image = (
    <ImgTeachersTeacher
      src={teacher?.portrait?.url}
      width={teacher?.portrait?.url ? 343 : undefined}
      height={getImageHeight({
        width: 343,
        widthInitial: teacher?.portrait?.width,
        heightInitial: teacher?.portrait?.height
      })}
    />
  )

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <button className={stls.close} onClick={close}>
        <IconClose stroke={colors.rho} />
      </button>
      <div className={stls.content}>
        <div className={cn(stls.left, stls.laptopDesktopWidescreen)}>
          {image}
        </div>
        <div className={stls.right}>
          <h2 className={stls.title}>{teacher?.name || 'Преподаватель'}</h2>
          <div className={stls.about}>
            <div className={stls.phoneTablet}>{image}</div>
            <h3 className={stls.subtitle}>Об эксперте:</h3>
            {teacher?.descriptionItems?.length > 0 ? (
              <ul className={stls.list}>
                {teacher.descriptionItems
                  .filter(item => item?.item)
                  .map((item, idx) => (
                    <li
                      key={`${item || 'teacherListItem'}-${idx}`}
                      className={stls.listItem}>
                      {parse(marked(item?.item))}
                    </li>
                  ))}
              </ul>
            ) : (
              <p className={stls.p}>{teacher?.description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupTeacher
