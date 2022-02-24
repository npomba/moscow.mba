import stls from '@/styles/components/inputs/InputName.module.sass'
import cn from 'classnames'
import { SetString, handlePlaceholder } from '@/helpers/index'
import { index } from '@/data/index'

const InputName = ({ register, errors, width = '25' }) => {
  return (
    <div className={`input-block width-${width}`}>
      <input
        type='text'
        aria-label={SetString(index.inputName)}
        {...register('name', {
          maxLength: {
            value: 32,
            message: `*${SetString(index.formErrLongName)}`
          }
        })}
        onKeyUp={e => handlePlaceholder(e)}
      />
      <div
        className={cn({
          'input-placeholder': true
        })}>
        {SetString(index.inputName)}
      </div>
      <p className='inpt-err-msg'>{errors.name && errors.name.message}</p>
    </div>
  )
}

export default InputName
