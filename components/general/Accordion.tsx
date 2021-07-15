import stls from '@/styles/components/general/Accordion.module.sass'
import classNames from 'classnames'
import ImageContainer from '@/components/general/ImageContainer'

const Accordion = ({
  title,
  accordionContent,
  isList = false,
  isImage = false,
  accordionIndex = null,
  activeAccordion = null,
  setActiveAccordion = null
}) => {
  let content

  if (typeof accordionContent === 'string') {
    content = <p className={stls.mb}>{accordionContent}</p>
  }

  if (!isList && Array.isArray(accordionContent)) {
    content = accordionContent.map((item, idx) => (
      <p key={idx} className={stls.mb}>
        {item}
      </p>
    ))
  }

  if (isList && Array.isArray(accordionContent)) {
    content = (
      <ol>
        {accordionContent.map((item, idx) => (
          <li key={idx} className={stls.olItem}>
            {item}
          </li>
        ))}
      </ol>
    )
  }

  if (isImage && Array.isArray(accordionContent)) {
    content = accordionContent.map((image, idx) => (
      <ImageContainer
        key={idx}
        image={image}
        imageWidth={image.smallWidth}
        imageHeight={image.smallHeight}
      />
    ))
  }

  const handleAccordionClick = () => {
    if (activeAccordion) setActiveAccordion(-1)

    if (!activeAccordion && setActiveAccordion) setActiveAccordion(accordionIndex)
  }

  return (
    <div
      className={classNames('accordion-block', {
        'accordion-block--equal-padding': isImage,
        opened: activeAccordion
      })}
      onClick={handleAccordionClick}>
      <div className='plus'>
        <i></i>
        <i></i>
      </div>
      <div className='accordion-title'>{title}</div>
      <div
        className={classNames('accordion-content', {
          'accordion-image-content': isImage,
          grid: activeAccordion
        })}>
        {content}
      </div>
    </div>
  )
}

export default Accordion
