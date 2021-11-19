import stls from '@/styles/components/sections/ContactUs.module.sass'
import classNames from 'classnames'
import { SetString, useAt } from '@/helpers/index'
import lang from '@/data/translation/index'
import { onSubmitForm } from '@/helpers/index'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/router'
import LeadLoaderThankyou from '@/components/general/LeadLoaderThankyou'
import {
  InputEmail,
  InputName,
  InputPhone,
  InputSubmit
} from '@/components/inputs'

type FormValues = {
  name: string
  phone: string
  email: string
}

const ContactUs = ({
  programTitle = null,
  programId = null,
  title = SetString(lang.helpToChooseTitle),
  titleNewStr = null,
  disc = SetString(lang.helpToChooseDics),
  overlapsFooter = false
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

  const at = useAt()

  return (
    <section
      className={classNames(stls.container, {
        [stls.overlapsFooter]: overlapsFooter
      })}>
      <LeadLoaderThankyou
        open={open}
        setOpen={setOpen}
        openLoader={openLoader}
        setOpenLoader={setOpenLoader}
        programId={programId}
        programTitle={programTitle}
      />
      <h2 className={stls.title}>
        {title}
        {titleNewStr && (
          <>
            <br /> {titleNewStr}
          </>
        )}
      </h2>
      <div className={stls.desc}>
        {at.course || at.profession
          ? SetString(lang.helpToChooseDicsProfessionCourse)
          : disc}
      </div>

      <form
        method='post'
        className='simple-form support-form embedded-form'
        onSubmit={handleSubmit(values =>
          onSubmitForm({
            values,
            programTitle,
            setOpenLoader,
            asPath,
            setOpen,
            reset
          })
        )}>
        <div className='inputs-flex'>
          <InputName register={register} errors={errors} />
          <InputPhone register={register} errors={errors} />
          <InputEmail register={register} errors={errors} />
          <InputSubmit errors={errors} />
        </div>
        <div className='personal-data'>
          {SetString(lang.privacyPolicyFirst)}{' '}
          {/* <a href=''>{SetString(lang.privacyPolicySecond)}</a> */}
          {SetString(lang.privacyPolicySecond)}
        </div>
      </form>
    </section>
  )
}

export default ContactUs
