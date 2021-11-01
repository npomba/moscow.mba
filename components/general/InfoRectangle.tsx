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
    (at.profession && at.online) ||
    at.mbl

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
          : at.mbl
          ? SetString(langMenu.formatRemote)
          : ''
      },
      {
        itemTitle: 'Ближайшее зачисление:',
        itemDetail: (
          <Until preposition={false} executive={at.executive && false} />
        )
      },
      {
        // itemTitle: 'Стоимость:',
        itemTitle: 'Диплом:',
        itemDetail:
          // <Price
          //   discount={isDiscounted}
          //   type={type}
          //   format={format}
          //   renderedByComponent='InfoRectangle'
          // />
          'Заносится в ФРДО'
      }
    ],
    academyInfo: [
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

  const typeOfContent = at.index || at.promo ? 'academyInfo' : 'programInfo'

  return (
    <ul
      className={classNames(stls.container, {
        [stls.programsPageContainer]: programPage,
        [stls.academyInfoContainer]: at.index || at.promo
      })}>
      {infoRectangleContent[typeOfContent].map((item, idx) => (
        <li
          key={idx + item.itemDetail}
          className={classNames(stls.item, {
            [stls.academyInfoItem]: at.index || at.promo
          })}>
          {item.itemTitle && <p className={stls.itemTitle}>{item.itemTitle}</p>}
          <div
            className={classNames(stls.itemDetail, {
              [stls.academyInfoItemDetail]: at.index || at.promo
            })}>
            {item.itemDetail}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default InfoRectangle
