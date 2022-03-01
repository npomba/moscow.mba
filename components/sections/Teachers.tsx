import stls from '@/styles/components/sections/Teachers.module.sass'
import { useState } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useAt, SetString } from '@/helpers/index'
import { useRouter } from 'next/router'
import Image from 'next/image'
import PopupForm from '@/components/popups/PopupForm'
import lang from 'data/translation/about'
import imagesData from '@/data/images/teachers'
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

  const [shownTeachersCount, setShownTeachersCount] = useState(8)

  const defaultTeachers = [
    {
      name: SetString(lang.teachersTeacherOneTitle),
      desc: SetString(lang.teachersTeacherOneDics),
      img: {
        src: '/assets/images/teachers/teacher-1.jpg',
        alt: SetString(lang.teachersTeacherOneTitle)
      }
    },
    {
      name: SetString(lang.teachersTeacherTwoTitle),
      desc: SetString(lang.teachersTeacherTwoDics),
      img: {
        src: '/assets/images/teachers/teacher-2.jpg',
        alt: SetString(lang.teachersTeacherTwoTitle)
      }
    },
    {
      name: SetString(lang.teachersTeacherThreeTitle),
      desc: SetString(lang.teachersTeacherThreeDics),
      img: {
        src: '/assets/images/teachers/teacher-3.jpg',
        alt: SetString(lang.teachersTeacherThreeTitle)
      }
    },
    {
      name: SetString(lang.teachersTeacherFourTitle),
      desc: SetString(lang.teachersTeacherFourDics),
      img: {
        src: '/assets/images/teachers/teacher-4.jpg',
        alt: SetString(lang.teachersTeacherOneTitle)
      }
    },
    {
      name: SetString(lang.teachersTeacherFiveTitle),
      desc: SetString(lang.teachersTeacherFiveDics),
      img: {
        src: '/assets/images/teachers/teacher-5.jpg',
        alt: SetString(lang.teachersTeacherFiveTitle)
      }
    },
    {
      name: SetString(lang.teachersTeacherSixTitle),
      desc: SetString(lang.teachersTeacherSixDics),
      img: {
        src: '/assets/images/teachers/teacher-6.jpg',
        alt: SetString(lang.teachersTeacherSixTitle)
      }
    },
    {
      name: SetString(lang.teachersTeacherSevenTitle),
      desc: SetString(lang.teachersTeacherSevenDics),
      img: {
        src: '/assets/images/teachers/teacher-7.jpg',
        alt: SetString(lang.teachersTeacherSevenTitle)
      }
    },
    {
      name: SetString(lang.teachersTeacherEightTitle),
      desc: SetString(lang.teachersTeacherEightDics),
      img: {
        src: '/assets/images/teachers/teacher-8.jpg',
        alt: SetString(lang.teachersTeacherEightTitle)
      }
    }
  ]

  const title =
    at.profession || at.course ? (
      <h2 className={stls.titleProfession}>
        {SetString(lang.teachersTitleFirstSecondary)}{' '}
        <span className='red'>
          {SetString(lang.teachersTitleRedSecondary)}{' '}
        </span>
        {SetString(lang.teachersTitleSecondSecondary)}
      </h2>
    ) : (
      <h2>
        {SetString(lang.teachersTitleFirstMain)}{' '}
        <span className='red'>{SetString(lang.teachersTitleRedMain)} </span>
        {SetString(lang.teachersTitleSecondMain)}
      </h2>
    )

  const firstParaText = SetString(
    at.profession || at.course
      ? lang.teachersListItemDiscSecondary
      : lang.teachersListItemDiscMain
  )
  const secondParaText = SetString(lang.teachersListItemDiscSecond)
  const teachersProsTitle = SetString(
    !at.profession && !at.course && lang.teachersProsTitleMain
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

  const UITeachers =
    teachers?.filter((teacher, idx) => idx < shownTeachersCount) ||
    defaultTeachers?.filter((teacher, idx) => idx < shownTeachersCount)

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
              {SetString(lang.teachersTitleLabel)}
            </div>
            <div className={stls.content}>
              {title}
              {!at.profession && !at.course && (
                <div className={stls.text}>{SetString(lang.teachersDics)}</div>
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
                    src={imagesData.circleSpeakerOne.src}
                    alt={SetString(imagesData.circleSpeakerOne.alt)}
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
                    src={imagesData.circleSpeakerTwo.src}
                    alt={SetString(imagesData.circleSpeakerTwo.alt)}
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
                          ? lang.teachersListItemTitleSecondary
                          : lang.teachersListItemTitleMain
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
                    <h5>{SetString(lang.teachersListItemTitleSecond)}</h5>
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
                        ? SetString(lang.teachersListItemTitleThirdAlt)
                        : SetString(lang.teachersListItemTitleThird)}
                    </h5>
                    <p>
                      {SetString(
                        at.profession || at.course
                          ? lang.teachersListItemDiscThirdSecondary
                          : lang.teachersListItemDiscThirdMain
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
                      {SetString(lang.getAllTeachersBtn)}
                    </button>
                  }
                  modal
                  nested>
                  {close => (
                    <PopupForm
                      programId={programId}
                      programTitle={programTitle}
                      closePopUpForm={close}
                      title={SetString(lang.getAllTeachersPopupTitle)}
                      disc={SetString(lang.teachersPopupFormDics)}
                    />
                  )}
                </Popup>
              </div>
            </div>
          )}
          {UITeachers && UITeachers.length > 0 && (
            <div className={stls.btn}>
              {shownTeachersCount >= teachers.length ? (
                <Popup
                  trigger={
                    <button
                      className='button'
                      onClick={() =>
                        setShownTeachersCount(shownTeachersCount + 4)
                      }>
                      {at.en && 'Request full list'}
                      {at.ru && 'Запросить полный список'}
                    </button>
                  }
                  modal
                  nested>
                  {close => (
                    <PopupForm
                      programId={programId}
                      programTitle={programTitle}
                      closePopUpForm={close}
                      title={SetString(lang.teachersPopupFormTitle)}
                      disc={SetString(lang.teachersPopupFormDics)}
                    />
                  )}
                </Popup>
              ) : (
                <button
                  className='button'
                  onClick={() => setShownTeachersCount(shownTeachersCount + 4)}>
                  {at.en && 'Show more'}
                  {at.ru && 'Показать ещё'}
                </button>
              )}
            </div>
          )}
        </Wrapper>
      </section>
    </>
  )
}

export default Teachers
