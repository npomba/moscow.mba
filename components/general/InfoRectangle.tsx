import stls from '@/styles/components/general/InfoRectangle.module.sass'
import cn from 'classnames'
import Until from '@/components/costs/Until'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import { SetString, useAt } from '@/helpers/index'
import Price from '@/components/costs/Price'
import PopupInfo from '@/components/popups/PopupInfo'
import lang from '@/data/translation/index'
import langMenu from '@/data/translation/menu'
import { Wrapper } from '@/components/layout'

const InfoRectangle = ({
  programPage = false,
  type = null,
  format = null,
  studyDurationMonths = null
}) => {
  const at = useAt()
  const isDiscounted =
    (at.mini && at.online) ||
    (at.mba && at.online) ||
    (at.profession && at.online) ||
    (at.course && at.online) ||
    at.mbl

  const infoRectangleContent = {
    programInfo: [
      {
        itemTitle: 'Срок обучения:',
        itemDetail: <TrainingPeriod period={studyDurationMonths} type={type} />
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
        itemDetail: (
          // <Price
          //   discount={isDiscounted}
          //   type={type}
          //   format={format}
          //   renderedByComponent='InfoRectangle'
          // />

          // 'Заносится в ФРДО'
          <PopupInfo
            title={'Заносится в ФРДО'}
            content={{
              title: 'ФРДО — ',
              subtitle: 'Федеральный реестр сведений документов об образовании',
              description: 'Цели Федерального реестра:',
              items: [
                'Ликвидация оборота поддельных документов государственного образца об образовании',
                'Обеспечение ведомств и работодателей достоверной информацией о квалификации претендентов на\n' +
                  'трудоустройство',
                'Сокращение числа нарушений и коррупции в образовательных учреждениях',
                'Повышение качества образования за счет обеспечения общественности достоверной информацией о выпускниках'
              ]
            }}
          />
        )
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
      className={cn(stls.container, {
        [stls.programsPageContainer]: programPage,
        [stls.academyInfoContainer]: at.index || at.promo
      })}>
      {infoRectangleContent[typeOfContent].map((item, idx) => (
        <li
          key={idx + item.itemDetail}
          className={cn(stls.item, {
            [stls.academyInfoItem]: at.index || at.promo
          })}>
          {item.itemTitle && <p className={stls.itemTitle}>{item.itemTitle}</p>}
          <div
            className={cn(stls.itemDetail, {
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
