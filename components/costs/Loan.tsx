import stls from '@/styles/components/costs/Loan.module.sass'
import { useAt, toNumberWithSpaces } from '@/helpers/index'

const Loan = ({
  discount = false,
  type = null,
  format = null,
  notComparingPrices = false,
  renderedByComponent = null,
  programPrice = null
}) => {
  const at = useAt()

  const price = {
    loanRegular: {
      mini: {
        online: '14 900',
        blended: '15 800'
      },
      mba: {
        online: '26 500',
        blended: '27 400'
      },
      profession: {
        online: '6 000'
      },
      course: {
        online: '6 000'
      },
      mbl: {
        online: '26 500'
      }
    },
    loanDiscounted: {
      mini: {
        online: '8 200'
      },
      mba: {
        online: '14 600'
      },
      profession: {
        online: '3 250'
      },
      course: {
        online: '3 250'
      },
      mbl: {
        online: '14 600'
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
        className={
          discount
            ? getPriceClass('new', renderedByComponent)
            : getPriceClass('simple', renderedByComponent)
        }>
        {programPrice
          ? toNumberWithSpaces(Math.floor(programPrice / 12))
          : price[regularOrDiscounted]?.[type]?.[format]}{' '}
        Р. / мес
      </i>
      {discount && !at.blended && !notComparingPrices && (
        <>
          <i className={getPriceClass('old', renderedByComponent)}>
            {programPrice
              ? toNumberWithSpaces(Math.floor(regularPrice / 12))
              : price.loanRegular[type]?.[format]}{' '}
            Р. / мес
          </i>
        </>
      )}
    </>
  )
}

export default Loan
