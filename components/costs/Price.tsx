import stls from '@/styles/components/costs/Price.module.sass'
import { useAt } from '@/helpers/index'

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
        online: '162 000',
        blended: '172 000'
      },
      mba: {
        online: '289 000',
        blended: '299 000'
      },
      profession: {
        online: '70 000'
      },
      course: {
        online: '70 000'
      },
      mbl: {
        online: '289 000'
      },
      executive: '1 400 000'
    },
    discounted: {
      mini: {
        online: '89 000'
      },
      mba: {
        online: '159 000'
      },
      profession: {
        online: '39 000'
      },
      course: {
        online: '39 000'
      },
      mbl: {
        online: '159 000'
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
      InfoRectangle: stls.infoRectangleNewPrice,
      CardProgram: stls.cardProgramNewPrice
    },
    old: {
      ProgramsColumn: stls.programsColumnOldPrice,
      CostOfStudy: stls.costOfStudyOldPrice,
      InfoRectangle: stls.infoRectangleOldPrice,
      CardProgram: stls.cardProgramOldPrice
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
