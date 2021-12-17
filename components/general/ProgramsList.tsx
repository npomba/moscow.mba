import stls from '@/styles/components/general/ProgramsList.module.sass'
import { useContext } from 'react'
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
import { IconArrowLeft } from '../icons'

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

    const programs = []
    studyFields.map(itemFilter => {
        let filter = {}
        let fields = []
        data.map(item => {
            if (
                item.category?.type === type &&
                item.studyFormat === 'online' &&
                itemFilter.slug === item?.study_field?.slug
            ) {
                fields.push(item)
                filter.title = itemFilter.title
                filter.fields = fields
            }
        })
        programs.push(filter)
    })

    const columnPrograms = (array) => {
        return array.map((key, i) => {
            return (
                <>
                    <div key={i} className={stls.listTitle}>
                        <p>{key.title}</p>
                    </div>
                    {
                        key.fields.map((item, idx) => {
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
                                    <div className={stls.listItem}>
                                        <Link
                                            href={`/programs/profession/online  `}
                                            locale='ru'>
                                            <a className={stls.link} onClick={handleLinkClick}>
                                                {SetString(menu.linkAllPrograms)}
                                                <IconArrowLeft classNames={[stls.arrow]} />
                                            </a>
                                        </Link>
                                    </div>
                                )
                            }
                        })
                    }
                </>
            )
        })
    }
    return (
        <div
            id={id}
            className={classNames(stls.container)}>
            <div className={stls.programInfo}>
                <div className={stls.programTitle}>
                    {type === 'profession' ? SetString(menu.professions) : type === 'courses' ? SetString(menu.courses) : null}
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
                    {programs && programs.length > 3 ?
                        <>
                            <li className={stls.column}>
                                {columnPrograms(programs.slice(0, Math.ceil(programs.length / 2)))}
                            </li>
                            <li className={stls.column}>
                                {columnPrograms(programs.slice(Math.ceil(programs.length / 2), programs.length))}
                            </li>
                        </>
                        :
                        <>
                            {columnPrograms(programs)}
                        </>
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProgramsList
