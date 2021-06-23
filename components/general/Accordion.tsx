import { useState } from 'react'
import PdfDocument from '@/components/general/PdfDocument'
import stls from '@/styles/modules/Qna.module.sass'

const Accordion = ({ title, content, isList = false, isPdf = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const accordionContentClasses = ['accordion-content']

  if (isOpen && isPdf) accordionContentClasses.push('accordion-content-flex')

  const handleAccordionClick = () => setIsOpen(prevState => !prevState)

  let accordionContent

  if (typeof content === 'string') {
    accordionContent = <p className={stls.mb}>{content}</p>
  }

  if (!isList && Array.isArray(content)) {
    accordionContent = content.map((item, idx) => (
      <p key={idx} className={stls.mb}>
        {item}
      </p>
    ))
  }

  if (isList && Array.isArray(content)) {
    accordionContent = (
      <ol>
        {content.map((item, idx) => (
          <li key={idx} className={stls.olItem}>
            {item}
          </li>
        ))}
      </ol>
    )
  }

  if (isPdf && Array.isArray(content)) {
    accordionContent = content.map(({ fileSrc, fileName, pageNum }, idx) => (
      <PdfDocument
        key={idx}
        fileSrc={fileSrc}
        fileName={fileName}
        pageNum={pageNum}
      />
    ))
  }

  return (
    <div className='accordion-block' onClick={handleAccordionClick}>
      <div className='plus'>
        <i></i>
        <i></i>
      </div>
      <div className='accordion-title'>{title}</div>
      <div className={accordionContentClasses.join(' ')}>
        {accordionContent}
      </div>
    </div>
  )
}

export default Accordion
