import stls from '@/styles/components/sections/CostOfStudyDescription.module.sass'
import contactData from '@/config/contactData'
import { Wrapper } from '@/components/layout'
import { IconCheck } from '@/components/icons'

const CostOfStudyDescription = () => {
  const contactInfo = contactData()
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.item}>
          <div className={stls.icon}>
            <IconCheck />
          </div>
          <div className={stls.text}>
            <p className={stls.title}>Оформите возврат</p>
            <p className={stls.subtitle}>
              Если вы передумаете учиться, мы вернем полную сумму в течение
              первых двух недель
            </p>
          </div>
        </div>
        <div className={stls.item}>
          <div className={stls.icon}>
            <IconCheck />
          </div>
          <div className={stls.text}>
            <p className={stls.title}>Сэкономьте 13%</p>
            <p className={stls.subtitle}>
              Получите налоговый вычет. Все подробности у менеджера при записи
              на курс
            </p>
          </div>
        </div>
        <div className={stls.item}>
          <div className={stls.icon}>
            <IconCheck />
          </div>
          <div className={stls.text}>
            <p className={stls.title}>Задайте нам вопрос</p>
            <p className={stls.subtitle}>
              Позвоните на:
              <a className={stls.phone} href={contactInfo.ru.tels[0].href}>
                {contactInfo.ru.tels[0].val}
              </a>
              Звонок бесплатный.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default CostOfStudyDescription
