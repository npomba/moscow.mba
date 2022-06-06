import stls from '@/styles/components/sections/MemberOfRabe.module.sass'
import { ImageContainer } from '@/components/general'
import cn from 'classnames'
import { Wrapper } from '@/components/layout'
import rabeP1 from '@/public/legaldocuments/rabe-p1.jpg'

const MemberOfRABE = () => {
  const rabeImage = {
    path: rabeP1,
    name: 'Свидетельство РАБО',
    fullWidth: 1326,
    fullHeight: 1875,
    smallWidth: 342,
    smallHeight: 508
  }

  const list = [
    'Moscow Business Academy является членом Российской Ассоциации Бизнес-образования, что подтверждает высокий уровень образовательных программ',
    'В России членство РАБО имеют ограниченное количество организаций, которые соответствуют требованиям качества образовательных программ',
    'В настоящий момент за РАБО закрепился статус признанного лидера, инициатора и координатора программ подготовки кадров для предпринимательства и бизнеса'
  ]

  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <div className={stls.left}>
            <h2 className={stls.title}>Членство в РАБО</h2>
            {list.map((item, idx) => (
              <p key={`${item}-${idx}`} className={stls.p}>
                {item}
              </p>
            ))}
          </div>
          <div className={stls.right}>
            <ImageContainer
              image={rabeImage}
              imageWidth={rabeImage.smallWidth}
              imageHeight={rabeImage.smallHeight}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default MemberOfRABE
