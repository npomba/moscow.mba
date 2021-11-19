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
  width = '25'
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
      className={stls.container}
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
        className={classNames({
          'inputs-flex': true,
          'inputs-flex--alt': alpha
        })}>
        <InputName register={register} errors={errors} width={width} />
        <InputPhone register={register} errors={errors} width={width} />
        <InputEmail register={register} errors={errors} width={width} />
        <InputSubmit errors={errors} alpha={alpha} width={width} />
      </div>
      {policyPrivacy && (
        <div className='personal-data'>
          {SetString(lang.privacyPolicyFirst)}{' '}
          {/* <a href=''>{SetString(lang.privacyPolicySecond)}</a> */}
          {SetString(lang.privacyPolicySecond)}
        </div>
      )}
    </form>
  )
}

export default FormAlpha
