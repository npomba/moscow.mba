import stls from '@/styles/components/header/HeaderNav.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import { SetString, getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import lang from '@/data/translation/header'

const HeaderNav = ({ links, handleMenu, openMenu, classNames = [] }) => {
  const container = getClassNames({ classNames })
  return (
    <div className={cn([stls.container], container)}>
      <Wrapper>
        <div className={stls.menu}>
          <div
            className={cn(stls.toggle, {
              [stls.opened]: openMenu
            })}
            onClick={() => handleMenu(!openMenu)}>
            <div className={stls.icon}>
              <i className={stls.line} />
              <i className={stls.line} />
            </div>
            <span>{SetString(lang.programsBtn)}</span>
          </div>
        </div>
        <ul className={stls.list}>
          {links.map((item, idx) => (
            <li key={item.val + idx} className={stls.item}>
              <Link href={item.href} locale={item.locale}>
                <a
                  onClick={() => handleMenu(false)}
                  className={cn(stls.link, {
                    [stls.last]: idx + 1 === links.length,
                    [stls.active]: item.red
                  })}>
                  {item.val}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </div>
  )
}

export default HeaderNav
