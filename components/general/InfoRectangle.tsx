import stls from '@/styles/components/general/InfoRectangle.module.sass'
import classNames from 'classnames'
import Until from '@/components/costs/Until'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import SetString from '@/components/hooks/SetString'
import lang from '@/data/translation/index'
import langMenu from '@/data/translation/menu'
import useAt from '@/components/hooks/useAt'
import Price from '@/components/costs/Price'

const InfoRectangle = ({ programPage = false, type = null, format = null }) => {
  const at = useAt()
  const isDiscounted =
    (at.mini && at.online) ||
    (at.professional && at.online) ||
    (at.industry && at.online) ||
    (at.profession && at.online)

  const infoRectangleContent = {
    programInfo: [
      {
        itemTitle: 'Срок обучения:',
        itemDetail: <TrainingPeriod type={type} />
      },
      {
        itemTitle: 'Форма обучения:',
        itemDetail: at.online
          ? SetString(langMenu.formatRemote)
          : at.blended
          ? SetString(langMenu.formatBlended)
          : at.executive
          ? SetString(langMenu.formatExecutive)
          : ''
      },
      {
        itemTitle: 'Ближайшее зачисление:',
        itemDetail: (
          <Until preposition={false} executive={at.executive && false} />
        )
      },
      {
        itemTitle: 'Стоимость:',
        itemDetail: (
          <Price
            discount={isDiscounted}
            type={type}
            format={format}
            renderedByComponent='InfoRectangle'
          />
        )
      }
    ],
    homePageInfo: [
      {
        itemDetail: SetString(lang.jumInfoOne)
      },
      {
        itemDetail: SetString(lang.jumInfoTwo)
      },
      {
        itemDetail: SetString(lang.jumInfoThree)
      }
    ]
  }

  const typeOfContent = at.index ? 'homePageInfo' : 'programInfo'

  return (
    <ul
      className={classNames(stls.container, {
        [stls.programsPageContainer]: programPage,
        [stls.homePageContainer]: at.index
      })}>
      {infoRectangleContent[typeOfContent].map((item, idx) => (
        <li
          key={idx + item.itemDetail}
          className={classNames(stls.item, { [stls.homePageItem]: at.index })}>
          {item.itemTitle && <p className={stls.itemTitle}>{item.itemTitle}</p>}
          <div
            className={classNames(stls.itemDetail, {
              [stls.homePageItemDetail]: at.index
            })}>
            {item.itemDetail}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default InfoRectangle
