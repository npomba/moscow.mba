import stls from '@/styles/components/sections/MemberOfAcicel.module.sass'
import ImageContainer from '@/components/general/ImageContainer'
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
  const rabeClassNames = [stls.legalSection, stls.MemberOfAcicel]

  return (
    <section className={rabeClassNames.join(' ')}>
      <div className={stls.descRabe}>
        <h2 className={stls.subHeading}>Аккредитация Ecicel</h2>
        <p>
          Moscow Business Academy имеет общеевропейскую аккредитацию ECICEL. Эта
          аккредитация позволяет выдавать дипломы, которые признаются учебными
          заведениями и работодателями по всему миру
        </p>
      </div>
      <ImageContainer
        image={rabeImage}
        imageWidth={rabeImage.smallWidth}
        imageHeight={rabeImage.smallHeight}
      />
    </section>
  )
}

export default MemberOfAcicel
