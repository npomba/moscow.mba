import stls from '@/styles/components/forms/FormAlpha.module.sass'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { SetString, onSubmitForm, getClassNames } from '@/helpers/index'
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
                     width = '25',
                     classNames = [],
                     globalStyle = true,
                   }) => {
  const container = getClassNames({ classNames })
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
        className={classnames(container, {
          'inputs-flex': globalStyle,
          'inputs-flex--alt': alpha
        })}>
        <InputName register={register} errors={errors} width={width} />
        <InputPhone register={register} errors={errors} width={width} />
        <InputEmail register={register} errors={errors} width={width} />
        <InputSubmit errors={errors} alpha={alpha} width={width} />
      </div>
      {policyPrivacy && (
        <div className={classnames({
          'personal-data': globalStyle
        })}>
          {SetString(lang.privacyPolicyFirst)}{' '}
          {/* <a href=''>{SetString(lang.privacyPolicySecond)}</a> */}
          <span>{SetString(lang.privacyPolicySecond)}</span>
        </div>
      )}
    </form>
  )
}

export default FormAlpha
