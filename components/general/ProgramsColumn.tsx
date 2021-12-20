import stls from '@/styles/components/general/ProgramsColumn.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import langMenu from '@/data/translation/menu'
import { SetString } from '@/helpers/index'
import Until from '@/components/costs/Until'
import Price from '@/components/costs/Price'
import ProgramSubjects from '@/components/general/ProgramSubjects'
import ProgramsQty from '@/components/general/ProgramsQty'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import Discount from '@/components/costs/Discount'
import {
  IconCheckCircle,
  IconScreen,
  IconPaperCorner,
  IconClock,
  IconArrowLeft
} from '@/components/icons'
import menu from '@/data/translation/menu'

const ProgramsColumn = ({ data, id, type }) => {
  const programsOnline = []
  const programsBlended = []
  data.map(item => {
    if ((item.category?.type === type && item.studyFormat === 'online') ||
      (item.slug === 'international-business-law' && item.category.type === 'mbl' && type === 'mba')) {
      programsOnline.push(item)
    }
    if (item.category?.type === type && item.studyFormat === 'blended') {
      programsBlended.push(item)
    }
  })

  const columnPrograms = (array, format, count = 15) => {
    return array.map((item, idx) => {
      if (idx < count) {
        return (
          <li key={item.id || item._id} className={stls.listItem}>
            <Link
              href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
              locale='ru'>
              <a>{SetString(item, true)}</a>
            </Link>
          </li>
        )
      } else if (idx === count) {
        return (
          <li className={stls.listItem}>
            <Link
              href={`/programs/${type}/${format}`}
              locale='ru'>
              <a className={stls.link}>
                {SetString(menu.linkAllPrograms)}
                <IconArrowLeft classNames={[stls.arrow]} />
              </a>
            </Link>
          </li>
        )
      }
    })
  }

  return (
    <ul
      id={id}
      className={classNames(stls.container)}>
        <li className={stls.programInfo}>
          <div className={stls.programTitle}>
            {type === 'mini' ? 'Mini MBA' : type === 'mba' ? 'MBA' : null}
          </div>
          <div className={stls.infoFlexContainer}>
            <div className={stls.infoItemContainer}>
              <div className={stls.iconContainer}>
                <IconClock />
              </div>
              <span>
                <TrainingPeriod type={type} />
              </span>
            </div>
            <div className={stls.infoItemContainer}>
              <div className={stls.iconContainer}>
                <IconPaperCorner />
              </div>
              <span>
                <ProgramSubjects type={type} subjects='base' />{' '}
                {SetString(langMenu.categoryAboutManagement)}
              </span>
            </div>
            <div className={stls.infoItemContainer}>
              <div className={stls.iconContainer}>
                <IconPaperCorner />
              </div>
              <span>
                <ProgramSubjects type={type} subjects='specialty' />{' '}
                {SetString(langMenu.categorySpecializedSubjects)}
              </span>
            </div>
          </div>
          <p className={stls.programDesc}>
            {type === 'mini'
              ? SetString(langMenu.categoryDiscMini)
              : type === 'mba'
                ? SetString(langMenu.categoryDiscMba)
                : null}
          </p>
        </li>
      <li style={{display: 'flex'}}>
        <div className={stls.itemDetails}>
          <div className={stls.itemTitle}>
            {SetString(langMenu.onlineTitle)}
            <div className={stls.itemDiscount}>
              <div className={stls.itemDiscountAmount}>
                <Discount />
              </div>
              <span>
                <Until />
              </span>
            </div>
          </div>
          <ProgramsQty
            programs={data}
            type={type}
            format={'online'}
            isInsideHeader
          />
          <div className={stls.itemPrice}>
            {SetString(langMenu.price)}:{' '}
            <Price
              discount={true}
              type={type}
              format={'online'}
              renderedByComponent='ProgramsColumn'
            />
          </div>
          <div className={stls.itemInfo}>
            <div className={stls.infoFlexContainer}>
              <div className={stls.iconContainer}>
                <IconCheckCircle />
              </div>
              <span>{SetString(langMenu.formatRemote)}</span>
            </div>
            <div className={stls.infoFlexContainer}>
              <div className={stls.iconContainer}>
                <IconScreen />
              </div>
              <span>
                <ProgramSubjects type={type} sum={true} />{' '}
                {SetString(langMenu.qtSubjects)}
              </span>
            </div>
          </div>
          <ul className={stls.list}>
            {columnPrograms(programsOnline, 'online')}
          </ul>
        </div>
        <div className={stls.itemDetails}>
          <div className={stls.itemTitle}>
            {SetString(langMenu.blendedTitle)}
          </div>
          <ProgramsQty
            programs={data}
            type={type}
            format={'blended'}
            isInsideHeader
          />
          <div className={stls.itemPrice}>
            {SetString(langMenu.price)}:{' '}
            <Price
              discount={false}
              type={type}
              format={'blended'}
              renderedByComponent='ProgramsColumn'
            />
          </div>
          <div className={stls.itemInfo}>
            <div className={stls.infoFlexContainer}>
              <div className={stls.iconContainer}>
                <IconCheckCircle />
              </div>
              <span>{SetString(langMenu.formatBlended)}</span>
            </div>
            <div className={stls.infoFlexContainer}>
              <div className={stls.iconContainer}>
                <IconScreen />
              </div>
              <span>
                <ProgramSubjects type={type} sum={true} />{' '}
                {SetString(langMenu.qtSubjects)}
              </span>
            </div>
          </div>
          <ul className={stls.list}>
            {columnPrograms(programsBlended, 'blended')}
          </ul>
        </div>
      </li>
    </ul>
  )
}

export default ProgramsColumn
