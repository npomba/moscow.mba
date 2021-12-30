import stls from '@/styles/components/inputs/InputPhone.module.sass'
import cn from 'classnames'
import { SetString, handlePlaceholder } from '@/helpers/index'
import lang from '@/data/translation/index'

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
      <div
        className={cn({
          'input-placeholder': true
        })}>
        {SetString(lang.inputPhone)}
      </div>
      <p className='inpt-err-msg'>{errors.phone && errors.phone.message}</p>
    </div>
  )
}

export default InputPhone
