import stls from '@/styles/components/inputs/InputName.module.sass'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import { handlePlaceholder } from '@/helpers/index'

const InputName = ({ register, errors, width = '25' }) => {
  return (
    <div className={`input-block width-${width}`}>
      <input
        type='text'
        className={stls.input}
        aria-label={SetString(lang.inputName)}
        {...register('name', {
          maxLength: {
            value: 32,
            message: `*${SetString(lang.formErrLongName)}`
          }
        })}
        onKeyUp={e => handlePlaceholder(e)}
      />
      <div className='input-placeholder'>{SetString(lang.inputName)}</div>
      <p className='inpt-err-msg'>{errors.name && errors.name.message}</p>
    </div>
  )
}

export default InputName
