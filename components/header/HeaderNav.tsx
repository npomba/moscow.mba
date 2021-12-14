import stls from "@/styles/components/header/HeaderNav.module.sass"
import SetString from "@/helpers/SetString"
import lang from '@/data/translation/header'
import classnames from "classnames"
import Link from "next/link"
import WrapperComponent from "@/components/layout/WrapperComponent"
import getClassNames from "@/helpers/getClassNames"

const HeaderNav = ({links, classNames = []}) => {
    const container = getClassNames({ classNames })
    let menuIsOpen = false

    return (
        <div className={classnames([stls.container], container)}>
            <WrapperComponent>
                <div className={stls.menu}>
                    <div
                        className={classnames( stls.toggle, {
                            [stls.opened]: menuIsOpen
                        })}
                    //   onClick={handleMenu}
                    >
                        <div className={stls.icon}>
                            <i className={stls.line}/>
                            <i className={stls.line}/>
                        </div>
                        <span>{SetString(lang.programsBtn)}</span>
                    </div>
                </div>
                <ul className={stls.list}>
                    {links.map((item, idx) => (
                        <li key={item.val + idx}>
                            <Link href={item.href} locale={item.locale}>
                                <a
                                    // onClick={handleMenuClose}
                                    className={classnames(stls.link, {
                                        [stls.last]: idx + 1 === links.length,
                                        [stls.active]: item.red
                                    })}>
                                    {item.val}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </WrapperComponent>
        </div>
    )
}

export default HeaderNav