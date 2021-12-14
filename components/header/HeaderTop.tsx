import stls from '@/styles/components/header/HeaderTop.module.sass'
import SetString from "@/helpers/SetString"
import useAt from "@/helpers/useAt"
import lang from '@/data/translation/header'
import HeaderInformation from "./HeaderInformation"
import HeaderNav from "./HeaderNav"



const HeaderTop = () => {


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
        <>
            <HeaderInformation classNames={[stls.border]}/>
            <HeaderNav links={links} classNames={[stls.border]}/>
        </>
    )
}


export default HeaderTop