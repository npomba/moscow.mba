import stls from '@/styles/components/sections/AboutExecutive.module.sass'
import classNames from 'classnames'
import { ImgStudentsDuringConference } from '@/components/images'

const AboutExecutive = () => {
  return (
    <section className={stls.container}>
      <div className={stls.flexContainer}>
        <div className={stls.titleContainer}>
          <h2 className={stls.title}>
            <span>Executive MBA </span>Международная программа, в которой есть
            всё для раскрытия Вашего потенциала
          </h2>
          <div className={stls.titleDesc}>
            <p className={stls.desc}>
              Программа Executive MBA разработана для амбициозных
              предпринимателей и топ-менеджеров крупных компаний, которые
              привыкли быть лучшими и не готовы останавливаться на достигнутом.
            </p>
            <p className={stls.desc}>
              Курс, объединивший лучшие отечественные бизнес-практики с
              глобальным мировым опытом, поможет Вам совершить настоящий прорыв
              в управлении компанией. Вы построите пошаговую стратегию развития,
              которая позволит взглянуть на бизнес по-новому.
            </p>
          </div>
        </div>
        <div className={stls.imagesContainer}>
          <div className={classNames(stls.image, stls.imageOne)}>
            <ImgStudentsDuringConference />
          </div>
          <div className={classNames(stls.image, stls.imageTwo)}>
            <div className={stls.number}>
              200+<sup></sup>
            </div>
            <div className={stls.line}></div>
            <p>студентов уже обучились</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutExecutive
