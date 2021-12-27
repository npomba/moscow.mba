import stls from '@/styles/components/sections/GetStudyPlan.module.sass'
import Popup from 'reactjs-popup'
import PopupForm from '@/components/popups/PopupForm'
import React from 'react'
import Wrapper from '@/components/layout/Wrapper'

const GetStudyPlan = () => {
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <h4 className={stls.title}>Получите полный учебный план</h4>
          <Popup
            trigger={
              <a className={`${stls.btn} ${stls.btnLightBg} ${stls.pointer}`}>
                ПОЛУЧИТЬ
              </a>
            }
            modal
            nested>
            {close => (
              <PopupForm
                title={'Получите полный учебный план'}
                disc={
                  'Оставьте заявку, менеджер пришлет Вам полный учебный план, а также расскажет о программе и возможных скидках'
                }
                closePopUpForm={close}
              />
            )}
          </Popup>
        </div>
      </Wrapper>
    </section>
  )
}

export default GetStudyPlan
