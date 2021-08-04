import stls from '@/styles/components/costs/Price.module.sass'
import useAt from '@/components/hooks/useAt'

const Price = ({
  discount = false,
  type = null,
  format = null,
  renderedByComponent = null
}) => {
  const at = useAt()

  const price = {
    regular: {
      mini: {
        online: '143 500',
        blended: '149 000'
      },
      professional: {
        online: '289 000',
        blended: '299 000'
      },
      industry: {
        online: '289 000',
        blended: '299 000'
      },
      profession: {
        online: '70 000'
      },
      executive: '1 400 000'
    },
    discounted: {
      mini: {
        online: '79 000'
      },
      professional: {
        online: '159 000'
      },
      industry: {
        online: '159 000'
      },
      profession: {
        online: '39 000'
      },
      executive: '1 400 000'
    }
  }

  const componentSpecificClasses = {
    simple: {
      ProgramsColumn: stls.programsColumnSimplePrice
    },
    new: {
      ProgramsColumn: stls.programsColumnNewPrice,
      InfoRectangle: stls.infoRectangleNewPrice
    },
    old: {
      ProgramsColumn: stls.programsColumnOldPrice,
      CostOfStudy: stls.costOfStudyOldPrice,
      InfoRectangle: stls.infoRectangleOldPrice
    }
  }

  const generalClasses = {
    simple: stls.simplePrice,
    new: stls.newPrice,
    old: stls.oldPrice
  }

  const getPriceClass = (typeOfPrice, renderedByComponent) => {
    if (!renderedByComponent) return `${typeOfPrice}-price`

    const componentSpecificClass =
      componentSpecificClasses[typeOfPrice]?.[renderedByComponent]
    const generalClass = generalClasses[typeOfPrice]

    return componentSpecificClass ?? generalClass
  }

  const regularOrDiscounted = discount ? 'discounted' : 'regular'

  if ((!format && at.executive) || (!format && type === 'executive'))
    return <>{price[regularOrDiscounted].executive} Р.</>

  return (
    <>
      <i
        className={
          discount
            ? getPriceClass('new', renderedByComponent)
            : getPriceClass('simple', renderedByComponent)
        }>
        {price[regularOrDiscounted]?.[type]?.[format]} Р.
      </i>
      {discount && (
        <i className={getPriceClass('old', renderedByComponent)}>
          {price.regular[type]?.[format]} Р.
        </i>
      )}
    </>
  )
}

export default Price
