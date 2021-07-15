import stls from '@/styles/components/general/AccordionsContainer.module.sass'
import { useState } from 'react'
import Accordion from '@/components/general/Accordion'

const AccordionsContainer = ({ accordionsItems, firstAccordionActive }) => {
  const initialActiveAccordion = firstAccordionActive ? 0 : -1
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(
    initialActiveAccordion
  )

  return (
    <>
      {accordionsItems.map((item, idx) => (
        <Accordion
          key={item.title + idx}
          accordionItem={item}
          accordionIndex={idx}
          activeAccordion={idx === activeAccordionIndex}
          setActiveAccordion={setActiveAccordionIndex}
        />
      ))}
    </>
  )
}

export default AccordionsContainer
