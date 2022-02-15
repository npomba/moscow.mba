import stls from '@/styles/components/sections/HelpWithEmployment.module.sass'
import { useAt } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { HelpWithEmploymentItem } from '@/components/general'

const HelpWithEmployment = () => {
  const at = useAt()

  const employmentMeasures = [
    {
      title: 'Оформите резюме',
      description:
        'Научитесь выгодно презентовать свои сильные стороны и узнаете правильную структуру резюме'
    },
    {
      title: 'Узнаете, как найти работу',
      description:
        'Познакомитесь с площадками для поиска работы и поймете как найти самые лучшие вакансии'
    },
    {
      title:
        at.profession || at.course
          ? 'Научитесь работать на себя'
          : 'Соберёте портфолио',
      description:
        at.profession || at.course
          ? 'Узнаете, где искать заказчиков, как выстраивать с ними коммуникацию и защищать свои права'
          : 'Оформите портфолио так, чтобы работодатель убедился в Ваших навыках'
    },
    {
      title: 'Подготовитесь к собеседованию',
      description:
        'Расскажем как подготовиться к собеседованию в компаниях-партнёрах'
    }
  ]

  return (
    <section className={stls.section}>
      <Wrapper classNames={[stls.wrapper]}>
        <h2 className={stls.h2}>Мы помогаем в трудоустройстве</h2>
        {employmentMeasures.map(({ title, description }, idx) => (
          <HelpWithEmploymentItem
            key={title + idx}
            title={title}
            description={description}
          />
        ))}
      </Wrapper>
    </section>
  )
}

export default HelpWithEmployment
