import Discount from '@/components/prices/Discount'
import SVGClose from '@/components/svgs/SVGClose'
import Until from '@/components/dates/Until'
import stls from '@/styles/modules/PopUpLearnMore.module.sass'
import learmMoreStls from '@/styles/modules/StickyBottom.module.sass'
import Popup from 'reactjs-popup'
import PopUpForm from '@/components/popups/Form'
import Link from 'next/link'

const PopupLearnMore = ({ close }) => {
  return (
    <div className={`${stls.popupLearnMore} red-bg`}>
      <h2>
        Скидка <Discount />
      </h2>
      <div className='desc'>
        на все Online программы <br />
        <Until preposition={true} />
      </div>

      <Popup
        trigger={
          <a className={`${learmMoreStls.btn} ${learmMoreStls.pointer}`}>
            ХОЧУ&nbsp;КОНСУЛЬТАЦИЮ
          </a>
        }
        modal
        nested>
        {close => (
          <PopUpForm title={'Поможем в выборе!'} closePopUpForm={close} />
        )}
      </Popup>

      <Link href='/programs/mini/online' locale='ru'>
        <a className={learmMoreStls.btn}>СМОТРЕТЬ&nbsp;ПРОГРАММЫ</a>
      </Link>
      <button className='mfp-close' type='button' onClick={close}>
        <SVGClose />
      </button>
    </div>
  )
}

export default PopupLearnMore
