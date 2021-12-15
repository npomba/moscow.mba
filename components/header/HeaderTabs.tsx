import stls from "@/styles/components/header/HeaderTabs.module.sass"
import SetString from "@/helpers/SetString"
import Link from "next/link"
import langMenu from '@/data/translation/menu'

const HeaderTabs = ({ tabs, handleMouseEnter, handleMenu, visible }) => {
    const currentTab = visible ? visible.slice(-1) - 1 : 0
    return (
        <ul className={stls.container}>
            {tabs.map((item, idx) => (
                <li key={item.val + idx} className={stls.item}>
                    <Link href={item.href} locale='ru'>
                        <a
                            className={
                                idx === currentTab
                                    ? stls.active
                                    : item.val === SetString(langMenu.allPrograms)
                                        ? stls.all
                                        : undefined
                            }
                            data-tab={item.val !== SetString(langMenu.allPrograms) && `#header-podmenu-${idx + 1}`}
                            onClick={() => handleMenu(false)}
                            onMouseEnter={e => handleMouseEnter(e)}
                        >
                            {item.val}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default HeaderTabs