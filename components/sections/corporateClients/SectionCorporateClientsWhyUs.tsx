import stls from '@/styles/components/sections/corporateClients/SectionCorporateClientsWhyUs.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { IconCheck } from '@/components/icons'

type SectionCorporateClientsWhyUsProps = TypeClassNames

const SectionCorporateClientsWhyUs = ({
  classNames
}: SectionCorporateClientsWhyUsProps) => {
  const list = [
    {
      title: 'Подбираем индивидуальный график',
      content: 'Можем подобрать удобное время: вечер, день, выходные, будние'
    },
    {
      title: 'Анализируем компетенции сотрудников',
      content:
        'Программы разрабатываются с учетом специфики компании и требований к должности'
    },
    {
      title: 'Разрабатываем учебные материалы',
      content:
        'Разрабатываем рабочие тетради, памятки и др. материалы под ваши задачи'
    },
    {
      title: 'У нас 140+ экспертов-практиков',
      content: 'Подберем опытных экспертов под ваши задачи'
    },
    {
      title: 'Прикрепляем кураторов',
      content:
        'Прикрепляем персональных кураторов, которые будут сопровождать группу в процессе всего обучения'
    },
    {
      title: 'Можно совмещать с работой',
      content:
        'Формируем траекторию обучения так, чтобы было удобно совмещать с работой'
    },
    {
      title: 'Даем практические и групповые задания',
      content:
        'Используем различные современные техники, благодаря которым обучаться еще интереснее'
    },
    {
      title: 'Контролируем обучение',
      content:
        'Наши тьюторы контролируют весь процесс обучения, снимают метрики прогресса по каждому сотруднику и формируют отчетность руководству'
    }
  ]
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column classNames={[stls.wrapper]}>
        <h2 className={stls.title}>Почему мы?</h2>
        <ul className={stls.list}>
          {list.map((item, idx) => (
            <li key={`${item.title}-${idx}`} className={stls.listItem}>
              <IconCheck classNames={[stls.icon]} />
              <div>
                <h3 className={stls.listItemTitle}>{item.title}</h3>
                <p className={stls.listItemContent}>{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionCorporateClientsWhyUs
