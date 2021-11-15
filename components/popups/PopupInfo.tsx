import stls from '@/styles/components/popups/PopupInfo.module.scss'
import Popup from 'reactjs-popup'
import IconInfoFRDO from '@/components/icons/IconInfoFRDO'
import { useEffect, useState } from 'react'
import useWindowWidth from '@/components/hooks/useWindowWidth'


type PopupInfoPropsType = {
  title: string
  content: {
    title: string
    subtitle: string
    discription: string
    items: string[]
  }
}


const stylesPopup = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: 0,
  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)'
}


const PopupInfo: React.FC<PopupInfoPropsType> = ({ title, content }) => {
  const widthWindow = useWindowWidth()

  const [size, setSize] = useState(448)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (widthWindow <= 480) {
      setSize(345)
      setModal(true)
    } else {
      setSize(448)
      setModal(false)
    }
  }, [widthWindow])

  return (
    <div className={stls.content}>
      <p>{title}</p>

      <Popup
        trigger={() => <div className={stls.icon}><IconInfoFRDO /></div>}
        position={'top right'}
        offsetX={0}
        offsetY={35}
        modal={modal}
        arrow={false}
        contentStyle={{ ...stylesPopup, width: `${size}px` }}
      >

        <div className={stls.content__popup}>
          <div className={stls.content__icon}>
            <IconInfoFRDO color={'#000'} />
          </div>
          <div className={stls.content__inner}>
            <p>
              {content.title}<span>{content.subtitle}</span>
            </p>
            <p>
              {content.discription}
            </p>

            <ul className={stls.content__list}>
              {
                content.items.map((item, i) => {
                  return (
                    <li key={i}>{item}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </Popup>
    </div>
  )
}

export default PopupInfo





