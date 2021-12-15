import stls from '@/styles/components/general/Accordion.module.sass'
import classNames from 'classnames'
import ImageContainer from '@/components/general/ImageContainer'

const Accordion = ({
  accordionItem,
  accordionIndex = null,
  activeAccordion = null,
  setActiveAccordion = null,
  scrollableIntoView
}) => {
  const { title, content, isList, isImage } = accordionItem

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

  if (isList) {
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

  if (isImage) {
    accordionContent = content.map((image, idx) => (
      <ImageContainer
        key={idx}
        image={image}
        imageWidth={image.smallWidth}
        imageHeight={image.smallHeight}
      />
    ))
  }

  const handleAccordionClick = () => {
    document.getElementById('view_accordion').scrollIntoView()

    if (activeAccordion) setActiveAccordion(-1)

    if (!activeAccordion && setActiveAccordion)
      setActiveAccordion(accordionIndex)
  }

  return (
    <div
      id={'view_accordion'}
      className={classNames(stls.container, {
        [stls.equalPadding]: isImage,
        [stls.opened]: activeAccordion
      })}
      onClick={handleAccordionClick}>
      <div className={stls.plus}>
        <i></i>
        <i></i>
      </div>
      <div className={stls.title}>{title}</div>
      <div
        className={classNames(stls.content, {
          [stls.imageContent]: isImage
        })}>
        {accordionContent}
      </div>
    </div>
  )
}

export default Accordion
