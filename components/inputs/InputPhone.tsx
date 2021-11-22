import stls from '@/styles/components/inputs/InputPhone.module.sass'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import { handlePlaceholder } from '@/helpers/index'

const InputPhone = ({ register, errors, width = '25' }) => {
  return (
    <div className={`input-block width-${width}`}>
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
        onKeyUp={e => handlePlaceholder(e)}
      />
      <div className='input-placeholder'>{SetString(lang.inputPhone)}</div>
      <p className='inpt-err-msg'>{errors.phone && errors.phone.message}</p>
    </div>
  )
}

export default InputPhone
