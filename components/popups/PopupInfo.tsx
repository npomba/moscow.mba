import stls from '@/styles/components/popups/PopupInfo.module.scss'
import Popup from 'reactjs-popup'
import IconInfoFRDO from '@/components/icons/IconInfoFRDO'
import { useState } from 'react'
import Overlay from '@/components/layout/Overlay'
import classNames from 'classnames'

type PopupInfoPropsType = {
  title: string
  content: {
    title: string
    subtitle: string
    discription: string
    items: string[]
  }
}

// const stylesPopup = {
//   backgroundColor: '#fff',
//   padding: '20px',
//   borderRadius: 0,
//   boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)'
// }

const PopupInfo: React.FC<PopupInfoPropsType> = ({ title, content }) => {
  const [overlayIsOpen, setOverlayIsOpen] = useState(false)

  const changeClassName = () => {
    const popup = document
      .querySelector('#popup-root')
      .querySelector('.popup-content')

    const classNames = popup.className.slice(0, -8)

    popup.className = classNames

    console.log(popup)
  }

  return (
    <div className={stls.content}>
      <p>{title}</p>
      <div
        className={classNames({
          [stls.overlay]: true,
          [stls.isOpen]: overlayIsOpen
        })}>
        <Overlay close={() => setOverlayIsOpen(false)} />
      </div>

      <Popup
        trigger={() => (
          <div className={stls.icon}>
            <IconInfoFRDO />
          </div>
        )}
        onOpen={() => {
          changeClassName()
          setOverlayIsOpen(true)
        }}
        position={'top right'}
        offsetX={0}
        offsetY={40}
        arrow={false}
        keepTooltipInside='#popup-root'
        className={stls.test}>
        <div className={stls.content__popup}>
          <div className={stls.content__icon}>
            <IconInfoFRDO color={'#000'} />
          </div>
          <div className={stls.content__inner}>
            <p>
              {content.title}
              <span>{content.subtitle}</span>
            </p>
            <p>{content.discription}</p>

            <ul className={stls.content__list}>
              {content.items.map((item, i) => {
                return <li key={i}>{item}</li>
              })}
            </ul>
          </div>
        </div>
      </Popup>
    </div>
  )
}

export default PopupInfo
