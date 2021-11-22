import stls from '@/styles/components/inputs/InputEmail.module.sass'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import { handlePlaceholder } from '@/helpers/index'

const InputEmail = ({ register, errors, width = '25' }) => {
  return (
    <div className={`input-block width-${width}`}>
      <input
        type='text'
        aria-label={SetString(lang.inputEmail)}
        {...register('email', {
          pattern: {
            value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            message: `*${SetString(lang.formErrInvalidEmail)}`
          }
        })}
        onKeyUp={e => handlePlaceholder(e)}
      />
      <div className='input-placeholder'>{SetString(lang.inputEmail)}</div>
      <p className='inpt-err-msg'>{errors.email && errors.email.message}</p>
    </div>
  )
}

export default InputEmail
