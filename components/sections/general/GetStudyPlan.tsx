import stls from '@/styles/components/sections/GetStudyPlan.module.sass'
import Popup from 'reactjs-popup'
import PopupForm from '@/components/popups/PopupForm'
import { useContext } from 'react'
import { ContextStaticProps } from '@/context/index'
import { Wrapper } from '@/components/layout'

const GetStudyPlan = () => {
  const { program } = useContext(ContextStaticProps)

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
            lockScroll
            nested
            closeOnDocumentClick>
            {/* @ts-expect-error  */}
            {close => (
              <PopupForm
                title={
                  <>
                    Получите полный <br className={stls.br} /> учебный план
                  </>
                }
                disc={
                  'Оставьте заявку, менеджер пришлет Вам полный учебный план, а также расскажет о программе и возможных скидках'
                }
                closePopUpForm={close}
                formName={`Заявка с модальной формы "Получите полный учебный план"${
                  program?.title
                    ? ` для программы ${program?.category?.type || ''} ${
                        program?.studyFormat || ''
                      } ${program.title}`
                    : ''
                }`}
              />
            )}
          </Popup>
        </div>
      </Wrapper>
    </section>
  )
}

export default GetStudyPlan
