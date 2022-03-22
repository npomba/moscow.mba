import stls from '@/styles/components/header/HeaderNav.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useTranslate } from '@/hooks/index'
import { Wrapper } from '@/components/layout'

const HeaderNav = ({ links, handleMenu, openMenu, classNames = [] }) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
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
            <span>{useTranslate({ en: 'Programs', def: 'Программы' })}</span>
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
