import SetString from "@/helpers/SetString"
import useAt from "@/helpers/useAt"
import lang from '@/data/translation/header'
import classNames from "classnames"
import React from "react"
import Link from "next/link"
import WrapperComponent from "../layout/WrapperComponent"













const HeaderNav = () => {


    const at = useAt()
    const links = [
        {
            href: '/about',
            val: SetString(lang.linkAbout),
            red: at.about
        },
        {
            href: '/teachers',
            val: SetString(lang.linkTeachers),
            red: at.teachers,
            locale: 'ru'
        },
        {
            href: '/webinars',
            val: SetString(lang.linkWebinars),
            red: at.webinars,
            locale: 'ru'
        },
        {
            href: '/contact',
            val: SetString(lang.linkContacts),
            red: at.contact,
            locale: 'ru'
        },
        {
            href: '/legal',
            val: SetString(lang.linkLegal),
            red: at.legal,
            locale: 'ru'
        }
    ]




    return (
        <div className='header-bottom'>
            <WrapperComponent>
                <div className='header-podmenu-outer'>
                    <div
                        className={classNames({
                            'header-podmenu-toggle': true,
                            // opened: menuIsOpen
                        })}
                    //   onClick={handleMenu}
                    >
                        <div className='pic'>
                            <i></i>
                            <i></i>
                        </div>
                        <span>{SetString(lang.programsBtn)}</span>
                    </div>
                </div>
                <ul className='header-menu'>
                    {links.map((item, idx) => (
                        <li key={item.val + idx}>
                            <Link href={item.href} locale={item.locale}>
                                <a
                                    // onClick={handleMenuClose}
                                    className={classNames({
                                        ['widescreen-only']: idx + 1 === links.length,
                                        ['red']: item.red
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