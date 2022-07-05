import stls from '@/styles/components/sections/WebinarCard.module.sass'
import cn from 'classnames'
import Image from 'next/image'
import PopupForm from '@/components/popups/PopupForm'
import Popup from 'reactjs-popup'
import { IconBell } from '@/components/icons'

const WebinarCard = ({
  title,
  portrait,
  speaker,
  month,
  date,
  hours,
  minutes,
  dur,
  disabled
}) => {
  return (
    <>
      <Popup
        trigger={
          <a
            className={cn(stls.container, {
              [stls.disabled]: disabled
            })}
            data-effect='mfp-zoom-in'>
            <div className={stls.bell}>
              <IconBell />
            </div>
            <div className={stls.date}>
              <strong>
                {date} {month},
              </strong>{' '}
              {hours}:{minutes}
            </div>
            <div className={stls.title}>{title}</div>
            <div className={stls.info}>
              <div className={stls.author}>
                <div className={stls.avatar}>
                  <Image src={portrait} alt={speaker} width={50} height={50} />
                </div>
                <div>
                  Спикер: <span className={stls.name}>{speaker}</span>
                </div>
              </div>
              <div className={stls.duration}>{dur}</div>
            </div>
          </a>
        }
        modal
        lockScroll
        nested
        closeOnDocumentClick>
        {/* @ts-expect-error  */}
        {close => (
          <PopupForm
            title={'Узнайте подробнее о вебинаре'}
            disc={
              'Оставьте заявку и узнайте подробнее о программе вебинара и спикере'
            }
            closePopUpForm={close}
            formName={`Заявка с модальной формы "Узнайте подробнее о вебинаре"${
              title ? ` ${title}` : ''
            }`}
          />
        )}
      </Popup>
    </>
  )
}

export default WebinarCard
