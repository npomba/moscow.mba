import stls from '@/styles/components/btns/BtnChangeLang.module.sass'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { IconTriangleBottom } from '@/components/icons'

const BtnChangeLang = () => {
  const [showMe, setShowMe] = useState(false)
  const showLangMenu = () => setShowMe(!showMe)
  const router = useRouter()
  const at = useAt()

  return (
    <div className={cn(stls.lang, { [stls.redHighlight]: showMe })}>
      <a className={stls.btn} onClick={showLangMenu}>
        {at.en ? 'EN' : 'RU'}{' '}
        <IconTriangleBottom fill={`${showMe ? '#FF3535' : '#000'}`} />
      </a>
      <ul className={cn(stls.list, { [stls.show]: showMe })}>
        <li className={stls.listItem}>
          <Link href={`${router.pathname}`} locale='ru'>
            <a className={stls.listItemLink} onClick={showLangMenu}>
              <span>🇷🇺</span>РУССКИЙ
            </a>
          </Link>
        </li>
        <li className={stls.listItem}>
          <Link href={`${router.pathname}`} locale='en-US'>
            <a className={stls.listItemLink} onClick={showLangMenu}>
              <span>🇺🇸</span>ENGLISH
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default BtnChangeLang
