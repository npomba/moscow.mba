import stls from '@/styles/components/sections/general/SectionCheckPros.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { getClassNames } from '@/helpers/index'
import { contactData } from '@/config/index'
import { Wrapper } from '@/components/layout'
import { IconCheck } from '@/components/icons'

type TypeSectionCheckProsProps = TypeClassNames

const SectionCheckPros = ({ classNames }: TypeSectionCheckProsProps) => {
  const at = useAt()
  const contactInfo = contactData()

  const pros = [
    {
      title: 'Оформите возврат',
      content: (
        <>
          Если вы передумаете учиться, мы вернем полную сумму в течение первых
          двух&nbsp;недель
        </>
      )
    },
    {
      title: 'Сэкономьте 13%',
      content: (
        <>
          Получите налоговый вычет. Все подробности у&nbsp;менеджера при записи
          на&nbsp;курс
        </>
      )
    },
    {
      title: 'Задайте нам вопрос',
      content: (
        <>
          Позвоните на: <br />
          <a className={stls.highlight} href={contactInfo.ru.tels[0].href}>
            {contactInfo.ru.tels[0].val}
          </a>{' '}
          <br />
          Звонок бесплатный
        </>
      )
    }
  ]

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper column classNames={[stls.wrapper]}>
        <ul className={stls.pros}>
          {pros.map((pro, idx) => (
            <li key={`${pro.title}-${idx}`} className={stls.pro}>
              <div className={stls.icon}>
                <IconCheck />
              </div>
              <div className={stls.ps}>
                <p className={stls.proTitle}>{pro.title}</p>
                <p className={stls.proContent}>{pro.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionCheckPros
