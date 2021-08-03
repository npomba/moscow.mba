import stls from '@/styles/components/sections/Teachers.module.sass'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import useAt from '@/components/hooks/useAt'
import { useRouter } from 'next/router'
import Image from 'next/image'
import PopupForm from '@/components/popups/PopupForm'
import SetString from '@/components/hooks/SetString'
import lang from 'data/translation/about'
import imagesData from '@/data/images/teachers'
import { IconCheck } from '@/components/icons'
import { base64pixel } from '@/config/index'

const splitParaText = (string, splitBy) => {
  const indexOfWordToSplitBy = string.indexOf(splitBy)

  if (indexOfWordToSplitBy === -1) return [string, '']

  const firstPartOfString = string.slice(0, indexOfWordToSplitBy)
  const secondPartOfString = string.slice(indexOfWordToSplitBy)

  return [firstPartOfString, secondPartOfString]
}

const Teachers = ({
  programTitle = null,
  programId = null,
  atStandAlonePage = false
}) => {
  const at = useAt()
  const router = useRouter()
  const detailSectionClasses = [stls.container]

  if (atStandAlonePage) detailSectionClasses.push(stls.standalonePage)

  const title = at.profession ? (
    <h2>
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
    at.profession ? lang.teachersProsTitleSecondary : lang.teachersProsTitleMain
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
      <section className={detailSectionClasses.join(' ')}>
        <div className={stls.sectionPl}>
          <div className={stls.titlePl}>
            {SetString(lang.teachersTitleLabel)}
          </div>
          <div className={stls.content}>
            {title}
            {!at.profession && (
              <div className={stls.text}>{SetString(lang.teachersDics)}</div>
            )}
            <div className={`${stls.twoImages} ${stls.detailImage}`}>
              <div className={`${stls.image} ${stls.pic1}`}>
                <Image
                  src={imagesData.circleSpeakerOne.src}
                  alt={SetString(imagesData.circleSpeakerOne.alt)}
                  width={425}
                  height={422}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
              <div className={`${stls.image} ${stls.pic2}`}>
                <Image
                  src={imagesData.circleSpeakerTwo.src}
                  alt={SetString(imagesData.circleSpeakerTwo.alt)}
                  width={236}
                  height={236}
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
            </div>
            <ul className={stls.detailList}>
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
                  <h5>{SetString(lang.teachersListItemTitleThird)}</h5>
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
          <h3 className={stls.teachersPros}>
            {teachersProsPartOne}
            <span className={stls.breakLine}>{teachersProsPartTwo}</span>
          </h3>
        </div>
        <ul className={stls.teachersList}>
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
