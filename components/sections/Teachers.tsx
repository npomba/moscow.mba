import stls from '@/styles/components/sections/Teachers.module.sass'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useAt, SetString } from '@/helpers/index'
import { useRouter } from 'next/router'
import Image from 'next/image'
import PopupForm from '@/components/popups/PopupForm'
import { about, teachersImges } from '@/data/index'
import { IconCheck } from '@/components/icons'
import { base64pixel } from '@/config/index'
import cn from 'classnames'
import { Wrapper } from '@/components/layout'

const splitParaText = (string, splitBy) => {
  let firstPartOfString, secondPartOfString
  if (string) {
    const indexOfWordToSplitBy = string.indexOf(splitBy)

    if (indexOfWordToSplitBy === -1) return [string, '']

    firstPartOfString = string.slice(0, indexOfWordToSplitBy)
    secondPartOfString = string.slice(indexOfWordToSplitBy)
  }
  return [firstPartOfString, secondPartOfString]
}

const Teachers = ({
  programTitle = null,
  programId = null,
  atStandAlonePage = false,
  teachers = null
}) => {
  const at = useAt()
  const router = useRouter()

  const defaultTeachers = [
    {
      name: SetString(about.teachersTeacherOneTitle),
      desc: SetString(about.teachersTeacherOneDics),
      img: {
        src: '/assets/images/teachers/teacher-1.jpg',
        alt: SetString(about.teachersTeacherOneTitle)
      }
    },
    {
      name: SetString(about.teachersTeacherTwoTitle),
      desc: SetString(about.teachersTeacherTwoDics),
      img: {
        src: '/assets/images/teachers/teacher-2.jpg',
        alt: SetString(about.teachersTeacherTwoTitle)
      }
    },
    {
      name: SetString(about.teachersTeacherThreeTitle),
      desc: SetString(about.teachersTeacherThreeDics),
      img: {
        src: '/assets/images/teachers/teacher-3.jpg',
        alt: SetString(about.teachersTeacherThreeTitle)
      }
    },
    {
      name: SetString(about.teachersTeacherFourTitle),
      desc: SetString(about.teachersTeacherFourDics),
      img: {
        src: '/assets/images/teachers/teacher-4.jpg',
        alt: SetString(about.teachersTeacherOneTitle)
      }
    },
    {
      name: SetString(about.teachersTeacherFiveTitle),
      desc: SetString(about.teachersTeacherFiveDics),
      img: {
        src: '/assets/images/teachers/teacher-5.jpg',
        alt: SetString(about.teachersTeacherFiveTitle)
      }
    },
    {
      name: SetString(about.teachersTeacherSixTitle),
      desc: SetString(about.teachersTeacherSixDics),
      img: {
        src: '/assets/images/teachers/teacher-6.jpg',
        alt: SetString(about.teachersTeacherSixTitle)
      }
    },
    {
      name: SetString(about.teachersTeacherSevenTitle),
      desc: SetString(about.teachersTeacherSevenDics),
      img: {
        src: '/assets/images/teachers/teacher-7.jpg',
        alt: SetString(about.teachersTeacherSevenTitle)
      }
    },
    {
      name: SetString(about.teachersTeacherEightTitle),
      desc: SetString(about.teachersTeacherEightDics),
      img: {
        src: '/assets/images/teachers/teacher-8.jpg',
        alt: SetString(about.teachersTeacherEightTitle)
      }
    }
  ]

  const title =
    at.profession || at.course ? (
      <h2 className={stls.titleProfession}>
        {SetString(about.teachersTitleFirstSecondary)}{' '}
        <span className='red'>
          {SetString(about.teachersTitleRedSecondary)}{' '}
        </span>
        {SetString(about.teachersTitleSecondSecondary)}
      </h2>
    ) : (
      <h2>
        {SetString(about.teachersTitleFirstMain)}{' '}
        <span className='red'>{SetString(about.teachersTitleRedMain)} </span>
        {SetString(about.teachersTitleSecondMain)}
      </h2>
    )

  const firstParaText = SetString(
    at.profession || at.course
      ? about.teachersListItemDiscSecondary
      : about.teachersListItemDiscMain
  )
  const secondParaText = SetString(about.teachersListItemDiscSecond)
  const teachersProsTitle = SetString(
    !at.profession && !at.course && about.teachersProsTitleMain
  )

  const wordToSplitBy = {
    europe: {
      ru: 'Европы',
      'en-US': 'Europe'
    },
    and: {
      ru: ' и ',
      'en-US': ' and '
    },
    specialists: {
      ru: 'специалистов',
      en: 'specialists'
    }
  }

  const [firstParaPartOne, firstParaPartTwo] = splitParaText(
    firstParaText,
    wordToSplitBy.europe[router.locale]
  )
  const [secondParaPartOne, secondParaPartTwo] = splitParaText(
    secondParaText,
    wordToSplitBy.and[router.locale]
  )
  const [teachersProsPartOne, teachersProsPartTwo] = splitParaText(
    teachersProsTitle,
    wordToSplitBy.specialists[router.locale]
  )

  const UITeachers = atStandAlonePage
    ? teachers
    : teachers.filter(teacher => teacher?.programs?.includes(programId))

  return (
    <>
      <section
        className={cn({
          [stls.container]: true,
          [stls.standalonePage]: atStandAlonePage
        })}>
        <Wrapper column>
          <div className={stls.sectionPl}>
            <div className={stls.titlePl}>
              {SetString(about.teachersTitleLabel)}
            </div>
            <div className={stls.content}>
              {title}
              {!at.profession && !at.course && (
                <div className={stls.text}>{SetString(about.teachersDics)}</div>
              )}
              <div
                className={cn({
                  [stls.twoImages]: true,
                  [stls.detailImage]: true,
                  [stls.detailImageAtProfession]: at.profession || at.course
                })}>
                <div
                  className={cn({
                    [stls.image]: true,
                    [stls.pic1]: true,
                    [stls.pic1AtProfession]: at.profession || at.course
                  })}>
                  <Image
                    src={teachersImges.circleSpeakerOne.src}
                    alt={SetString(teachersImges.circleSpeakerOne.alt)}
                    width={!at.profession && !at.course ? 425 : 344}
                    height={!at.profession && !at.course ? 422 : 342}
                    layout='responsive'
                    placeholder='blur'
                    blurDataURL={base64pixel}
                  />
                </div>
                <div
                  className={cn({
                    [stls.image]: true,
                    [stls.pic2]: true,
                    [stls.pic2AtProfession]: at.profession || at.course
                  })}>
                  <Image
                    src={teachersImges.circleSpeakerTwo.src}
                    alt={SetString(teachersImges.circleSpeakerTwo.alt)}
                    width={!at.profession && !at.course ? 236 : 199}
                    height={!at.profession && !at.course ? 236 : 199}
                    layout='responsive'
                    placeholder='blur'
                    blurDataURL={base64pixel}
                  />
                </div>
              </div>
              <ul
                className={cn({
                  [stls.detailList]: true,
                  [stls.detailListProfession]: at.profession || at.course
                })}>
                <li>
                  <div className={stls.circle}>
                    <IconCheck />
                  </div>
                  <div>
                    <h5>
                      {SetString(
                        at.profession || at.course
                          ? about.teachersListItemTitleSecondary
                          : about.teachersListItemTitleMain
                      )}
                    </h5>
                    <p>
                      {firstParaPartOne}
                      <span className={stls.breakLine}>{firstParaPartTwo}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className={stls.circle}>
                    <IconCheck />
                  </div>
                  <div>
                    <h5>{SetString(about.teachersListItemTitleSecond)}</h5>
                    <p>
                      {secondParaPartOne}
                      <span className={stls.breakLine}>
                        {secondParaPartTwo}
                      </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className={stls.circle}>
                    <IconCheck />
                  </div>
                  <div>
                    <h5>
                      {at.profession || at.course
                        ? SetString(about.teachersListItemTitleThirdAlt)
                        : SetString(about.teachersListItemTitleThird)}
                    </h5>
                    <p>
                      {SetString(
                        at.profession || at.course
                          ? about.teachersListItemDiscThirdSecondary
                          : about.teachersListItemDiscThirdMain
                      )}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {!at.profession && !at.course && (
              <h3 className={stls.teachersPros}>
                {teachersProsPartOne}
                <span className={stls.breakLine}>{teachersProsPartTwo}</span>
              </h3>
            )}
          </div>
          <ul
            className={cn({
              [stls.teachersList]: true,
              [stls.teachersListProfession]: at.profession || at.course
            })}>
            {UITeachers &&
              UITeachers.length > 0 &&
              UITeachers.map((teacher, idx) => (
                <li key={teacher.name + idx}>
                  {console.log(teacher.name)}
                  <div className={stls.teachersItem}>
                    <div className={stls.image}>
                      <Image
                        src={teacher.portrait?.url}
                        alt={teacher.name}
                        width={teacher.portrait?.width}
                        height={teacher.portrait?.height}
                        layout='responsive'
                        placeholder='blur'
                        blurDataURL={base64pixel}
                      />
                    </div>
                    <div>
                      <div className={stls.name}>{teacher.name}</div>
                      <p>{teacher.description}</p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          {UITeachers && UITeachers.length === 0 && (
            <div className={stls.getAllTeachers}>
              <h3 className={stls.getAllTeachersTitle}>
                Получите полный список преподавателей
              </h3>
              <div
                className={cn({
                  [stls.btn]: true,
                  [stls.getAllTeachersBtn]: true
                })}>
                <Popup
                  trigger={
                    <button
                      className={cn({
                        button: true
                      })}>
                      {SetString(about.getAllTeachersBtn)}
                    </button>
                  }
                  modal
                  nested>
                  {close => (
                    <PopupForm
                      programId={programId}
                      programTitle={programTitle}
                      closePopUpForm={close}
                      title={SetString(about.getAllTeachersPopupTitle)}
                      disc={SetString(about.teachersPopupFormDics)}
                    />
                  )}
                </Popup>
              </div>
            </div>
          )}
          {UITeachers && UITeachers.length > 0 && (
            <div className={stls.btn}>
              <Popup
                trigger={
                  <button className='button'>
                    {SetString(about.teachersCtaBtn)}
                  </button>
                }
                modal
                nested>
                {close => (
                  <PopupForm
                    programId={programId}
                    programTitle={programTitle}
                    closePopUpForm={close}
                    title={SetString(about.teachersPopupFormTitle)}
                    disc={SetString(about.teachersPopupFormDics)}
                  />
                )}
              </Popup>
            </div>
          )}
        </Wrapper>
      </section>
    </>
  )
}

export default Teachers
