import stls from "@/styles/components/header/HeaderTabs.module.sass"
import SetString from "@/helpers/SetString"
import Link from "next/link"
import langMenu from '@/data/translation/menu'








const HeaderTabs = ({ tabs }) => {




    return (
        <ul className={stls.container}>
            {tabs.map((item, idx) => (
                <li key={item.val + idx} className={stls.item}>
                    <Link href={item.href} locale='ru'>
                        <a
                            className={
                                idx === 0
                                    ? stls.active
                                    : item.val === SetString(langMenu.allPrograms)
                                        ? stls.all
                                        : undefined
                            }
                            data-tab={
                                idx === 0 || idx === 1
                                    ? `#header-podmenu-${idx + 1}`
                                    : undefined
                            }
                        //   onClick={handleMenuClose}
                        //   onMouseEnter={
                        //     idx === 0 || idx === 1 ? e => handleMouseEnter(e) : undefined
                        //   }
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