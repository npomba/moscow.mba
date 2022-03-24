import stls from '@/styles/components/sections/StudentsInternational.module.sass'
import Image from 'next/image'
import { useAt } from '@/hooks/index'
import { base64pixel } from '@/config/index'
import { Wrapper } from '@/components/layout'

const StudentsInternational = () => {
  const at = useAt()
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <div className={stls.descContainer}>
            <h2>
              {at.en
                ? 'Students from all other the world'
                : 'MBA за которым едут со всего МИРА'}
            </h2>
            <p className={stls.desc}>
              {at.en
                ? 'Students from more than 15 countries get their education in Moscow Business Academy, such as Russia, Great Britain, USA, Germany, Belgium, France, China, Greece, Switzerland, Italy, South Africa, and many others!'
                : 'В Moscow Business Academy обучаются студенты из более чем 15 стран мира, среди которых Россия, Великобритания, США, Германия, Бельгия, Франция, Китай, Греция, Швейцария, Италия, Южная Африка и многие другие!'}
            </p>
          </div>
          <div className={stls.imageContainer}>
            <div className={stls.image}>
              <Image
                src={'/assets/images/world_mba_1.jpg'}
                alt={at.en ? 'Happy graduates' : 'Счастливые выпускники'}
                width={769}
                height={597}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
            <div className={stls.info}>
              <span>{at.en ? 'more than' : 'более чем'}</span>
              <strong>15</strong>
              <span>{at.en ? 'countries' : 'стран мира'}</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default StudentsInternational
