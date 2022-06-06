import stls from '@/styles/components/sections/MemberOfAcicel.module.sass'
import cn from 'classnames'
import { ImageContainer } from '@/components/general'
import { Wrapper } from '@/components/layout'
import rabeP1 from '@/public/assets/images/accreditation/ecicel-accreditation.jpg'

const rabeImage = {
  path: rabeP1,
  name: 'Сертификат аккредитации',
  fullWidth: 1245,
  fullHeight: 895,
  smallWidth: 345,
  smallHeight: 248
}

const MemberOfAcicel = () => {
  return (
    <section>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <div className={stls.left}>
            <h2 className={stls.title}>Аккредитация Ecicel</h2>
            <p className={stls.p}>
              Наши программы прошли строгую проверку европейской
              аккредитационной комиссии ECICEL и полностью соответствуют всем
              стандартам. Наличие данной аккредитации гарантирует высокое
              качество образования в Moscow Business Academy
            </p>
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

export default MemberOfAcicel
