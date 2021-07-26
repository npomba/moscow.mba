import stls from '@/styles/components/layout/StickyBottom.module.sass'
import { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import Until from '@/components/costs/Until'
import { IconCross, IconClose } from '@/components/icons'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import PopupForm from '@/components/popups/PopupForm'
import PopupLearnMore from '@/components/popups/PopupLearnMore'
import OverlayContext from '@/context/overlay/overlayContext'
import classNames from 'classnames'

const StickyBottom = ({
  openStickyModule,
  hideStickyModule,
  closeStickyModule,
  clickedAsk
}) => {
  useEffect(() => {
    document.addEventListener('scroll', () => {
      // check if on programs page
      const pathArr = window.location.pathname.split('/').filter(part => part)
      if (
        !(
          pathArr[0] === 'promo' ||
          (pathArr[0] === 'programs' &&
            (pathArr[1] === 'mini' ||
              pathArr[1] === 'professional' ||
              pathArr[1] === 'industry') &&
            (pathArr[2] === 'online' || pathArr[2] === 'blended') &&
            !pathArr[3])
        )
      ) {
        const pageHeight = document.body.scrollHeight
        window.pageYOffset > 1500 &&
        window.pageYOffset < pageHeight - 2500 &&
        !clickedAsk
          ? openStickyModule()
          : hideStickyModule()
      }
    })
  }, [hideStickyModule, openStickyModule, clickedAsk])

  const { overlayIsShown, showOverlay, hideOverlay, toggleOverlay } =
    useContext(OverlayContext)

  return (
    <div
      className={classNames({
        [stls.sticky]: true,
        'sticky-bottom-part': true,
        show: true,
        [stls.overlay]: overlayIsShown
      })}>
      <div className={stls.content}>
        <p className={stls.p}>
          <strong>Скидка 45%</strong>
          <span className={stls.responsiveSpace}>&nbsp;</span>
          <br className={stls.responsiveBr} />
          на все Online программы <Until />!
        </p>
        <div className={stls.btns}>
          <Link href='/programs/mini/online' locale='ru'>
            <a className={stls.btn}>СМОТРЕТЬ&nbsp;ПРОГРАММЫ</a>
          </Link>

          <Popup
            trigger={
              <a className={`${stls.btn} ${stls.pointer}`}>
                ХОЧУ&nbsp;КОНСУЛЬТАЦИЮ
              </a>
            }
            modal
            nested>
            {close => (
              <PopupForm
                title={'Получите консультацию'}
                closePopUpForm={close}
              />
            )}
          </Popup>

          <div className={`${stls.learnMore}`}>
            <Popup
              trigger={
                <a className={`${stls.btn} ${stls.pointer}`}>ПОДРОБНЕЕ</a>
              }
              modal
              nested>
              {close => <PopupLearnMore close={close} />}
            </Popup>
          </div>

          <a
            className={`${stls.pointer} close-bottom-module-btn ${stls.crossIn}`}
            onClick={closeStickyModule}>
            <IconCross />
          </a>
        </div>
        <a
          className={`${stls.pointer} close-bottom-module-btn ${stls.crossOut}`}
          onClick={closeStickyModule}>
          <IconCross />
        </a>
        <a
          className={`${stls.pointer} ${stls.crossTop}`}
          onClick={closeStickyModule}>
          <IconClose />
        </a>
      </div>
      {/* </div> */}
    </div>
  )
}

export default StickyBottom
