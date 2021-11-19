import stls from '@/styles/components/popups/PopupForm.module.sass'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import { onSubmitForm } from '@/helpers/index'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { IconClose } from '@/components/icons'
import { useRouter } from 'next/router'
import LeadLoaderThankyou from '@/components/general/LeadLoaderThankyou'
import {
  InputName,
  InputPhone,
  InputEmail,
  InputSubmit
} from '@/components/inputs'

type FormValues = {
  name: string
  phone: string
  email: string
}

const Form = ({
  closePopUpForm,
  programTitle = null,
  programId = null,
  title = SetString(lang.helpToChooseTitle),
  disc = SetString(lang.helpToChooseDics),
  promoCourseLink = null
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)
  const { asPath } = useRouter()

  return (
    <div className='popup-modal'>
      <LeadLoaderThankyou
        open={open}
        setOpen={setOpen}
        openLoader={openLoader}
        setOpenLoader={setOpenLoader}
        programId={programId}
        programTitle={programTitle}
      />
      <div className='popup-content-origin red-bg'>
        <h2>{title}</h2>
        <div className='desc'>
          {!programTitle && disc}{' '}
          {programTitle &&
            !promoCourseLink &&
            `Оставьте заявку и получите консультацию по программе ${programTitle}, узнайте возможные варианты скидок и требования к поступлению`}
          {promoCourseLink &&
            'Оставьте заявку и получите консультацию по программе MBA, узнайте точную стоимость, возможные варианты скидок и требования к поступлению'}
        </div>
        <form
          method='post'
          className='simple-form support-form'
          onSubmit={handleSubmit(values =>
            onSubmitForm({
              values,
              programTitle,
              promoCourseLink,
              setOpenLoader,
              asPath,
              setOpen,
              reset
            })
          )}>
          <div className='inputs-flex'>
            <InputName register={register} errors={errors} width='33' />
            <InputPhone register={register} errors={errors} width='33' />
            <InputEmail register={register} errors={errors} width='33' />
            <InputSubmit errors={errors} width='33' />
          </div>
          <div className='personal-data'>
            {SetString(lang.privacyPolicyFirst)}{' '}
            {/* <a href=''>{SetString(lang.privacyPolicySecond)}</a> */}
            {SetString(lang.privacyPolicySecond)}
          </div>
        </form>
        <button className='mfp-close' type='button' onClick={closePopUpForm}>
          <IconClose />
        </button>
      </div>
    </div>
  )
}

export default Form
