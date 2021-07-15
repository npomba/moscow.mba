import stls from '@/styles/components/sections/Diploma.module.sass'
import classNames from 'classnames'
import Image from 'next/image'
import useAt from '@/components/hooks/useAt'
import { base64pixel } from '@/config/index'

const Diploma = () => {
  const at = useAt()

  const atPrograms = at.mini || at.professional || at.industry

  return (
    <section
      className={classNames('diplom-section', { [stls.noMb]: at.profession })}>
      <div className='image'>
        <Image
          src={
            at.mini
              ? '/assets/images/diplomas/mba-mini-diploma.jpg'
              : at.professional
              ? '/assets/images/diplomas/mba-professional-diploma.jpg'
              : at.industry
              ? '/assets/images/diplomas/mba-industry-diploma.jpg'
              : '/assets/images/diplomas/course-diploma.jpg'
          }
          alt='Ваш будущий диплом'
          width={532}
          height={376}
          layout={'responsive'}
          placeholder='blur'
          blurDataURL={base64pixel}
        />
      </div>
      <div className='content'>
        <h2>Ваш будущий диплом</h2>
        <div className='desc'>
          {at.mini || at.professional || at.industry
            ? 'Международный диплом установленного образца с присвоением степени «Мастер делового администрирования» с европейским приложением'
            : 'Мы производим обучение на основании государственной лицензии №041221. Вы получите диплом о профессиональной переподготовке и сертификат академии, которые можно добавить в портфолио и показать работодателю.'}
        </div>
        {at.online && (
          <div className='note'>
            Диплом {atPrograms && 'MBA'} Online {!atPrograms && 'программ'} не
            отличается от дипломов очных программ за счет того, что преподают те
            же спикеры по тем же учебным планам
          </div>
        )}
      </div>
    </section>
  )
}

export default Diploma
