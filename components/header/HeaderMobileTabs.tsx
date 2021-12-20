import stls from "@/styles/components/header/HeaderTabsModile.module.sass"
import classnames from "classnames"
import { useState } from "react"


const HeaderTabsModile = ({ tabs, links }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={stls.container}>
            <li className={stls.item}>
                <span
                    onClick={() => setOpen(true)}
                    className={stls.link}>
                    programs
                </span>
            </li>

            <ul className={classnames(stls.tabs, { [stls.opened]: '' })}>
                <button
                    className={classnames(stls.btn, { [stls.visible]: '' })}
                    onClick={() => setOpen(false)}>
                    <span />
                    back
                </button>
                <p className={stls.title}>programs</p>
                {
                    tabs.map((item, idx) => {
                        return (
                            <li className={stls.item}>
                                <span
                                    className={classnames(stls.link, { [stls.last]: idx + 1 === tabs.length })}>
                                    {item.val}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default HeaderTabsModile