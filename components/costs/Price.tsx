import stls from '@/styles/components/costs/Price.module.sass'
import { useEffect, useState } from 'react'
import { currencyRates, ui } from '@/config/index'
import { toNumberWithSpaces } from '@/helpers/index'
import { useAt, useSSLocale } from '@/hooks/index'

const Price = ({
  discount = false,
  type = null,
  format = null,
  programPrice = null,
  renderedByComponent = null
}) => {
  const at = useAt()

  const SSLocale = useSSLocale()

  const atKz =
    at.kz || SSLocale === 'kz' || SSLocale === 'kk' || SSLocale === 'kk_KZ'
  const currencySymbol = atKz
    ? ui.currentlySymbols.tenge
    : ui.currentlySymbols.rubles

  const price = {
    regular: {
      mini: {
        online: atKz
          ? toNumberWithSpaces(178000 * currencyRates.tenge)
          : toNumberWithSpaces(178000),
        blended: atKz
          ? toNumberWithSpaces(189000 * currencyRates.tenge)
          : toNumberWithSpaces(189000)
      },
      mba: {
        online: atKz
          ? toNumberWithSpaces(318000 * currencyRates.tenge)
          : toNumberWithSpaces(318000),
        blended: atKz
          ? toNumberWithSpaces(328000 * currencyRates.tenge)
          : toNumberWithSpaces(328000)
      },
      profession: {
        online: atKz
          ? toNumberWithSpaces(70000 * currencyRates.tenge)
          : toNumberWithSpaces(70000)
      },
      course: {
        online: atKz
          ? toNumberWithSpaces(70000 * currencyRates.tenge)
          : toNumberWithSpaces(70000)
      },
      mbl: {
        online: atKz
          ? toNumberWithSpaces(318000 * currencyRates.tenge)
          : toNumberWithSpaces(318000)
      },
      executive: atKz
        ? toNumberWithSpaces(1400000 * currencyRates.tenge)
        : toNumberWithSpaces(1400000)
    },
    discounted: {
      mini: {
        online: atKz
          ? toNumberWithSpaces(98000 * currencyRates.tenge)
          : toNumberWithSpaces(98000)
      },
      mba: {
        online: atKz
          ? toNumberWithSpaces(175000 * currencyRates.tenge)
          : toNumberWithSpaces(175000)
      },
      profession: {
        online: atKz
          ? toNumberWithSpaces(39000 * currencyRates.tenge)
          : toNumberWithSpaces(39000)
      },
      course: {
        online: atKz
          ? toNumberWithSpaces(39000 * currencyRates.tenge)
          : toNumberWithSpaces(39000)
      },
      mbl: {
        online: atKz
          ? toNumberWithSpaces(175000 * currencyRates.tenge)
          : toNumberWithSpaces(175000)
      },
      executive: atKz
        ? toNumberWithSpaces(1400000 * currencyRates.tenge)
        : toNumberWithSpaces(1400000)
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
    if (!price) {
      price = '0'
    }
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
            Math.ceil(price?.replace(' ', '') / period).toString()
          ).map((el, idx, array) => {
            return (array.length - idx) % 3 === 0 ? ' ' + el : el
          })}
          <span className={stls.currency}>&#8381;/мес.</span>
        </>
      )
    } else {
      return price + ` ${currencySymbol}`
    }
  }

  if ((!format && at.executive) || (!format && type === 'executive'))
    return (
      <span className={stls.executive}>
        {price[isDiscounted].executive} {currencySymbol}
      </span>
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
          ? toNumberWithSpaces(programPrice) + ` ${currencySymbol}`
          : splitMonths(price?.[isDiscounted]?.[type]?.[format])}
      </i>
      {discount && (
        <i className={getPriceClass('old', renderedByComponent)}>
          {programPrice
            ? toNumberWithSpaces(
                Math.ceil(((programPrice / 55) * 100) / 1000) * 1000
              ) + ` ${currencySymbol}`
            : splitMonths(price?.regular?.[type]?.[format] || 0)}
        </i>
      )}
    </>
  )
}

export default Price
