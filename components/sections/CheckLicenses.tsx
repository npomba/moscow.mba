import RosObrNadzorInsignia from '@/components/svgs/SVGRosObrNadzorInsignia'
import LargeBtn from '@/components/general/LargeBtn'
import stls from '@/styles/modules/MoreInfo.module.sass'

const CheckLicenses = () => {
  const containerClasses = [stls.container, stls.darkBgColor, stls.noMargin]

  return (
    <div className={containerClasses.join(' ')}>
      <div className={stls.content}>
        <RosObrNadzorInsignia />
        <h4 className={stls.title}>
          Проверьте действующие лицензии на сайте РОСОБРНАДЗОРА
        </h4>
        <LargeBtn
          btnText='ПРОВЕРИТЬ'
          redBgColor={true}
          linkTo='http://isga.obrnadzor.gov.ru/rlic/details/2df11621-2d30-4173-9389-2fecc24a7639/'
        />
      </div>
    </div>
  )
}

export default CheckLicenses
