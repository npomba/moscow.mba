import stls from '@/styles/components/sections/CurrentLicenses.module.sass'
import ImageContainer from '@/components/general/ImageContainer'
import CheckLicenses from '@/components/sections/CheckLicenses'
import licenseP1 from '@/public/legaldocuments/license-p1.jpg'
import licenseP2 from '@/public/legaldocuments/license-p2.jpg'
import charterP1 from '@/public/legaldocuments/charter-p1.jpg'
import Wrapper from '../layout/Wrapper'

const licenses = [
  {
    path: licenseP1,
    name: 'Лицензия (стр. 1)',
    fullWidth: 806,
    fullHeight: 1193,
    smallWidth: 342,
    smallHeight: 508
  },
  {
    path: licenseP2,
    name: 'Лицензия (стр. 2)',
    fullWidth: 806,
    fullHeight: 1193,
    smallWidth: 342,
    smallHeight: 508
  },
  {
    path: charterP1,
    name: 'Положение № 1.1',
    fullWidth: 806,
    fullHeight: 1193,
    smallWidth: 342,
    smallHeight: 508
  }
]

const CurrentLicenses = () => {
  return (
    <section>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <h2 className={stls.subHeading}>Действующие лицензии</h2>
          <p>
            Лицензия Департамента образования города Москвы на осуществление
            образовательной деятельности:
          </p>
          <div className={stls.licensesContainer}>
            {licenses.map((license, idx) => (
              <ImageContainer
                key={license.name + idx}
                image={license}
                imageWidth={license.smallWidth}
                imageHeight={license.smallHeight}
              />
            ))}
          </div>
          <CheckLicenses />
        </div>
      </Wrapper>
    </section>
  )
}

export default CurrentLicenses
