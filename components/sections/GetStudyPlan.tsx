import stls from '@/styles/modules/MoreInfo.module.sass'
import Popup from 'reactjs-popup'
import PopUpForm from '@/components/popups/Form'

const GetStudyPlan = () => {
  return (
    <>
      <div className={stls.container}>
        <div className={stls.content}>
          <h4 className={stls.title}>Получите полный учебный план</h4>
          <Popup
            trigger={<a className={`${stls.btn} ${stls.pointer}`}>ПОЛУЧИТЬ</a>}
            modal
            nested>
            {close => (
              <PopUpForm
                title={'Получите полный учебный план'}
                disc={
                  'Оставьте заявку, менеджер пришлет Вам полный учебный план, а также расскажет о программе и возможных скидках'
                }
                closePopUpForm={close}
              />
            )}
          </Popup>
        </div>
      </div>
    </>
  )
}

export default GetStudyPlan
