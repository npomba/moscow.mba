import stls from '@/styles/components/sections/Diploma.module.sass'
import classNames from 'classnames'
import { useState } from 'react'
import useAt from '@/components/hooks/useAt'
import Pagination from '@/components/general/Pagination'
import Image from 'next/image'
import { base64pixel } from '@/config/index'

const diplomaImages = [
  {
    title: 'Сертификат академии',
    image: (
      <Image
        key={`diplomaImage-${1}`}
        src={'/assets/diplomas/general/certificate.jpg'}
        alt='Ваш будущий сертификат'
        width={532}
        height={376}
        layout={'responsive'}
        placeholder='blur'
        blurDataURL={base64pixel}
      />
    )
  },
  {
    title: 'Диплом установленного образца',
    image: (
      <Image
        key={`diplomaImage-${2}`}
        src={'/assets/diplomas/general/diploma.jpg'}
        alt='Ваш будущий диплом'
        width={532}
        height={376}
        layout={'responsive'}
        placeholder='blur'
        blurDataURL={base64pixel}
      />
    )
  },
  {
    title: 'Приложение к диплому',
    image: (
      <Image
        key={`diplomaImage-${3}`}
        src={'/assets/diplomas/general/addendum.jpg'}
        alt='Ваше будущее приложение к диплому'
        width={532}
        height={376}
        layout={'responsive'}
        placeholder='blur'
        blurDataURL={base64pixel}
      />
    )
  }
]

const Diploma = ({ darkBackground = false }) => {
  const at = useAt()
  const atPrograms = at.mini || at.professional || at.industry

  const [currentDiploma, setCurrentDiploma] = useState(0)

  const diplomasPerPage = 1
  const numberOfPages = diplomaImages.length / diplomasPerPage

  const showNextDiplomaImage = newPage => {
    setCurrentDiploma(newPage)
  }

  return (
    <section
      className={classNames(stls.container, {
        [stls.noMobileMb]: at.profession,
        [stls.darkBg]: darkBackground
      })}>
      <div className={stls.imageContainer}>
        {at.profession && (
          <div className={stls.paginationContainer}>
            <Pagination
              numberOfPages={numberOfPages}
              itemsPerPage={diplomasPerPage}
              totalItems={diplomaImages.length}
              showNextPage={showNextDiplomaImage}
              onlyPagination
              semiTransparentBg
            />
          </div>
        )}
        {at.profession && (
          <h3 className={stls.imageTitle}>
            {diplomaImages[currentDiploma].title}
          </h3>
        )}
        <div className={stls.image}>
          {at.profession ? (
            diplomaImages[currentDiploma].image
          ) : (
            <Image
              src={
                at.mini
                  ? '/assets/images/diplomas/mba-mini-diploma.jpg'
                  : at.professional
                  ? '/assets/images/diplomas/mba-professional-diploma.jpg'
                  : at.industry
                  ? '/assets/images/diplomas/mba-industry-diploma.jpg'
                  : at.promo
                  ? '/assets/images/diplomas/mba-professional-industry-diploma.jpg'
                  : '/assets/images/diplomas/course-diploma.jpg'
              }
              alt='Ваш будущий диплом'
              width={532}
              height={376}
              layout={'responsive'}
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          )}
        </div>
      </div>
      <div className={stls.content}>
        <h2>Ваши будущие дипломы</h2>
        <div className={stls.desc}>
          {at.mini || at.professional || at.industry || at.promo
            ? 'Международный диплом установленного образца с присвоением степени «Мастер делового администрирования» с европейским приложением'
            : 'Мы производим обучение на основании государственной лицензии №041221. Вы получите диплом о профессиональной переподготовке и сертификат академии, которые можно добавить в портфолио и показать работодателю.'}
        </div>
        {(at.online || at.promo) && (
          <div className={stls.note}>
            Диплом {atPrograms ? 'MBA Online' : 'дистанционных'}{' '}
            {!atPrograms && 'программ'} не отличается от дипломов очных программ
            за счет того, что преподают те же спикеры по тем же учебным планам
          </div>
        )}
      </div>
    </section>
  )
}

export default Diploma
