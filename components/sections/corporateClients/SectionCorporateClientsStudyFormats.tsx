import stls from '@/styles/components/sections/corporateClients/SectionCorporateClientsStudyFormats.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { IconCheck } from '@/components/icons'

type SectionCorporateClientsStudyFormatsProps = TypeClassNames

const SectionCorporateClientsStudyFormats = ({
  classNames
}: SectionCorporateClientsStudyFormatsProps) => {
  const list = [
    {
      title: 'Видеолекции в записи',
      content:
        'Электронные курсы, видеолекции, подкасты, которые можно посмотреть в любое время'
    },
    {
      title: 'Очно',
      content:
        'На вашей территории, в кампусе академии или поможем арендовать нужное помещение'
    },
    {
      title: 'Онлайн',
      content:
        'Дистанционное взаимодействие с преподавателем в формете онлайн лекций и семинаров'
    },
    {
      title: 'Смешанный',
      content:
        'Объединение различных форматов на ваш выбор, которые подходят под задачи образовательной программы'
    }
  ]
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column classNames={[stls.wrapper]}>
        <h2 className={stls.title}>Форматы</h2>
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

export default SectionCorporateClientsStudyFormats
