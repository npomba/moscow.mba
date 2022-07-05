import stls from '@/styles/components/sections/corporateClients/SectionCorporateClientsCta.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { PopupForm } from '@/components/popups'
import { Wrapper } from '@/components/layout'
import { BtnAlpha } from '@/components/btns'

type SectionCorporateClientsCtaProps = TypeClassNames & {
  programId: string
  programTitle: string
  cvariant?: 'alpha'
}

const SectionCorporateClientsCta = ({
  classNames,
  programId,
  programTitle,
  cvariant
}: SectionCorporateClientsCtaProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <div
          className={cn(stls.content, {
            [stls.cvariant]: cvariant === 'alpha'
          })}>
          <h2 className={stls.title}>
            Если вы не нашли подходящее решение, оставьте заявку, и мы подберем
            для вас курсы или&nbsp;программу
          </h2>
          <Popup
            trigger={() => (
              <BtnAlpha variant='beta' classNames={[stls.btn]}>
                Оставить&nbsp;заявку
              </BtnAlpha>
            )}
            modal
            lockScroll
            nested
            closeOnDocumentClick>
            {/* @ts-expect-error  */}
            {(close: MouseEventHandler) => (
              <PopupForm
                programId={programId}
                programTitle={programTitle}
                title={'Получите консультацию'}
                closePopUpForm={close}
                formName='Заявка с модальной формы на корпоративное обучение. Заголовок формы: "Если вы не нашли подходящее решение, оставьте заявку, и мы подберем для вас курсы или программу"'
              />
            )}
          </Popup>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionCorporateClientsCta
