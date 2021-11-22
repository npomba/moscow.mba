import stls from '@/styles/components/popups/PopupForm.module.sass'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import { useState } from 'react'
import { IconClose } from '@/components/icons'
import LeadLoaderThankyou from '@/components/general/LeadLoaderThankyou'
import { FormAlpha } from '@/components/forms'

const Form = ({
  closePopUpForm,
  programTitle = null,
  programId = null,
  title = SetString(lang.helpToChooseTitle),
  disc = SetString(lang.helpToChooseDics),
  promoCourseLink = null
}) => {
  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)

  return (
    <div className='popup-modal'>
      <LeadLoaderThankyou
        open={open}
        setOpen={setOpen}
        openLoader={openLoader}
        setOpenLoader={setOpenLoader}
        programId={programId}
        programTitle={programTitle}
      />
      <div className='popup-content-origin red-bg'>
        <h2>{title}</h2>
        <div className='desc'>
          {!programTitle && disc}{' '}
          {programTitle &&
            !promoCourseLink &&
            `Оставьте заявку и получите консультацию по программе ${programTitle}, узнайте возможные варианты скидок и требования к поступлению`}
          {promoCourseLink &&
            'Оставьте заявку и получите консультацию по программе MBA, узнайте точную стоимость, возможные варианты скидок и требования к поступлению'}
        </div>
        <FormAlpha
          programTitle={programTitle}
          setOpenLoader={setOpenLoader}
          setOpen={setOpen}
          width='33'
        />
        <button className='mfp-close' type='button' onClick={closePopUpForm}>
          <IconClose />
        </button>
      </div>
    </div>
  )
}

export default Form
