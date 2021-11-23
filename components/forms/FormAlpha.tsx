import stls from '@/styles/components/forms/FormAlpha.module.sass'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import { SetString, onSubmitForm } from '@/helpers/index'
import lang from '@/data/translation/index'
import {
  InputEmail,
  InputName,
  InputPhone,
  InputSubmit
} from '@/components/inputs'
import getClassNames from '@/helpers/getClassNames'

type TypeFormValues = {
  name: string
  phone: string
  email: string
}

const FormAlpha = ({
  programTitle,
  setOpenLoader,
  setOpen,
  policyPrivacy = true,
  alpha = false,
  width = '25',
  cs = null
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TypeFormValues>()

  const { asPath } = useRouter()



  return (
    <form
      method='post'
      className='simple-form'
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
      <div
        className={classNames(cs?.content, {
          'inputs-flex': true,
          'inputs-flex--alt': alpha,
        })}>
        <InputName className={cs?.input} register={register} errors={errors} width={width} />
        <InputPhone className={cs?.input} register={register} errors={errors} width={width} />
        <InputEmail className={cs?.input} register={register} errors={errors} width={width} />
        <InputSubmit className={cs?.btn} errors={errors} alpha={alpha} width={width} />
      </div>
      {policyPrivacy && (
        <div className={classNames(cs?.order, {
          'personal-data': true
        })}>
          {SetString(lang.privacyPolicyFirst)}{' '}
          {/* <a href=''>{SetString(lang.privacyPolicySecond)}</a> */}
          {SetString(lang.privacyPolicySecond)}
        </div>
      )}
    </form>
  )
}

export default FormAlpha
