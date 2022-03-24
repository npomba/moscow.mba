import stls from '@/styles/components/inputs/InputName.module.sass'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { handlePlaceholder } from '@/helpers/index'

const InputName = ({ register, errors, width = '25' }) => {
  const at = useAt()
  return (
    <div className={`input-block width-${width}`}>
      <input
        type='text'
        aria-label={at.en ? 'Name' : 'Имя'}
        {...register('name', {
          maxLength: {
            value: 32,
            message: `*${
              at.en
                ? 'Name should be no longer than 32 symbols'
                : 'Введите имя не длинее, чем 32 символа'
            }`
          }
        })}
        onKeyUp={e => handlePlaceholder(e)}
      />
      <div
        className={cn({
          'input-placeholder': true
        })}>
        {at.en ? 'Name' : 'Имя'}
      </div>
      <p className='inpt-err-msg'>{errors.name && errors.name.message}</p>
    </div>
  )
}

export default InputName
