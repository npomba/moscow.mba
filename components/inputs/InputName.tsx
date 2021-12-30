import stls from '@/styles/components/inputs/InputName.module.sass'
import cn from 'classnames'
import { SetString, handlePlaceholder } from '@/helpers/index'
import lang from '@/data/translation/index'

const InputName = ({ register, errors, width = '25' }) => {
  return (
    <div className={`input-block width-${width}`}>
      <input
        type='text'
        aria-label={SetString(lang.inputName)}
        {...register('name', {
          maxLength: {
            value: 32,
            message: `*${SetString(lang.formErrLongName)}`
          }
        })}
        onKeyUp={e => handlePlaceholder(e)}
      />
      <div
        className={cn({
          'input-placeholder': true
        })}>
        {SetString(lang.inputName)}
      </div>
      <p className='inpt-err-msg'>{errors.name && errors.name.message}</p>
    </div>
  )
}

export default InputName
