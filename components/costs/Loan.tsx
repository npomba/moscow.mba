import stls from '@/styles/components/costs/Loan.module.sass'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import { ui, currencyRates } from '@/config/index'
import { toNumberWithSpaces } from '@/helpers/index'
import { useAt, useSSLocale } from '@/hooks/index'

type TypeLoanProps = {
  discount?: boolean
  type?: string | null
  format?: string | null
  notComparingPrices?: boolean
  renderedByComponent?: string | null
  programPrice?: number | null
  variant?: 'SectionStudyCost'
}

const Loan = ({
  discount = false,
  type = null,
  format = null,
  notComparingPrices = false,
  renderedByComponent = null,
  programPrice = null,
  variant
}: TypeLoanProps) => {
  const at = useAt()

  const SSLocale = useSSLocale()

  const atKz =
    at.kz || SSLocale === 'kz' || SSLocale === 'kk' || SSLocale === 'kk_KZ'

  const currencySymbol = atKz
    ? `${ui.currentlySymbols.tenge}/мес.`
    : `${ui.currentlySymbols.rublesAlt}/мес.`

  const price = {
    loanRegular: {
      mini: {
        online: atKz
          ? toNumberWithSpaces(14900 * currencyRates.tenge)
          : toNumberWithSpaces(14900),
        blended: atKz
          ? toNumberWithSpaces(15800 * currencyRates.tenge)
          : toNumberWithSpaces(15800)
      },
      mba: {
        online: atKz
          ? toNumberWithSpaces(26500 * currencyRates.tenge)
          : toNumberWithSpaces(26500),
        blended: atKz
          ? toNumberWithSpaces(27400 * currencyRates.tenge)
          : toNumberWithSpaces(27400)
      },
      profession: {
        online: atKz
          ? toNumberWithSpaces(6000 * currencyRates.tenge)
          : toNumberWithSpaces(6000)
      },
      course: {
        online: atKz
          ? toNumberWithSpaces(6000 * currencyRates.tenge)
          : toNumberWithSpaces(6000)
      },
      mbl: {
        online: atKz
          ? toNumberWithSpaces(26500 * currencyRates.tenge)
          : toNumberWithSpaces(26500)
      }
    },
    loanDiscounted: {
      mini: {
        online: atKz
          ? toNumberWithSpaces(8200 * currencyRates.tenge)
          : toNumberWithSpaces(8200)
      },
      mba: {
        online: atKz
          ? toNumberWithSpaces(14600 * currencyRates.tenge)
          : toNumberWithSpaces(14600)
      },
      profession: {
        online: atKz
          ? toNumberWithSpaces(3250 * currencyRates.tenge)
          : toNumberWithSpaces(3250)
      },
      course: {
        online: atKz
          ? toNumberWithSpaces(3250 * currencyRates.tenge)
          : toNumberWithSpaces(3250)
      },
      mbl: {
        online: atKz
          ? toNumberWithSpaces(14600 * currencyRates.tenge)
          : toNumberWithSpaces(14600)
      }
    }
  }

  const regularOrDiscounted = discount ? 'loanDiscounted' : 'loanRegular'

  const componentSpecificClasses = {
    simple: {},
    new: {},
    old: {
      CostOfStudy: stls.costOfStudyOldPrice
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

    return componentSpecificClass ? componentSpecificClass : generalClass
  }

  const regularPrice =
    programPrice && Math.ceil(((programPrice / 55) * 100) / 1000) * 1000

  return (
    <>
      <i
        className={cn(
          discount
            ? getPriceClass('new', renderedByComponent)
            : getPriceClass('simple', renderedByComponent),
          { [stls.price]: variant === 'SectionStudyCost' }
        )}>
        <span>
          {programPrice
            ? toNumberWithSpaces(Math.floor(programPrice / 12))
            : price[regularOrDiscounted]?.[type]?.[format]}{' '}
          <span
            className={cn({
              [stls.priceLabel]: variant === 'SectionStudyCost'
            })}>
            {currencySymbol}
          </span>
        </span>
        {variant === 'SectionStudyCost' && (
          <span className={stls.priceLabelInfo}>*рассрочка на 12 месяцев</span>
        )}
      </i>
      {discount && !at.blended && !notComparingPrices && (
        <>
          <i
            className={cn(getPriceClass('old', renderedByComponent), {
              [stls.discount]: variant === 'SectionStudyCost'
            })}>
            <span
              className={cn({
                [stls.discountNum]: variant === 'SectionStudyCost'
              })}>
              {programPrice
                ? toNumberWithSpaces(Math.floor(regularPrice / 12))
                : price.loanRegular[type]?.[format]}
            </span>{' '}
            <span
              className={cn({
                [stls.discountLabel]: variant === 'SectionStudyCost'
              })}>
              {currencySymbol}
            </span>
          </i>
        </>
      )}
    </>
  )
}

export default Loan
