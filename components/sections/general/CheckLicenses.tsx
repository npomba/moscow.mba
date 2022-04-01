import stls from '@/styles/components/sections/CheckLicenses.module.sass'
import { IconRosObrInsignia } from '@/components/icons'

const CheckLicenses = () => {
  const containerClasses = [stls.container, stls.darkBgColor, stls.noMargin]
  const btnStyles = [stls.btn, stls.pointer]

  return (
    <div className={containerClasses.join(' ')}>
      <div className={stls.content}>
        <IconRosObrInsignia />
        <h4 className={stls.title}>
          Проверьте действующие лицензии на сайте РОСОБРНАДЗОРА
        </h4>
        <a
          href='https://islod.obrnadzor.gov.ru/rlic/details/0B100E0A-0A0B-110B-0D10-0E13110C0C111010110E/'
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
