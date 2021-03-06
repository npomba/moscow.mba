import stls from '@/styles/components/inputs/InputSubmit.module.sass'
import cn from 'classnames'
import { colors } from '@/config/index'
import { useAt } from '@/hooks/index'
import { IconArrowTopRight } from '@/components/icons'

const InputSubmit = ({ errors, alpha = false, width = '25', ...props }) => {
  const at = useAt()

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
        {alpha
          ? at.en
            ? 'Submit'
            : 'Отправить'
          : at.en
          ? 'Submit'
          : 'Оставить заявку'}
        {alpha && (
          <div className={stls.IconArrowTopRightContainer}>
            <IconArrowTopRight
              classNames={[stls.IconArrowTopRight]}
              color={colors.psi}
            />
          </div>
        )}
      </button>
    </div>
  )
}

export default InputSubmit
