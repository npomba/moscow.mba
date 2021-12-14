import stls from "@/styles/components/header/HeaderMenu.module.sass"
import SetString from "@/helpers/SetString"
import HeaderPrograms from "./HeaderPrograms"
import HeaderTabs from "./HeaderTabs"
import langMenu from '@/data/translation/menu'



const HeaderMenu = ({ programs }) => {


  const tabs = [
    {
      href: '/programs/mini/online',
      val: 'Mini MBA'
    },
    {
      href: '/programs/mba/online',
      val: 'MBA'
    },
    {
      href: '/programs/profession/online',
      val: SetString(langMenu.professions)
    },
    // {
    //   href: '/programs/course/online',
    //   val: SetString(langMenu.courses)
    // },
    // {
    //   href: '/programs/international-business-law',
    //   val: SetString(langMenu.internationalBusinessLaw)
    // },
    {
      href: '/programs/mini/online',
      val: SetString(langMenu.allPrograms)
    }
  ]



  return (
    <div className={stls.container}>
      <div className={stls.content}>
        <HeaderTabs tabs={tabs} />
        <HeaderPrograms programs={programs} />
      </div>
    </div>
  )
}

export default HeaderMenu