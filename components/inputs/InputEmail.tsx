import stls from '@/styles/components/inputs/InputEmail.module.sass'
import cn from 'classnames'
import { SetString, handlePlaceholder } from '@/helpers/index'
import { index } from '@/data/index'

const InputEmail = ({ register, errors, width = '25', ...props }) => {
  return (
    <div className={`input-block width-${width} ${props.className}`}>
      <input
        {...props}
        type='email'
        aria-label={SetString(index.inputEmail)}
        {...register('email', {
          pattern: {
            value:
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            message: `*${SetString(index.formErrInvalidEmail)}`
          }
        })}
        onKeyUp={e => handlePlaceholder(e)}
      />
      <div
        className={cn({
          'input-placeholder': true
        })}>
        {SetString(index.inputEmail)}
      </div>
      <p className='inpt-err-msg'>{errors.email && errors.email.message}</p>
    </div>
  )
}

export default InputEmail
