import stls from '@/styles/components/sections/ContactUs.module.sass'
import cn from 'classnames'
import { useState } from 'react'
import { useAt } from '@/hooks/index'
import { LeadLoaderThankyou } from '@/components/general'
import { FormAlpha } from '@/components/forms'
import { Wrapper } from '@/components/layout'

const ContactUs = ({
  programTitle = null,
  programId = null,
  title = null,
  titleNewStr = null,
  desc = null,
  overlapsFooter = false
}) => {
  const at = useAt()

  if (!title) title = at.en ? 'Contact us to get help' : 'Поможем в выборе'
  if (!desc)
    desc = at.en
      ? 'Leave your request for a consultation on the MBA programs, their fees, available discounts and admission requirements'
      : 'Оставьте заявку и получите консультацию по программам MBA, узнайте их точную стоимость, возможные варианты скидок и требования к поступлению'

  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)

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
            ? at.en
              ? 'Leave your request for a consultation on the MBA programs, their fees, available discounts and admission requirements'
              : 'Оставьте заявку и получите консультацию по программам, узнайте их точную стоимость, возможные варианты скидок и требования к поступлению'
            : desc}
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
