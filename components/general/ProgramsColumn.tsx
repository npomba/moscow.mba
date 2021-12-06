import stls from '@/styles/components/general/ProgramsColumn.module.sass'
import { useContext } from 'react'
import MenuContext from '@/context/menu/menuContext'
import OverlayContext from '@/context/overlay/overlayContext'
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
import { IconCheckCircle, IconClock, IconPaperCorner, IconScreen } from '@/components/icons'
import programsContext from '@/context/programs/programsContext'

const ProgramsColumn = ({ data, id, type }) => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } = useContext(
    MenuContext
  )

  const { allFilters } = useContext(programsContext)

  const {
    overlayIsShown,
    showOverlay,
    hideOverlay,
    toggleOverlay
  } = useContext(OverlayContext)

  const handleLinkClick = () => {
    closeMenu()
    hideOverlay()
  }

  return (
    <ul
      id={id}
      className={classNames(stls.container, 'header-podmenu-content', {
        [stls.visible]: id === 'header-podmenu-1'
      })}>
      <li className={stls.containerItem}>
        <div className={stls.programInfo}>
          <div className={stls.programTitle}>
            {type === 'mini' ? 'Mini MBA' : type === 'mba' ? 'MBA' : type === 'profession' ? SetString(langMenu.professions) : null}
          </div>
          <div className={stls.infoFlexContainer}>
            <div className={stls.infoItemContainer}>
              <div className={stls.iconContainer}>
                <IconClock fill={'#C7C7C7'} />
              </div>
              <span>
                <TrainingPeriod type={type} />
              </span>
            </div>
            <div className={stls.infoItemContainer}>
              <div className={stls.iconContainer}>
                <IconPaperCorner fill={'#C7C7C7'} />
              </div>
              <span>
                <ProgramSubjects type={type} subjects='base' />{' '}
                {SetString(langMenu.categoryAboutManagement)}
              </span>
            </div>
            {
              type !== 'profession' &&
              <div className={stls.infoItemContainer}>
                <div className={stls.iconContainer}>
                  <IconPaperCorner fill={'#C7C7C7'} />
                </div>
                <span>
                <ProgramSubjects type={type} subjects='specialty' />{' '}
                  {SetString(langMenu.categorySpecializedSubjects)}
              </span>
              </div>
            }

          </div>
          <p className={stls.programDesc}>
            {type === 'mini'
              ? SetString(langMenu.categoryDiscMini)
              : type === 'mba'
                ? SetString(langMenu.categoryDiscMba)
                : null}
          </p>
        </div>
      </li>
      <li className={stls.containerItem}>
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
                <IconCheckCircle fill={'#C7C7C7'} />
              </div>
              <span>{SetString(langMenu.formatRemote)}</span>
            </div>
            {
              type !== 'profession' &&
              <div className={stls.infoFlexContainer}>
                <div className={stls.iconContainer}>
                  <IconScreen fill={'#C7C7C7'} />
                </div>
                <span>
                <ProgramSubjects type={type} sum={true} />{' '}
                  {SetString(langMenu.qtSubjects)}
              </span>
              </div>
            }
          </div>

          <ul className={stls.list}>
            {
              type === 'profession' ?
                allFilters.map(itemF => {
                  return <>
                  <li key={itemF.id} className={stls.listItem}>
                    <strong>{itemF.name}</strong>
                  </li>
                    {
                      data.map(item => {
                        if (
                          (item.category?.type === type &&
                            item.studyFormat === 'online' &&
                            itemF.slug === item?.study_field?.slug)
                        ) {
                          return (
                            <li key={item.id || item._id} className={stls.listItem}>
                              <Link
                                href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
                                locale='ru'>
                                <a onClick={handleLinkClick}>{SetString(item, true)}</a>
                              </Link>
                            </li>
                          )
                        }
                      })
                    }</>
                })
                :
                <>
                  {
                    data.map(item => {
                      if (
                        item.category?.type === type &&
                        item.studyFormat === 'online'
                      ) {
                        return (
                          <li key={item.id || item._id} className={stls.listItem}>
                            <Link
                              href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
                              locale='ru'>
                              <a onClick={handleLinkClick}>{SetString(item, true)}</a>
                            </Link>
                          </li>
                        )
                      }
                    })
                  }
                </>
            }


          </ul>

        </div>
      </li>
      {
        type !== 'profession' &&
        <li className={stls.containerItem}>
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
                  <IconCheckCircle fill={'#C7C7C7'} />
                </div>
                <span>{SetString(langMenu.formatBlended)}</span>
              </div>
              <div className={stls.infoFlexContainer}>
                <div className={stls.iconContainer}>
                  <IconScreen fill={'#C7C7C7'} />
                </div>
                <span>
                <ProgramSubjects type={type} sum={true} />{' '}
                  {SetString(langMenu.qtSubjects)}
              </span>
              </div>
            </div>
            <ul className={stls.list}>
              {data &&
              data.map(item => {
                if (
                  item.category?.type === type &&
                  item.studyFormat === 'blended'
                ) {
                  return (
                    <li key={item.id || item._id} className={stls.listItem}>
                      <Link
                        href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
                        locale='ru'>
                        <a onClick={handleLinkClick}>{SetString(item, true)}</a>
                      </Link>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </li>
      }
    </ul>
  )
}

export default ProgramsColumn
