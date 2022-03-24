import stls from '@/styles/components/sections/Teachers.module.sass'
import { TypeLibTeacher, TypeLibTeachers } from '@/types/index'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront, base64pixel } from '@/config/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { PopupForm, PopupTeacher } from '@/components/popups'
import { IconCheck, IconMoreThan } from '@/components/icons'

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

const LiTeacherContent = ({
  teacher,
  atStandAlonePage
}: {
  teacher: TypeLibTeacher | null
  atStandAlonePage?: boolean
}) => {
  return (
    <div className={stls.teachersItem}>
      <div className={stls.teachersItemWrapper}>
        <div className={stls.image}>
          <Image
            src={teacher?.portrait?.url}
            alt={teacher?.name}
            width={teacher?.portrait?.width}
            height={teacher?.portrait?.height}
            layout='responsive'
            placeholder='blur'
            blurDataURL={base64pixel}
          />
        </div>
        <div className={stls.teachersItemContent}>
          <div>
            <div className={stls.name}>{teacher?.name}</div>
            <p className={stls.description}>{teacher?.description}</p>
          </div>
          <div
            className={cn(stls.bio, stls.phone, {
              [stls.atStandAlonePage]: atStandAlonePage
            })}>
            <p
              className={cn(stls.bioP, {
                [stls.atStandAlonePage]: atStandAlonePage
              })}>
              Биография
            </p>
            <IconMoreThan classNames={[stls.icon]} />
          </div>
        </div>
      </div>
      <div
        className={cn(stls.bio, stls.tabletLaptopDesktopWidescreen, {
          [stls.atStandAlonePage]: atStandAlonePage
        })}>
        <p
          className={cn(stls.bioP, {
            [stls.atStandAlonePage]: atStandAlonePage
          })}>
          Биография
        </p>
        <IconMoreThan classNames={[stls.icon]} />
      </div>
    </div>
  )
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
  const showMoreTeachersAddendum = 4

  const defaultTeachers = [
    {
      name: at.en ? 'Itskhak Pintosevich' : 'Ицхак Пинтосевич',
      desc: at.en
        ? ''
        : 'Эксперт по личностному росту и развитию бизнеса, почетный профессор университета «Синергия»',
      img: {
        src: '/assets/images/teachers/teacher-1.jpg',
        alt: at.en ? 'Itskhak Pintosevich' : 'Ицхак Пинтосевич'
      }
    },
    {
      name: at.en ? 'Ryakovskiy Sergey' : 'Ряковский Сергей',
      desc: at.en
        ? ''
        : 'Эксперт по стратегическому менеджменту. Автор многочисленных пособий по управлению персоналом',
      img: {
        src: '/assets/images/teachers/teacher-2.jpg',
        alt: at.en ? 'Ryakovskiy Sergey' : 'Ряковский Сергей'
      }
    },
    {
      name: at.en ? 'Konoplyanskiy Dmitriy' : 'Коноплянский Дмитрий',
      desc: at.en
        ? ''
        : 'Основатель сети ювелирных салонов в Москве и регионах. Советник группы «НЛМК», «НК РОСНЕФТЬ»',
      img: {
        src: '/assets/images/teachers/teacher-3.jpg',
        alt: at.en ? 'Konoplyanskiy Dmitriy' : 'Коноплянский Дмитрий'
      }
    },
    {
      name: at.en ? 'Borisov Aleksandr' : 'Борисов Александр',
      desc: at.en
        ? ''
        : 'Эксперт по бизнес-планированию, инвестиционному и финансовому анализу',
      img: {
        src: '/assets/images/teachers/teacher-4.jpg',
        alt: at.en ? 'Borisov Aleksandr' : 'Борисов Александр'
      }
    },
    {
      name: at.en ? 'Aleksandr Doderer' : 'Александр Додерер',
      desc: at.en
        ? ''
        : 'Основатель и глава агентства по стратегическим коммуникациям GRUPPE DREI.',
      img: {
        src: '/assets/images/teachers/teacher-5.jpg',
        alt: at.en ? 'Aleksandr Doderer' : 'Александр Додерер'
      }
    },
    {
      name: at.en ? 'Yannik Transhye' : 'Янник Траншье',
      desc: at.en
        ? ''
        : 'Эксперт в сфере инновационного менеджмента, технологический брокер, предприниматель',
      img: {
        src: '/assets/images/teachers/teacher-6.jpg',
        alt: at.en ? 'Yannik Transhye' : 'Янник Траншье'
      }
    },
    {
      name: at.en ? 'Baranova Tatyana' : 'Баранова Татьяна',
      desc: at.en
        ? ''
        : 'Эксперт по деловому этикету и протоколу. «Про ЭТИКЕТ», основатель образовательного проекта',
      img: {
        src: '/assets/images/teachers/teacher-7.jpg',
        alt: at.en ? 'Baranova Tatyana' : 'Баранова Татьяна'
      }
    },
    {
      name: at.en ? 'Dubovyk Serhey' : 'Дубовик Сергей',
      desc: at.en
        ? ''
        : 'Специалист в области продаж и управления коммерческой деятельностью.',
      img: {
        src: '/assets/images/teachers/teacher-8.jpg',
        alt: at.en ? 'Dubovyk Serhey' : 'Дубовик Сергей'
      }
    }
  ]

  const title =
    at.profession || at.course ? (
      <h2 className={stls.titleProfession}>
        {at.en ? '' : 'Преподаватели курса -'}{' '}
        <span className='red'>{at.en ? '' : 'практикующие'} </span>
        {at.en ? '' : 'эксперты'}
      </h2>
    ) : (
      <h2>
        {at.en ? 'Russian and' : 'Российские и'}{' '}
        <span className='red'>{at.en ? 'international' : 'зарубежные'} </span>
        {at.en ? 'experts of the program' : 'эксперты программы'}
      </h2>
    )

  const firstParaText =
    at.profession || at.course
      ? at.en
        ? ''
        : 'Имеют опыт работы в крупных российских и зарубежных организациях'
      : at.en
      ? 'They have implemented major projects on the markets of Europe and USA'
      : 'Реализовывали крупные проекты на рынках Европы и США'

  const secondParaText = at.en
    ? 'They have passed Moscow Academy’s multi-stage verification and have teaching accreditation'
    : 'Прошли многоэтапную проверку специалистов академии и имеют аккредитацию на преподавание'
  const teachersProsTitle =
    !at.profession &&
    !at.course &&
    (at.en
      ? 'More than 150 international-level professors'
      : 'Более 150 профессоров международного уровня')

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

  const UITeachers: TypeLibTeachers | null =
    teachers?.filter((teacher, idx) => teacher && idx < shownTeachersCount) ||
    defaultTeachers?.filter(
      (teacher, idx) => teacher && idx < shownTeachersCount
    )

  return (
    <>
      <section
        className={cn({
          [stls.container]: true,
          [stls.standalonePage]: atStandAlonePage
        })}>
        <Wrapper column>
          <div className={stls.sectionPl}>
            <div className={stls.titlePl}>{at.en ? 'experts' : 'эксперты'}</div>
            <div className={stls.content}>
              {title}
              {!at.profession && !at.course && (
                <div className={stls.text}>
                  {at.en
                    ? 'Learn from the unique foreign experts who adapted their experience for Russian market'
                    : 'Перенимайте уникальный опыт международных экспертов, адаптированный под рынок РФ'}
                </div>
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
                    src={'/assets/images/speaker_1.jpg'}
                    alt={
                      at.en
                        ? 'Expert during a talk'
                        : 'Спикер на сцене даёт речь'
                    }
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
                    src={'/assets/images/speaker_2.jpg'}
                    alt={
                      at.en
                        ? 'Expert during a talk'
                        : 'Спикер на сцене даёт речь'
                    }
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
                    <h5>{at.en ? 'Practitioners' : 'Практикующие эксперты'}</h5>
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
                    <h5>
                      {at.en
                        ? 'Multi-stage verification'
                        : 'Прошли многоэтапную проверку'}
                    </h5>
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
                        ? at.en
                          ? 'Rich teaching experience'
                          : 'Большой опыт преподавания'
                        : at.en
                        ? 'International teaching experience'
                        : 'Международный опыт преподавания'}
                    </h5>
                    <p>
                      {at.profession || at.course
                        ? at.en
                          ? ''
                          : 'Преподают в ведущих российских учебных заведениях'
                        : at.en
                        ? 'They work in the leading world-class business schools'
                        : 'Преподают в ведущих бизнес-школах мира'}
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
            {UITeachers?.length > 0 &&
              UITeachers.map((teacher, idx) => (
                <li
                  key={`${teacher?.name || 'LiTeacherContent'}-${idx}`}
                  className={stls.teachersListItem}>
                  {atStandAlonePage || at.about ? (
                    <Link
                      href={`${routesFront.teachers}/${
                        teacher?.slug || 'teacher'
                      }`}>
                      <a className={stls.a}>
                        <LiTeacherContent
                          teacher={teacher}
                          atStandAlonePage={atStandAlonePage}
                        />
                      </a>
                    </Link>
                  ) : (
                    <Popup
                      trigger={
                        <a href='#!' className={stls.a}>
                          <LiTeacherContent
                            teacher={teacher}
                            atStandAlonePage={atStandAlonePage}
                          />
                        </a>
                      }
                      modal
                      nested>
                      {close => (
                        <PopupTeacher close={close} teacher={teacher} />
                      )}
                    </Popup>
                  )}
                </li>
              ))}
          </ul>
          {UITeachers?.length === 0 && (
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
                      {at.en ? "Get full teacher's list" : 'Запросить список'}
                    </button>
                  }
                  modal
                  nested>
                  {close => (
                    <PopupForm
                      programId={programId}
                      programTitle={programTitle}
                      closePopUpForm={close}
                      title={
                        at.en
                          ? "Get teacher's list"
                          : 'Получить полный список преподавателей'
                      }
                      disc={
                        at.en
                          ? 'Submit a request and receive a consultation on experts, programs, discounts, and requirements'
                          : 'Оставьте заявку и получите консультацию по преподавателям, программам MBA, а также узнайте возможные варианты скидок и требования к поступлению'
                      }
                    />
                  )}
                </Popup>
              </div>
            </div>
          )}
          {UITeachers?.length > 0 && (
            <div className={stls.btn}>
              {shownTeachersCount >= teachers?.length ? (
                <Popup
                  trigger={
                    <button
                      className='button'
                      onClick={() =>
                        setShownTeachersCount(
                          shownTeachersCount + showMoreTeachersAddendum
                        )
                      }>
                      {at.en ? 'Request full list' : 'Запросить полный список'}
                    </button>
                  }
                  modal
                  nested>
                  {close => (
                    <PopupForm
                      programId={programId}
                      programTitle={programTitle}
                      closePopUpForm={close}
                      title={
                        at.en
                          ? 'Get to know the experts'
                          : 'Узнайте своих экспертов'
                      }
                      disc={
                        at.en
                          ? 'Submit a request and receive a consultation on experts, programs, discounts, and requirements'
                          : 'Оставьте заявку и получите консультацию по преподавателям, программам MBA, а также узнайте возможные варианты скидок и требования к поступлению'
                      }
                    />
                  )}
                </Popup>
              ) : (
                <button
                  className='button'
                  onClick={() =>
                    setShownTeachersCount(
                      shownTeachersCount + showMoreTeachersAddendum
                    )
                  }>
                  {at.en
                    ? 'Show more'
                    : `Ещё ${showMoreTeachersAddendum} преподавателя${
                        teachers?.length ? ` из ${teachers.length}` : undefined
                      }`}
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
