import stls from '@/styles/components/sections/Teachers.module.sass'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useAt } from '@/helpers/index'
import { useRouter } from 'next/router'
import Image from 'next/image'
import PopupForm from '@/components/popups/PopupForm'
import { SetString } from '@/helpers/index'
import lang from 'data/translation/about'
import imagesData from '@/data/images/teachers'
import { IconCheck } from '@/components/icons'
import { base64pixel } from '@/config/index'
import classNames from 'classnames'

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
  atStandAlonePage = false
}) => {
  const at = useAt()
  const router = useRouter()

  const title = at.profession ? (
    <h2 className={stls.titleProfession}>
      {SetString(lang.teachersTitleFirstSecondary)}{' '}
      <span className='red'>{SetString(lang.teachersTitleRedSecondary)} </span>
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
    at.profession
      ? lang.teachersListItemDiscSecondary
      : lang.teachersListItemDiscMain
  )
  const secondParaText = SetString(lang.teachersListItemDiscSecond)
  const teachersProsTitle = SetString(
    !at.profession && lang.teachersProsTitleMain
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

  return (
    <>
      <section
        className={classNames({
          [stls.container]: true,
          [stls.standalonePage]: atStandAlonePage
        })}>
        <div className={stls.sectionPl}>
          <div className={stls.titlePl}>
            {SetString(lang.teachersTitleLabel)}
          </div>
          <div className={stls.content}>
            {title}
            {!at.profession && (
              <div className={stls.text}>{SetString(lang.teachersDics)}</div>
            )}
            <div
              className={classNames({
                [stls.twoImages]: true,
                [stls.detailImage]: true,
                [stls.detailImageAtProfession]: at.profession
              })}>
              <div
                className={classNames({
                  [stls.image]: true,
                  [stls.pic1]: true,
                  [stls.pic1AtProfession]: at.profession
                })}>
                <Image
                  src={imagesData.circleSpeakerOne.src}
                  alt={SetString(imagesData.circleSpeakerOne.alt)}
                  width={!at.profession ? 425 : 344}
                  height={!at.profession ? 422 : 342}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div
                className={classNames({
                  [stls.image]: true,
                  [stls.pic2]: true,
                  [stls.pic2AtProfession]: at.profession
                })}>
                <Image
                  src={imagesData.circleSpeakerTwo.src}
                  alt={SetString(imagesData.circleSpeakerTwo.alt)}
                  width={!at.profession ? 236 : 199}
                  height={!at.profession ? 236 : 199}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
            </div>
            <ul
              className={classNames({
                [stls.detailList]: true,
                [stls.detailListProfession]: at.profession
              })}>
              <li>
                <div className={stls.circle}>
                  <IconCheck />
                </div>
                <div>
                  <h5>
                    {SetString(
                      at.profession
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
                    <span className={stls.breakLine}>{secondParaPartTwo}</span>
                  </p>
                </div>
              </li>
              <li>
                <div className={stls.circle}>
                  <IconCheck />
                </div>
                <div>
                  <h5>
                    {at.profession
                      ? SetString(lang.teachersListItemTitleThirdAlt)
                      : SetString(lang.teachersListItemTitleThird)}
                  </h5>
                  <p>
                    {SetString(
                      at.profession
                        ? lang.teachersListItemDiscThirdSecondary
                        : lang.teachersListItemDiscThirdMain
                    )}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {!at.profession && (
            <h3 className={stls.teachersPros}>
              {teachersProsPartOne}
              <span className={stls.breakLine}>{teachersProsPartTwo}</span>
            </h3>
          )}
        </div>
        <ul
          className={classNames({
            [stls.teachersList]: true,
            [stls.teachersListProfession]: at.profession
          })}>
          <li>
            <div className={stls.teachersItem}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-1.jpg'
                  alt={SetString(lang.teachersTeacherOneTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherOneTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherOneDics)}</p>
              </div>
            </div>
          </li>
          <li>
            <div className={stls.teachersItem}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-2.jpg'
                  alt={SetString(lang.teachersTeacherTwoTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherTwoTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherTwoDics)}</p>
              </div>
            </div>
          </li>
          <li>
            <div className={stls.teachersItem}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-3.jpg'
                  alt={SetString(lang.teachersTeacherThreeTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherThreeTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherThreeDics)}</p>
              </div>
            </div>
          </li>
          <li>
            <div className={stls.teachersItem}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-4.jpg'
                  alt={SetString(lang.teachersTeacherFourTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherFourTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherFourDics)}</p>
              </div>
            </div>
          </li>
          <li>
            <div className={stls.teachersItem}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-5.jpg'
                  alt={SetString(lang.teachersTeacherFiveTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherFiveTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherFiveDics)}</p>
              </div>
            </div>
          </li>
          <li>
            <div className={stls.teachersItem}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-6.jpg'
                  alt={SetString(lang.teachersTeacherSixTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherSixTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherSixDics)}</p>
              </div>
            </div>
          </li>
          <li>
            <div className={stls.teachersItem}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-7.jpg'
                  alt={SetString(lang.teachersTeacherSevenTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherSevenTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherSevenDics)}</p>
              </div>
            </div>
          </li>
          <li>
            <div className={stls.teachersItem}>
              <div className={stls.image}>
                <Image
                  src='/assets/images/teachers/teacher-8.jpg'
                  alt={SetString(lang.teachersTeacherEightTitle)}
                  width={269}
                  height={322}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div>
                <div className={stls.name}>
                  {SetString(lang.teachersTeacherEightTitle)}
                </div>
                <p>{SetString(lang.teachersTeacherEightDics)}</p>
              </div>
            </div>
          </li>
        </ul>
        <div className={stls.btn}>
          <Popup
            trigger={
              <button className='button'>
                {SetString(lang.teachersCtaBtn)}
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
        </div>
      </section>
    </>
  )
}

export default Teachers
