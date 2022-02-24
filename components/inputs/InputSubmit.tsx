import stls from '@/styles/components/inputs/InputSubmit.module.sass'
import cn from 'classnames'
import { SetString } from '@/helpers/index'
import { IconArrowTopRight } from '@/components/icons'
import { index } from '@/data/index'

const InputSubmit = ({ errors, alpha = false, width = '25', ...props }) => {
  return (
    <div className={`input-block width-${width}`}>
      <button
        {...props}
        type='submit'
        className={cn(props.className, {
          button: !alpha,
          [stls.button]: alpha,
          'white-button': !alpha,
          'btn-disabled': errors.name || errors.phone || errors.email
        })}
        disabled={errors.name || errors.phone || errors.email ? true : false}>
        {alpha ? SetString(index.inputSubmitAlt) : SetString(index.inputSubmit)}
        {alpha && (
          <div className={stls.buttonArrow}>
            <IconArrowTopRight width={'17'} height={'17'} />
          </div>
        )}
      </button>
    </div>
  )
}

export default InputSubmit
