import stls from '@/styles/components/inputs/InputPhone.module.sass'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import { handlePlaceholder } from '@/helpers/index'
import classNames from 'classnames'

const InputPhone = ({ register, errors, width = '25', ...props }) => {
  return (
    <div className={`input-block width-${width}`}>
      <input
        {...props}
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
        className={classNames({
          'input-placeholder': true
        })}>
        {SetString(lang.inputPhone)}
      </div>
      <p className='inpt-err-msg'>{errors.phone && errors.phone.message}</p>
    </div>
  )
}

export default InputPhone
