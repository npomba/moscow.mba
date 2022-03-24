import stls from '@/styles/components/forms/FormAlpha.module.sass'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useForm } from 'react-hook-form'
import { useAt } from '@/hooks/index'
import { onSubmitForm, getClassNames } from '@/helpers/index'
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
  globalStyle = true
}) => {
  const container = getClassNames({ classNames })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TypeFormValues>()

  const { asPath } = useRouter()

  const at = useAt()

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
        className={cn(container, {
          'inputs-flex': globalStyle,
          'inputs-flex--alt': alpha
        })}>
        <InputName register={register} errors={errors} width={width} />
        <InputPhone register={register} errors={errors} width={width} />
        <InputEmail register={register} errors={errors} width={width} />
        <InputSubmit errors={errors} alpha={alpha} width={width} />
      </div>
      {policyPrivacy && (
        <div
          className={cn({
            'personal-data': globalStyle
          })}>
          {/* TODO: should be a link here to privacy policy */}
          {at.en
            ? 'By pressing submit button, you agree to'
            : 'Нажимая на кнопку, Вы даете согласие на обработку своих'}{' '}
          <span>{at.en ? 'Privacy Policy' : 'персональных данных'}</span>
        </div>
      )}
    </form>
  )
}

export default FormAlpha
