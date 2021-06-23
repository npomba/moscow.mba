import SVGLoader from '@/components/svgs/SVGLoader'
import SVGClose from '@/components/svgs/SVGClose'

const Loader = ({ closePopUp = null, loadingPopupContent = false }) => {
  const popupContentClasses = ['popup-content']
  const loaderContentClasses = ['loader-content']

  if (!loadingPopupContent) {
    popupContentClasses.push('red-bg')
    loaderContentClasses.push('thanks-popup-content')
  }

  return (
    <div id='thanksModal' className='popup-modal loader-modal mfp-with-anim'>
      <div className={popupContentClasses.join(' ')}>
        <div className={loaderContentClasses.join(' ')}>
          <SVGLoader />
          {!loadingPopupContent && (
            <p>Ваша заявка отправляется, пожалуйста, подождите</p>
          )}
        </div>
      </div>
      {!loadingPopupContent && (
        <button className='mfp-close' type='button' onClick={closePopUp}>
          <SVGClose />
        </button>
      )}
    </div>
  )
}

export default Loader
