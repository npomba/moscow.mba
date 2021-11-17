import stls from '@/styles/components/sections/HelpWithEmployment.module.sass'
import HelpWithEmploymentItem from '@/components/general/HelpWIthEmploymentItem'
import useAt from '@/helpers/useAt'

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
      title: at.profession
        ? 'Научитесь работать на себя'
        : 'Соберёте портфолио',
      description: at.profession
        ? 'Узнаете, где искать заказчиков, как выстраивать с ними коммуникацию и защитить свои права'
        : 'Оформите портфолио так, чтобы работодатель убедился в ваших навыках'
    },
    {
      title: 'Подготовитесь к собеседованию',
      description:
        'Расскажем как подготовиться к собеседованию в компаниях-партнёрах'
    }
  ]

  return (
    <section className={stls.section}>
      <h2 className={stls.h2}>Мы помогаем в трудоустройстве</h2>
      {employmentMeasures.map(({ title, description }, idx) => (
        <HelpWithEmploymentItem
          key={title + idx}
          title={title}
          description={description}
        />
      ))}
    </section>
  )
}

export default HelpWithEmployment
