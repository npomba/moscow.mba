import stls from '@/styles/components/sections/Rules.module.sass'
import { Wrapper } from '@/components/layout'

const Rules = ({ prices }) => {
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <h2 className={stls.title}>Правила приема</h2>
        <div className={stls.content}>
          <h3 className={stls.rulesHeading}>Что требуется от кандидата</h3>
          <ul className={stls.list}>
            <li className={stls.item}>
              Наличие высшего профессионального образования, подтвержденного
              дипломом
            </li>
            <li className={stls.item}>
              Опыт работы не менее 5 лет (управленческая деятельность или опыт
              создания и управления собственным бизнесом)
            </li>
            <li className={stls.item}>
              Годовой оборот организации от {prices.lowerPrice} $ для
              топ-менеджеров и от {prices.higherPrice} $ для собственников
              бизнеса
            </li>
            <li className={stls.item}>
              Признанные профессиональные достижения
            </li>
            <li className={stls.item}>
              Уровень владения английским языком не ниже уровня Pre-Intermediate
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default Rules
