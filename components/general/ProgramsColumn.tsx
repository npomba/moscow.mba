import stls from '@/styles/components/general/ProgramsColumn.module.sass'
import { useContext, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import langMenu from '@/data/translation/menu'
import { SetString } from '@/helpers/index'
import Until from '@/components/costs/Until'
import Price from '@/components/costs/Price'
import { ProgramSubjects, ProgramsQty } from '@/components/general'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import Discount from '@/components/costs/Discount'
import MenuContext from '@/context/menu/menuContext'
import OverlayContext from '@/context/overlay/overlayContext'
import {
  IconCheckCircle,
  IconScreen,
  IconPaperCorner,
  IconClock,
  IconArrowLeft
} from '@/components/icons'

const ProgramsColumn = ({ data, id, type }) => {
  const { closeMenu } = useContext(MenuContext)
  const { hideOverlay } = useContext(OverlayContext)
  const handleLinkClick = () => {
    closeMenu()
    hideOverlay()
  }
  const programsOnline = data.filter(
    program =>
      program.category?.type === type && program.studyFormat === 'online'
  )
  const programsBlended = data.filter(
    program =>
      program.category?.type === type && program.studyFormat === 'blended'
  )
  const [onlineOrBlended, setOnlineOrBlended] = useState('online')

  const columnPrograms = (array, format, count = 15) => {
    return array.map((item, idx) => {
      if (idx < count) {
        return (
          <li key={item.id || item._id} className={stls.listItem}>
            <Link
              href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
              locale='ru'>
              <a onClick={handleLinkClick}>{SetString(item, true)}</a>
            </Link>
          </li>
        )
      } else if (idx === count) {
        return (
          <li className={stls.listItem} key={item.id || item._id}>
            <Link href={`/programs/${type}/${format}`} locale='ru'>
              <a className={stls.link} onClick={handleLinkClick}>
                {SetString(langMenu.linkAllPrograms)}
                <IconArrowLeft classNames={[stls.arrow]} />
              </a>
            </Link>
          </li>
        )
      }
    })
  }

  return (
    <ul id={id} className={cn(stls.container)}>
      <li className={stls.programInfo}>
        <div className={stls.programTitle}>
          {type === 'mini' ? 'Mini MBA' : type === 'mba' ? 'MBA' : null}
        </div>

        <div className={stls.navigation}>
          <button
            className={cn(stls.programBtn, {
              [stls.active]: onlineOrBlended === 'online'
            })}
            onClick={() => setOnlineOrBlended('online')}>
            online
          </button>
          <button
            className={cn(stls.programBtn, {
              [stls.active]: onlineOrBlended === 'blended'
            })}
            onClick={() => setOnlineOrBlended('blended')}>
            blended
          </button>
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
      <li className={stls.column}>
        <div
          className={cn(stls.itemDetails, {
            [stls.activeOnline]: onlineOrBlended === 'online'
          })}>
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
        <div
          className={cn(stls.itemDetails, {
            [stls.activeBlended]: onlineOrBlended === 'blended'
          })}>
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
      <div className={stls.bottomInfo}>
        <div className={stls.bottomTitle}>
          {type === 'mini' ? 'Mini MBA' : type === 'mba' ? 'MBA' : null}
        </div>
        <div className={stls.itemBottom}>
          <IconClock classNames={[stls.iconBottom]} />
          <TrainingPeriod type={type} />
        </div>
        <p className={stls.textBottom}>
          {type === 'mini'
            ? SetString(langMenu.categoryDiscMini)
            : type === 'mba'
            ? SetString(langMenu.categoryDiscMba)
            : null}
        </p>
        <div className={stls.itemBottom}>
          <IconPaperCorner classNames={[stls.iconBottom]} />
          <span>
            <ProgramSubjects type='mba' subjects='base' />{' '}
            {SetString(langMenu.categoryAboutManagement)}
          </span>
        </div>
        <div className={stls.itemBottom}>
          <IconPaperCorner classNames={[stls.iconBottom]} />
          <span>
            <ProgramSubjects type='mba' subjects='specialty' />{' '}
            {SetString(langMenu.categorySpecializedSubjects)}
          </span>
        </div>
      </div>
    </ul>
  )
}

export default ProgramsColumn
