import stls from '@/styles/components/sections/BlendedMetups.module.sass'
import Image from 'next/image'
import { useAt } from '@/helpers/index'

const BlendedMetups = () => {
  const at = useAt()

  return (
    <section className={stls.container}>
      <div className={stls.titleContainer}>3 очных модуля</div>
      <h2 className={stls.title}>
        {at.mini ? 'MBA mini' : at.mba ? 'MBA' : null} blended - это очные
        встречи с экспертами в Москве
      </h2>
      <div className={stls.flexContainer}>
        <div className={stls.content}>
          <h4 className={stls.contentTitle}>
            3 очных модуля в Москве длительностью 14 дней
          </h4>
          <ul className={stls.list}>
            <li className={stls.listItem}>
              Очные сессии помогут пообщаться с единомышленниками и решить
              конкретные вопросы, которые встречаются в повседневной
              деятельности компании
            </li>
            <li className={stls.listItem}>
              Во время обучения Вы вместе с экспертами проанализируете все
              бизнес-процессы и начнете реализацию долгосрочного плана
              по повышению эффективности работы компании
            </li>
          </ul>
        </div>
        <div className={stls.imageContainer}>
          <div className={stls.image}>
            <Image
              src='/assets/images/top_path_pic_1.jpg'
              alt='Полный зал слушателей во время конференции'
              width={315}
              height={315}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlendedMetups
