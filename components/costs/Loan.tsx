import stls from '@/styles/components/costs/Loan.module.sass'
import { useAt } from '@/helpers/index'

const Loan = ({
  discount = false,
  type = null,
  format = null,
  notComparingPrices = false,
  renderedByComponent = null
}) => {
  const at = useAt()

  const price = {
    loanRegular: {
      mini: {
        online: '13 500',
        blended: '14 500'
      },
      professional: {
        online: '24 000',
        blended: '25 000'
      },
      industry: {
        online: '24 000',
        blended: '25 000'
      },
      profession: {
        online: '6 000'
      },
      mbl: {
        online: '24 000'
      }
    },
    loanDiscounted: {
      mini: {
        online: '7 400'
      },
      professional: {
        online: '13 250'
      },
      industry: {
        online: '13 250'
      },
      profession: {
        online: '3 250'
      },
      mbl: {
        online: '13 250'
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

  return (
    <>
      <i
        className={
          discount
            ? getPriceClass('new', renderedByComponent)
            : getPriceClass('simple', renderedByComponent)
        }>
        {price[regularOrDiscounted]?.[type]?.[format]} Р. / мес
      </i>
      {discount && !at.blended && !notComparingPrices && (
        <>
          <i className={getPriceClass('old', renderedByComponent)}>
            {price.loanRegular[type]?.[format]} Р. / мес
          </i>
        </>
      )}
    </>
  )
}

export default Loan
