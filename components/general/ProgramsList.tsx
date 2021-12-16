import stls from '@/styles/components/general/ProgramsList.module.sass'
import { useContext, useMemo } from 'react'
import MenuContext from '@/context/menu/menuContext'
import OverlayContext from '@/context/overlay/overlayContext'
import classNames from 'classnames'
import Link from 'next/link'
import langMenu from '@/data/translation/menu'
import { SetString, useAt } from '@/helpers/index'
import Until from '@/components/costs/Until'
import Discount from '@/components/costs/Discount'
import menu from '@/data/translation/menu'
import programsContext from '@/context/programs/programsContext'

const ProgramsList = ({ data, id, type }) => {
    const { menuIsOpen, openMenu, closeMenu, toggleMenu } = useContext(
        MenuContext
    )
    const {
        hideOverlay,
    } = useContext(OverlayContext)

    const { studyFields } = useContext(programsContext)

    const handleLinkClick = () => {
        closeMenu()
        hideOverlay()
    }

    const at = useAt()

    const programs = []

    studyFields.map(itemFilter => {
        programs[itemFilter.title] = []
        data.map(item => {
            if (
                item.category?.type === type &&
                item.studyFormat === 'online' &&
                itemFilter.slug === item?.study_field?.slug
            ) {
                programs[itemFilter.title].push(item)
            }
        })
    })

    return (
        <ul
            id={id}
            className={classNames(stls.container)}>
            <li className={stls.containerItem}>
                <div className={stls.programInfo}>
                    <div className={stls.programTitle}>
                        {type === 'profession' ? SetString(menu.professions) : type === 'courses' ? SetString(menu.courses) : null}
                        <div className={stls.itemTitle}>


                            <div className={stls.itemDiscount}>
                                <div className={stls.itemDiscountAmount}>
                                    <Discount />
                                </div>
                                <span>
                                    <Until />
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </li>
            <li className={stls.containerItem}>
                <div className={stls.itemDetails}>
                    <ul className={stls.list}>
                        {
                            Object.keys(programs).map((key, i) => {
                                return (
                                    <>
                                        <li key={key} className={stls.listTitle}>
                                            <br />
                                            <strong>{Object.keys(programs)[i]}</strong>
                                            <br />
                                        </li>
                                        {
                                            programs[key].map((item, idx) => {
                                               if (idx < 5) {
                                                return (
                                                    <li key={99} className={stls.listItem}>
                                                        <Link
                                                            href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
                                                            locale='ru'>
                                                            <a onClick={handleLinkClick}>{SetString(item, true)}</a>
                                                        </Link>
                                                    </li>
                                                )
                                               } else if (idx === 5) {
                                                    return (
                                                        <li className={stls.listItem}>
                                                            <Link
                                                                href={`/programs/profession/online  `}
                                                                locale='ru'>
                                                                <a className={stls.link}
                                                                    onClick={handleLinkClick}>More
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    )
                                                } else {
                                                    return
                                                }
                                            })
                                        }
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </li>
        </ul>
    )
}

export default ProgramsList
