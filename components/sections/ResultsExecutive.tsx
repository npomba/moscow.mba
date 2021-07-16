import stls from '@/styles/components/sections/ResultsExecutive.module.sass'

const ResultsExecutive = () => {
  return (
    <section className={stls.container}>
      <div className={stls.content}>
        <div className={stls.floatLeft}>
          <h2 className={stls.title}>
            Результаты участия в программе <span>Executive MBA</span>
          </h2>
        </div>
        <div className={stls.floatRight}>
          <h4 className={stls.listTitle}>На практике Вы и ваша команда:</h4>
          <ul className={stls.list}>
            <li className={stls.item}>
              Построите авторскую модель глобальной ниши для вашего бизнеса
            </li>
            <li className={stls.item}>
              Научитесь схватывать сущность проблем, создавать инструменты
              и решения под текущую управленческую ситуацию на международных
              рынках
            </li>
            <li className={stls.item}>
              Сможете понять, как синхронизировать и трансформировать команду
              для новых рынков
            </li>
            <li className={stls.item}>
              Разберетесь в особенностях коммерциализации разработок
            </li>
            <li className={stls.item}>
              Продумаете как изменить ключевой процесс для достижения глобальных
              целей и кратного роста бизнеса
            </li>
            <li className={stls.item}>
              Сможете эффективно управлять интеллектуальным капиталом
              и изменениями в компании
            </li>
          </ul>
        </div>
        <div className={stls.floatLeft}>
          <div className={stls.redSticker}>
            <p>
              Благодаря программе
              <strong>Executive MBA</strong> вы научитесь проектировать сложные
              бизнес-конструкции
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResultsExecutive
