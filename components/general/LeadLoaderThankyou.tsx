import stls from '@/styles/components/general/LeadLoaderThankyou.module.sass'
import Popup from 'reactjs-popup'
import PopupThankyou from '@/components/popups/PopupThankyou'
import PopupLoader from '@/components/popups/PopupLoader'

const LeadLoaderThankyou = ({
  open,
  setOpen,
  openLoader,
  setOpenLoader,
  programId = null,
  programTitle = null
}) => {
  return (
    <>
      <Popup
        open={openLoader}
        modal
        lockScroll
        nested
        closeOnDocumentClick
        onClose={() => setOpenLoader(false)}>
        <PopupLoader closePopUp={() => setOpenLoader(false)} />
      </Popup>
      <Popup
        open={open}
        modal
        lockScroll
        nested
        closeOnDocumentClick
        onClose={() => setOpen(false)}>
        <PopupThankyou
          closePopUp={() => setOpen(false)}
          programId={programId}
          programTitle={programTitle}
        />
      </Popup>
    </>
  )
}

export default LeadLoaderThankyou
