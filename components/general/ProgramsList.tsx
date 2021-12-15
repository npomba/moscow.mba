import stls from '@/styles/components/general/ProgramsColumn.module.sass'
import { useContext } from 'react'
import MenuContext from '@/context/menu/menuContext'
import OverlayContext from '@/context/overlay/overlayContext'
import classNames from 'classnames'
import Link from 'next/link'
import langMenu from '@/data/translation/menu'
import { SetString, useAt } from '@/helpers/index'
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
    IconClock
} from '@/components/icons'
import menu from '@/data/translation/menu'

const ProgramsList = ({ data, id, type }) => {
    const { menuIsOpen, openMenu, closeMenu, toggleMenu } = useContext(
        MenuContext
    )
    const {
        hideOverlay,
    } = useContext(OverlayContext)

    const handleLinkClick = () => {
        closeMenu()
        hideOverlay()
    }

    const at = useAt()

    return (
        <ul
            id={id}
            className={classNames(stls.container)}>
            <li className={stls.containerItem}>
                <div className={stls.programInfo}>
                    <div className={stls.programTitle}>
                        {type === 'profession' ? SetString(menu.professions) : type === 'courses' ? SetString(menu.courses) : null}
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
                        {data &&
                            data.map(item => {
                                if (
                                    (item.category?.type === type &&
                                        item.studyFormat === 'online')
                                    || (item.slug === 'international-business-law' && item.category.type === 'mbl' && type === 'mba')
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




        </ul>
    )
}

export default ProgramsList
