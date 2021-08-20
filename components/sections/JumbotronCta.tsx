import stls from '@/styles/components/sections/JumbotronCta.module.sass'
import classNames from 'classnames'
import 'reactjs-popup/dist/index.css'
import Image from 'next/image'
import Link from 'next/link'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'
import onSubmitForm from '@/components/hooks/onSubmitForm'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import handlePlaceholder from '@/components/general/forms/handlePlaceholder'
import PopupThankyou from '@/components/popups/PopupThankyou'
import Popup from 'reactjs-popup'
import PopupLoader from '@/components/popups/PopupLoader'
import Until from '@/components/costs/Until'
import { useRouter } from 'next/router'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import { IconArrowTopRight } from '@/components/icons'
import InfoRectangle from '@/components/general/InfoRectangle'

type FormValues = {
  name: string
  phone: string
  email: string
}

const JumbotronCta = ({ programTitle = null, programId = null }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)
  const closeModal = () => setOpen(false)
  const closeLoadingModal = () => setOpenLoader(false)

  const { asPath } = useRouter()

  const onSubmitFormThis = async values => {
    setOpenLoader(o => !o)
    values.programTitle = programTitle
    values.leadPage = asPath
    const utms = JSON.parse(sessionStorage.getItem('utms'))
    values.utms = utms
    sessionStorage.removeItem('utms')
    const referer = JSON.parse(sessionStorage.getItem('referer'))
    values.referer = referer
    sessionStorage.removeItem('referer')
    const req = await onSubmitForm(values)
    if (req === 200) {
      closeLoadingModal()
      setOpen(o => !o)
      reset()
    } else {
      console.log('err')
    }
  }

  const handleKeyUp = e => {
    handlePlaceholder(e)
  }

  return (
    <section className={stls.container}>
      <Popup open={openLoader} onClose={closeLoadingModal}>
        <PopupLoader closePopUp={closeLoadingModal} />
      </Popup>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <PopupThankyou
          closePopUp={closeModal}
          programId={programId}
          programTitle={programTitle}
        />
      </Popup>
      <div className={stls.image}>
        <Image
          src='/assets/images/jumbotron_1.jpg'
          alt={'Аудитория MBA'}
          layout='fill'
        />
      </div>
      <div className={stls.generalContainer}>
        <div className={stls.content}>
          <Breadcrumbs />
          <div className={stls.flexContainer}>
            <div className={stls.descContainer}>
              <ul className={stls.desktopLinksList}>
                <li className={stls.linkItem}>
                  {/* <Link href='/programs/industry'>
                    <a>INDUSTRY MBA</a>
                  </Link> */}
                  INDUSTRY MBA
                </li>
                <li className={stls.desktopLinkBorder}></li>
                <li className={stls.linkItem}>
                  {/* <Link href='/programs/professional'>
                    <a>PROFESSIONAL MBA</a>
                  </Link> */}
                  PROFESSIONAL MBA
                </li>
                <li className={stls.desktopLinkBorder}></li>
                <li className={stls.linkItem}>
                  {/* <Link href='/programs/mini'>
                    <a>MINI MBA</a>
                  </Link> */}
                  MINI MBA
                </li>
                <li className={stls.desktopLinkBorder}></li>
                <li className={stls.linkItem}>{SetString(lang.courses)}</li>
              </ul>

              <ul className={stls.mobileLinksList}>
                <li className={stls.linkItem}>
                  <Link href='/programs' locale='ru'>
                    <a>{SetString(lang.programsMbaMobileLink)}</a>
                  </Link>
                </li>
              </ul>
              <h1 className={stls.title}>
                {SetString(lang.headerTitlePreHighlight)}{' '}
                <span className={stls.red}>
                  {SetString(lang.headerTitleHighlight)}
                </span>{' '}
                {SetString(lang.headerTitlePostHighlight)}
              </h1>
              <div className={stls.descTopPart}>
                <span className={stls.red}>
                  {SetString(lang.headerDescTopHightlight)}
                </span>{' '}
                {SetString(lang.headerDescTop)} <Until preposition={true} />!
              </div>
              <div className={stls.descForm}>
                <p className={stls.descBottomPart}>
                  {SetString(lang.headerDescription)}
                </p>
                <form
                  method='post'
                  className='simple-form support-form embedded-form'
                  onSubmit={handleSubmit(onSubmitFormThis)}>
                  <div className='inputs-flex inputs-flex--alt'>
                    <div className='input-block width-25'>
                      <input
                        type='text'
                        aria-label={SetString(lang.inputName)}
                        {...register('name', {
                          maxLength: {
                            value: 32,
                            message: `*${SetString(lang.formErrLongName)}`
                          }
                        })}
                        onKeyUp={handleKeyUp}
                      />
                      <div className='input-placeholder'>
                        {SetString(lang.inputName)}
                      </div>
                      <p className='inpt-err-msg'>
                        {errors.name && errors.name.message}
                      </p>
                    </div>
                    <div className='input-block width-25'>
                      <input
                        type='tel'
                        aria-label={SetString(lang.inputPhone)}
                        {...register('phone', {
                          required: `*${SetString(lang.formErrEmptyPhone)}`,
                          minLength: {
                            value: 5,
                            message: `*${SetString(lang.formErrShortPhone)}`
                          }
                        })}
                        onKeyUp={handleKeyUp}
                      />
                      <div className='input-placeholder'>
                        {SetString(lang.inputPhone)}
                      </div>
                      <p className='inpt-err-msg'>
                        {errors.phone && errors.phone.message}
                      </p>
                    </div>
                    <div className='input-block width-25'>
                      <input
                        type='text'
                        aria-label={SetString(lang.inputEmail)}
                        {...register('email', {
                          pattern: {
                            value:
                              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                            message: `*${SetString(lang.formErrInvalidEmail)}`
                          }
                        })}
                        onKeyUp={handleKeyUp}
                      />
                      <div className='input-placeholder'>
                        {SetString(lang.inputEmail)}
                      </div>
                      <p className='inpt-err-msg'>
                        {errors.email && errors.email.message}
                      </p>
                    </div>
                    <div className='input-block width-25'>
                      <button
                        type='submit'
                        className={classNames(stls.button, {
                          [stls.disabledButton]: errors.name || errors.phone
                        })}
                        disabled={errors.name || errors.phone ? true : false}>
                        {SetString(lang.inputSubmitAlt)}
                        <div className={stls.buttonArrow}>
                          <IconArrowTopRight width={'17'} height={'17'} />
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <ul className={stls.prosList}>
              <li className={stls.prosItem}>
                <div className={stls.prosStatsNumber}>100+</div>
                <p>{SetString(lang.benefitOneDisc)}</p>
              </li>
              <li className={stls.prosSeparator}></li>
              <li className={stls.prosItem}>
                <div className={stls.prosStatsNumber}>2021+</div>
                <p>{SetString(lang.benefitTwoDisc)}</p>
              </li>
              <li className={stls.prosSeparator}></li>

              <li className={stls.prosItem}>
                <div className={stls.prosStatsNumber}>150+</div>
                <p>{SetString(lang.benefitThreeDisc)}</p>
              </li>
              <li className={stls.prosSeparator}></li>

              <li className={stls.prosItem}>
                <div className={stls.prosStatsNumber}>2000+</div>
                <p>{SetString(lang.benefitFourDisc)}</p>
              </li>
            </ul>
          </div>
          <InfoRectangle />
        </div>
      </div>
    </section>
  )
}

export default JumbotronCta
