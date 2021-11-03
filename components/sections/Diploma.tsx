import stls from '@/styles/components/sections/Diploma.module.sass'
import classNames from 'classnames'
import { useState } from 'react'
import { useAt } from '@/helpers/index'
import Pagination from '@/components/general/Pagination'
import Image from 'next/image'
import { base64pixel } from '@/config/index'

const diplomaPaginationImages = [
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

const getProgramDiplomaImage = typeOfPage => {
  return (
    <Image
      src={`/assets/images/diplomas/mba-${typeOfPage}-diploma.jpg`}
      alt='Ваш будущий диплом'
      width={532}
      height={376}
      layout={'responsive'}
      placeholder='blur'
      blurDataURL={base64pixel}
    />
  )
}

const Diploma = ({ darkBackground = false }) => {
  const at = useAt()
  const typeOfPage = at.mbl ? 'mba' : at.onWhichPage
  const atPrograms = at.mini || at.professional || at.industry || at.mbl

  const [currentDiploma, setCurrentDiploma] = useState(0)

  const diplomasPerPage = 1
  const numberOfPages = diplomaPaginationImages.length / diplomasPerPage

  const showNextDiplomaImage = newPage => {
    setCurrentDiploma(newPage)
  }

  const renderPaginationAndTitle = () => {
    return !atPrograms && !at.promo ? (
      <>
        <div className={stls.paginationContainer}>
          <Pagination
            numberOfPages={numberOfPages}
            itemsPerPage={diplomasPerPage}
            totalItems={diplomaPaginationImages.length}
            showNextPage={showNextDiplomaImage}
            onlyPagination
            semiTransparentBg
          />
        </div>
        <h3 className={stls.imageTitle}>
          {diplomaPaginationImages[currentDiploma].title}
        </h3>
      </>
    ) : null
  }

  const renderDiplomaImage = () => {
    return atPrograms || at.promo
      ? getProgramDiplomaImage(typeOfPage)
      : diplomaPaginationImages[currentDiploma].image
  }

  return (
    <section
      className={classNames(stls.container, {
        [stls.noMobileMb]: at.profession,
        [stls.darkBg]: darkBackground
      })}>
      <div className={stls.imageContainer}>
        {renderPaginationAndTitle()}
        <div className={stls.image}>{renderDiplomaImage()}</div>
      </div>
      <div className={stls.content}>
        <h2>{at.profession ? 'Ваши будущие дипломы' : 'Ваш будущий диплом'}</h2>
        <div className={stls.desc}>
          {at.mini || at.professional || at.industry || at.promo || at.mbl
            ? 'Международный диплом установленного образца с присвоением степени «Мастер делового администрирования» с европейским приложением'
            : 'Мы производим обучение на основании государственной лицензии №041221. Вы получите диплом о профессиональной переподготовке и сертификат академии, которые можно добавить в портфолио и показать работодателю.'}
        </div>
        {(at.online || at.promo || at.mbl) && (
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
