import stls from '@/styles/components/btns/HeaderLangLink.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/header'
import { IconTriangleBottom } from '@/components/icons'

const HeaderLangLink = () => {
  const [showMe, setShowMe] = useState(false)
  const showLangMenu = () => setShowMe(!showMe)
  const router = useRouter()

  // `lang__selectList ${showMe && 'show'}`

  return (
    <div className={classNames(stls.lang, { [stls.redHighlight]: showMe })}>
      <a className={stls.btn} onClick={showLangMenu}>
        {SetString(lang.linkLang)}{' '}
        <IconTriangleBottom fill={`${showMe ? '#FF3535' : '#000'}`} />
      </a>
      <ul className={classNames(stls.list, { [stls.show]: showMe })}>
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

export default HeaderLangLink
