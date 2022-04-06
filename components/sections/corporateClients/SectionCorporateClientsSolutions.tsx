import stls from '@/styles/components/sections/corporateClients/SectionCorporateClientsSolutions.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'

type SectionCorporateClientsSolutionsProps = TypeClassNames

const SectionCorporateClientsSolutions = ({
  classNames
}: SectionCorporateClientsSolutionsProps) => {
  const list = [
    {
      title: 'Готовые программы обучения',
      content:
        'Оперативно зачислим ваших сотрудников на уже сформированные программы без временных затрат на кастомизацию',
      title2: 'Более 100 программ',
      content2:
        'На которые можно зачислить сотрудников в течение нескольких дней'
    },
    {
      title: 'Кастомизация готовых программ',
      content:
        'Дополним и частично изменим готовые программы под цели вашего обучения',
      title2: 'Дополним необходимым',
      content2:
        'Добавим нужные задания, спикеров и разработаем дополнительные модули'
    },
    {
      title: 'Разработка программ с 0',
      content:
        'Разработаем программы обучения любого формата с учётом особенностей бизнеса и ваших целей',
      title2: 'Максимум эффективности',
      content2:
        'Подберем лучших спикеров вашего рынка и индивидуальную траекторию обучения'
    }
  ]

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <h2 className={stls.title}>
          Какие образовательные решения мы&nbsp;можем предложить
        </h2>
        <ul className={stls.list}>
          {list.map((item, idx) => (
            <li key={`${item.title}-${idx}`} className={stls.listItem}>
              <div className={stls.left}>
                <h3 className={stls.title}>{item.title}</h3>
                <p className={stls.content}>{item.content}</p>
              </div>
              <div className={stls.right}>
                <h4 className={stls.content2}>{item.title2}</h4>
                <p className={stls.content2}>{item.content2}</p>
              </div>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionCorporateClientsSolutions
