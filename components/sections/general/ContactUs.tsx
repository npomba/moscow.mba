import stls from '@/styles/components/sections/ContactUs.module.sass'
import cn from 'classnames'
import { SetString } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import lang from '@/data/translation/index'
import { useState } from 'react'
import { LeadLoaderThankyou } from '@/components/general'
import { FormAlpha } from '@/components/forms'
import { Wrapper } from '@/components/layout'

const ContactUs = ({
  programTitle = null,
  programId = null,
  title = SetString(lang.helpToChooseTitle),
  titleNewStr = null,
  disc = SetString(lang.helpToChooseDics),
  overlapsFooter = false
}) => {
  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)
  const at = useAt()

  return (
    <section
      className={cn(stls.container, {
        [stls.overlapsFooter]: overlapsFooter
      })}>
      <Wrapper
        classNames={[
          cn(stls.wrapper, { [stls.overlapsFooter]: overlapsFooter })
        ]}>
        <LeadLoaderThankyou
          open={open}
          setOpen={setOpen}
          openLoader={openLoader}
          setOpenLoader={setOpenLoader}
          programId={programId}
          programTitle={programTitle}
        />
        <h2 className={stls.title}>
          {title}
          {titleNewStr && (
            <>
              <br /> {titleNewStr}
            </>
          )}
        </h2>
        <div className={stls.desc}>
          {at.course || at.profession
            ? SetString(lang.helpToChooseDicsProfessionCourse)
            : disc}
        </div>

        <FormAlpha
          programTitle={programTitle}
          setOpenLoader={setOpenLoader}
          setOpen={setOpen}
        />
      </Wrapper>
    </section>
  )
}

export default ContactUs
