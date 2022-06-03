import stls from '@/styles/components/sections/CheckLicenses.module.sass'
import { IconRuCoatOfArms } from '@/components/icons'

const CheckLicenses = () => {
  const containerClasses = [stls.container, stls.darkBgColor, stls.noMargin]
  const btnStyles = [stls.btn, stls.pointer]

  return (
    <div className={containerClasses.join(' ')}>
      <IconRuCoatOfArms classNames={[stls.IconRuCoatOfArms]} />
      <div className={stls.content}>
        <h4 className={stls.title}>
          Проверьте действующие лицензии на сайте РОСОБРНАДЗОРА
        </h4>
        <a
          href='https://islod.obrnadzor.gov.ru/rlic/details/2df11621-2d30-4173-9389-2fecc24a7639/'
          target='_blank'
          rel='noreferrer'
          className={btnStyles.join(' ')}>
          ПРОВЕРИТЬ
        </a>
      </div>
    </div>
  )
}

export default CheckLicenses
