import stls from '@/styles/components/general/ProgramsList.module.sass'
import { Fragment, useContext } from 'react'
import MenuContext from '@/context/menu/menuContext'
import OverlayContext from '@/context/overlay/overlayContext'
import cn from 'classnames'
import Link from 'next/link'
import langMenu from '@/data/translation/menu'
import { SetString, useAt } from '@/helpers/index'
import Until from '@/components/costs/Until'
import Discount from '@/components/costs/Discount'
import menu from '@/data/translation/menu'
import programsContext from '@/context/programs/programsContext'
import { IconArrowLeft, IconClock, IconPaperCorner } from '../icons'
import TrainingPeriod from '../costs/TrainingPeriod'
import ProgramSubjects from './ProgramSubjects'

const ProgramsList = ({ data, id, type }) => {
  const { closeMenu } = useContext(MenuContext)
  const { hideOverlay } = useContext(OverlayContext)
  const { studyFields } = useContext(programsContext)
  const handleLinkClick = () => {
    closeMenu()
    hideOverlay()
  }

  const programs = []
  studyFields.map(studyField => {
    let filter = {
      title: '',
      fields: []
    }
    let fields = []
    data.map(item => {
      if (
        item.category?.type === type &&
        item.studyFormat === 'online' &&
        studyField.slug === item?.study_field?.slug
      ) {
        fields.push(item)
        filter.title = studyField.title
        filter.fields = fields
      }
    })
    programs.push(filter)
  })

  const columnPrograms = array => {
    return array.map((key, i) => (
      <Fragment key={i}>
        <div className={stls.listTitle}>{key.title}</div>
        {key.fields.map((item, idx) => {
          if (idx < 5) {
            return (
              <div key={item.id} className={stls.listItem}>
                <Link
                  href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
                  locale='ru'>
                  <a onClick={handleLinkClick}>{SetString(item, true)}</a>
                </Link>
              </div>
            )
          } else if (idx === 5) {
            return (
              <div key={item.id} className={stls.listItem}>
                <Link href={`/programs/${type}/online`} locale='ru'>
                  <a className={stls.link} onClick={handleLinkClick}>
                    {SetString(menu.linkAllPrograms)}
                    <IconArrowLeft classNames={[stls.arrow]} />
                  </a>
                </Link>
              </div>
            )
          }
        })}
      </Fragment>
    ))
  }
  return (
    <div id={id} className={cn(stls.container)}>
      <div className={stls.programInfo}>
        <div className={stls.programTitle}>
          {type === 'profession'
            ? SetString(menu.professions)
            : type === 'courses'
            ? SetString(menu.courses)
            : null}
          <div className={stls.itemDiscount}>
            <div className={stls.itemDiscountAmount}>
              <Discount />
            </div>
            <span>
              <Until />
            </span>
          </div>
        </div>
        <p className={stls.programDesc}>
          {type === 'profession'
            ? SetString(langMenu.categoryDiscProfession)
            : type === 'courses'
            ? SetString(langMenu.categoryDiscMba)
            : null}
        </p>
      </div>
      <div className={stls.itemDetails}>
        <ul className={stls.list}>
          {programs && programs.length > 3 ? (
            <>
              <li className={stls.column}>
                {columnPrograms(
                  programs.slice(0, Math.ceil(programs.length / 2))
                )}
              </li>
              <li className={stls.column}>
                {columnPrograms(
                  programs.slice(
                    Math.ceil(programs.length / 2),
                    programs.length
                  )
                )}
              </li>
            </>
          ) : (
            <>{columnPrograms(programs)}</>
          )}
        </ul>
      </div>
      <div className={stls.bottomInfo}>
        <div className={stls.bottomTitle}>
          {type === 'profession'
            ? SetString(menu.professions)
            : type === 'courses'
            ? SetString(menu.courses)
            : null}
        </div>
        <div className={stls.itemBottom}>
          <IconClock classNames={[stls.iconBottom]} />
          <TrainingPeriod type={type} />
        </div>
        <p className={stls.textBottom}>
          {type === 'profession'
            ? SetString(langMenu.categoryDiscProfession)
            : type === 'courses'
            ? SetString(langMenu.categoryDiscMba)
            : null}
        </p>
        <div className={stls.itemBottom}>
          <IconPaperCorner classNames={[stls.iconBottom]} />
          <span>
            <ProgramSubjects type={type} subjects='base' />{' '}
            {SetString(langMenu.categoryAboutManagement)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProgramsList
