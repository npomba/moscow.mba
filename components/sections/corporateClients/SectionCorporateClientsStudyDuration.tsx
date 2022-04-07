import stls from '@/styles/components/sections/corporateClients/SectionCorporateClientsStudyDuration.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { IconCheck } from '@/components/icons'

type SectionCorporateClientsStudyDurationProps = TypeClassNames

const SectionCorporateClientsStudyDuration = ({
  classNames
}: SectionCorporateClientsStudyDurationProps) => {
  const list = [
    {
      title: 'Семинары и тренинги',
      content: (
        <>
          Короткие групповые программы со сроком обучения{' '}
          <span className={stls.highlight}>от 1 дня до нескольких недель</span>
        </>
      )
    },
    {
      title: 'Модульные программы',
      content: (
        <>
          Длинные групповые программы со сроком обучения{' '}
          <span className={stls.highlight}>от 1 месяца до нескольких лет</span>
        </>
      )
    }
  ]
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column classNames={[stls.wrapper]}>
        <h2 className={stls.title}>Продолжительность</h2>
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

export default SectionCorporateClientsStudyDuration
