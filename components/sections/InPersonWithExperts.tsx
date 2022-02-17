import stls from '@/styles/components/sections/InPersonWithExperts.module.sass'
import Image from 'next/image'
import { Wrapper } from '@/components/layout'
import { ImgIntramural } from '@/components/images'

const InPersonWithExperts = () => {
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <div className={stls.smallScreenTitle}>10 модулей</div>
          <h2>Очные модули с экспертами в Москве</h2>
          <h4 className={stls.title}>
            10 очных модулей в Москве длительностью 60 дней
          </h4>
          <div className={stls.descContainer}>
            <p className={stls.desc}>
              Очные сессии помогут пообщаться с единомышленниками и решить
              конкретные вопросы, которые встречаются в повседневной
              деятельности компании
            </p>
            <p className={stls.desc}>
              Во время обучения Вы вместе с преподавателями проанализируете все
              бизнес-процессы и начнете реализацию долгосрочного плана
              по повышению эффективности работы компании
            </p>
          </div>
        </div>
        <div className={stls.image}>
          <ImgIntramural/>
        </div>
      </Wrapper>
    </section>
  )
}

export default InPersonWithExperts
