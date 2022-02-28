import stls from '@/styles/components/costs/Price.module.sass'
import { useAt, toNumberWithSpaces } from '@/helpers/index'

const Price = ({
  discount = false,
  type = null,
  format = null,
  programPrice = null,
  renderedByComponent = null
}) => {
  const at = useAt()

  const price = {
    regular: {
      mini: {
        online: '178 000',
        blended: '189 000'
      },
      mba: {
        online: '318 000',
        blended: '328 000'
      },
      profession: {
        online: '70 000'
      },
      course: {
        online: '70 000'
      },
      mbl: {
        online: '318 000'
      },
      executive: '1 400 000'
    },
    discounted: {
      mini: {
        online: '98 000'
      },
      mba: {
        online: '175 000'
      },
      profession: {
        online: '39 000'
      },
      course: {
        online: '39 000'
      },
      mbl: {
        online: '175 000'
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
      CardProgram: stls.cardProgramNewPrice,
      CostOfStudy: stls.costOfStudyNewPrice
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

  const isDiscounted = discount ? 'discounted' : 'regular'

  const splitMonths = price => {
    let period =
      type === 'mini'
        ? 9
        : 'mba' || 'mbl'
        ? 18
        : 'profession' || 'course'
        ? 4
        : 'executive'
        ? 26
        : null
    if (renderedByComponent === 'CostOfStudy') {
      return (
        <>
          {Array.from(
            Math.ceil(price.replace(' ', '') / period).toString()
          ).map((el, idx, array) => {
            return (array.length - idx) % 3 === 0 ? ' ' + el : el
          })}
          <span className={stls.currency}>&#8381;/мес.</span>
        </>
      )
    } else {
      return price + ' P.'
    }
  }

  if ((!format && at.executive) || (!format && type === 'executive'))
    return (
      <span className={stls.executive}>{price[isDiscounted].executive} Р.</span>
    )

  return (
    <>
      <i
        className={
          discount
            ? getPriceClass('new', renderedByComponent)
            : getPriceClass('simple', renderedByComponent)
        }>
        {programPrice
          ? toNumberWithSpaces(programPrice) + ' P.'
          : splitMonths(price[isDiscounted]?.[type]?.[format])}
      </i>
      {discount && (
        <i className={getPriceClass('old', renderedByComponent)}>
          {programPrice
            ? toNumberWithSpaces(
                Math.ceil(((programPrice / 55) * 100) / 1000) * 1000
              ) + ' P.'
            : splitMonths(price.regular[type]?.[format])}
        </i>
      )}
    </>
  )
}

export default Price
