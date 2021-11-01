import stls from '@/styles/components/layout/Header.module.sass'
import Link from 'next/link'
import { useContext, useState } from 'react'
import MenuContext from '@/context/menu/menuContext'
import OverlayContext from '@/context/overlay/overlayContext'
import { useRouter } from 'next/router'
import lang from '@/data/translation/header'
import langMenu from '@/data/translation/menu'
import { SetString } from '@/helpers/index'
import HeaderLangLink from '@/components/btns/HeaderLangLink'
import Until from '@/components/costs/Until'
import Price from '@/components/costs/Price'
import { useAt } from '@/helpers/index'
import ProgramSubjects from '@/components/general/ProgramSubjects'
import ProgramsQty from '@/components/general/ProgramsQty'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import contactData from '@/data/contactData'
import classNames from 'classnames'
import {
  IconLocation,
  IconLogo,
  IconLogoTitle,
  IconCheckCircle,
  IconScreen,
  IconPaperCorner,
  IconClock,
  IconMobilePhone
} from '@/components/icons'
import ProgramsColumn from '@/components/general/ProgramsColumn'
import Discount from '@/components/costs/Discount'
import { ImgLogoRabo, ImgLogoMde } from '@/components/images'

const Header = ({ programs }) => {
  let data = programs || []

  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  const { overlayIsShown, showOverlay, hideOverlay, toggleOverlay } =
    useContext(OverlayContext)

  const handleMenu = () => {
    toggleMenu()
    toggleOverlay()
  }

  const handleMenuClose = e => {
    if (at.promo) {
      e.preventDefault()
      return
    }

    closeMenu()
    hideOverlay()
  }

  const handleMouseEnter = e => {
    const list = Array.from(
      document.querySelectorAll('.header-podmenu-tabs a')
    ).slice(0, -1)
    list.forEach(item => item.classList.remove('active-tab'))
    e.currentTarget.classList.add('active-tab')

    const contentList = Array.from(
      document.querySelectorAll('.header-podmenu-content')
    )
    contentList.forEach(item => {
      if (item.id === e.currentTarget.dataset.tab.slice(1)) {
        item.classList.add('dflex')
        item.classList.remove('dnone')
      } else {
        item.classList.add('dnone')
        item.classList.remove('dflex')
      }
    })
  }

  const [mobileSecond, setMobileSecond] = useState(false)
  const [mobileLang, setMobileLang] = useState(false)
  const [mobileThirdMini, setMobileThirdMini] = useState(false)
  const [mobileThirdProfessional, setMobileThirdProfessional] = useState(false)
  const [mobileThirdIndustry, setMobileThirdIndustry] = useState(false)
  const [miniOnline, setMiniOnline] = useState(true)
  const [professionalOnline, setProfessionalOnline] = useState(true)
  const [industryOnline, setIndustryOnline] = useState(true)

  const contactInfo = contactData()

  const router = useRouter()

  const at = useAt()

  return (
    <>
      <header>
        <div className={stls.generalContainer}>
          <div className='header-top'>
            <Link href='/'>
              <a
                className={classNames({
                  ['main-logo']: true,
                  ['mainLogoDisabled']: at.promo
                })}
                onClick={e => handleMenuClose(e)}
                aria-label='Moscow Business Academy'>
                <span className='pic'>
                  <IconLogo />
                </span>
                <span className='text'>
                  <IconLogoTitle />
                </span>
              </a>
            </Link>
            <div className='header-logos'>
              <span className='rabo'>
                <ImgLogoRabo />
              </span>
              <span className='dep'>
                <ImgLogoMde />
              </span>
            </div>
            <div className='header-place'>
              <IconLocation />
              {SetString(contactInfo.ru.address.city)},{' '}
              {SetString(contactInfo.ru.address.street)}
            </div>
            <div className='header-phones'>
              <a
                href={contactInfo.ru.tels[0].href}
                className='iconMainNumHeader'>
                {contactInfo.ru.tels[0].val}
              </a>
              <a href={contactInfo.ru.tels[1].href}>
                {contactInfo.ru.tels[1].val}
              </a>
              <a href={contactInfo.ru.tels[0].href} className='iconPhoneHeader'>
                <IconMobilePhone large fill={'#000'} />
              </a>
            </div>
            {at.index || at.about || at.contact ? <HeaderLangLink /> : null}
            {!at.promo && (
              <div
                className={classNames({
                  'header-buter': true,
                  opened: menuIsOpen
                })}
                onClick={toggleMenu}>
                <i></i>
                <i></i>
                <i></i>
              </div>
            )}
          </div>
          {!at.promo && (
            <div className='header-bottom'>
              <div className='header-podmenu-outer'>
                <div
                  className={classNames({
                    'header-podmenu-toggle': true,
                    opened: menuIsOpen
                  })}
                  onClick={handleMenu}>
                  <div className='pic'>
                    <i></i>
                    <i></i>
                  </div>
                  <span>{SetString(lang.programsBtn)}</span>
                </div>
              </div>
              <ul className='header-menu'>
                <li>
                  <Link href='/about'>
                    <a
                      onClick={handleMenuClose}
                      className={at.about ? 'red' : ''}>
                      {SetString(lang.linkAbout)}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/teachers' locale='ru'>
                    <a
                      onClick={handleMenuClose}
                      className={at.teachers ? 'red' : ''}>
                      {SetString(lang.linkTeachers)}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/webinars' locale='ru'>
                    <a
                      onClick={handleMenuClose}
                      className={at.webinars ? 'red' : ''}>
                      {SetString(lang.linkWebinars)}
                    </a>
                  </Link>
                </li>
                {/* <li>
              <a href=''>Журнал</a>
            </li> */}
                {/* <li>
              <a href=''>Контакты</a>
            </li> */}
                {/* <li>
              <Link href='/articles' locale='ru'>
                <a className={at.articles ? 'red' : ''}>
                  {SetString(lang.linkNews)}
                </a>
              </Link>
            </li> */}

                <li>
                  <Link href='/contact'>
                    <a
                      onClick={handleMenuClose}
                      className={at.contact ? 'red' : ''}>
                      {SetString(lang.linkContacts)}
                    </a>
                  </Link>
                </li>

                <li className='widescreen-only'>
                  <Link href='/legal' locale='ru'>
                    <a
                      onClick={handleMenuClose}
                      className={at.legal ? 'red' : ''}>
                      {SetString(lang.linkLegal)}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div
          className={classNames({
            'header-podmenu': true,
            [stls.hidden]: !menuIsOpen
          })}>
          <div className='container'>
            <div className='header-podmenu-flex'>
              <div className='header-podmenu-left'>
                <ul className='header-podmenu-tabs'>
                  <li>
                    <Link href='/programs/mini/online' locale='ru'>
                      <a
                        className='active-tab'
                        data-tab='#header-podmenu-1'
                        onClick={handleMenuClose}
                        onMouseEnter={e => handleMouseEnter(e)}>
                        Mini MBA
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/programs/professional/online' locale='ru'>
                      <a
                        data-tab='#header-podmenu-2'
                        onClick={handleMenuClose}
                        onMouseEnter={e => handleMouseEnter(e)}>
                        Professional MBA
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/programs/industry/online' locale='ru'>
                      <a
                        data-tab='#header-podmenu-3'
                        onClick={handleMenuClose}
                        onMouseEnter={e => handleMouseEnter(e)}>
                        Industry MBA
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/programs/profession/online' locale='ru'>
                      <a onClick={handleMenuClose}>
                        {SetString(langMenu.professions)}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/programs/international-business-law'
                      locale='ru'>
                      <a onClick={handleMenuClose}>
                        {SetString(langMenu.internationalBusinessLaw)}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/programs/mini/online' locale='ru'>
                      <a className='allPrograms' onClick={handleMenuClose}>
                        {SetString(langMenu.allPrograms)}
                      </a>
                    </Link>
                  </li>
                </ul>
                <div className='header-podmenu-premium'>
                  <div className='label'>
                    <span>Premium</span>
                  </div>
                  <Link href='/programs/executive' locale='ru'>
                    <a onClick={handleMenuClose}>Executive MBA</a>
                  </Link>
                </div>
              </div>
              <div className='header-podmenu-right'>
                <ProgramsColumn
                  data={data}
                  id={'header-podmenu-1'}
                  type={'mini'}
                />
                <ProgramsColumn
                  data={data}
                  id={'header-podmenu-2'}
                  type={'professional'}
                />
                <ProgramsColumn
                  data={data}
                  id={'header-podmenu-3'}
                  type={'industry'}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className='header-overlay'></div> */}

        {/* mobile menu */}
        <div
          className={classNames({
            'header-mobile-podmenu': true,
            dblock: menuIsOpen
          })}>
          {/* first */}
          <div className='header-mobile-first'>
            <div className='container'>
              <ul className='header-mobile-menu'>
                <li>
                  <a
                    className='mobile-second-toggle'
                    onClick={() => setMobileSecond(true)}>
                    <strong>{SetString(lang.programsBtn)}</strong>
                  </a>
                </li>
                <li>
                  <Link href='/about'>
                    <a
                      className='onClickCloseMobileMenu'
                      onClick={handleMenuClose}>
                      {SetString(lang.linkAbout)}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/teachers' locale='ru'>
                    <a
                      className='onClickCloseMobileMenu'
                      onClick={handleMenuClose}>
                      {SetString(lang.linkTeachers)}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/webinars' locale='ru'>
                    <a
                      className='onClickCloseMobileMenu'
                      onClick={handleMenuClose}>
                      {SetString(lang.linkWebinars)}
                    </a>
                  </Link>
                </li>
                {/* <li>
                <a href=''>Журнал</a>
              </li>
              <li>
                <a href=''>Контакты</a>
              </li> */}
                {/* <li>
                <Link href='/articles' locale='ru'>
                  <a className='onClickCloseMobileMenu'>
                    {SetString(lang.linkNews)}
                  </a>
                </Link>
              </li> */}
                <li>
                  <Link href='/contact'>
                    <a
                      className='onClickCloseMobileMenu'
                      onClick={handleMenuClose}>
                      {SetString(lang.linkContacts)}
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href='/legal' locale='ru'>
                    <a
                      className={`onClickCloseMobileMenu ${
                        at.legal ? 'red' : ''
                      }`}
                      onClick={handleMenuClose}>
                      {SetString(lang.linkLegal)}
                    </a>
                  </Link>
                </li>

                {router.pathname === '/' ||
                router.pathname === '/about' ||
                router.pathname === '/contact' ? (
                  <li>
                    <a
                      className='mobile-lang-toggle'
                      onClick={() => setMobileLang(true)}>
                      {SetString(lang.linkLang)}
                    </a>
                  </li>
                ) : null}
              </ul>
              <div className='header-logos'>
                <span className='rabo'>
                  <ImgLogoRabo />
                </span>
                <span className='dep'>
                  <ImgLogoMde />
                </span>
              </div>
              <div className='header-place'>
                <IconLocation />
                <span>{SetString(lang.address)}</span>
              </div>
            </div>
          </div>
          {/* //first */}

          {/* second */}
          <div
            className={classNames({
              'header-mobile-second': true,
              opened: mobileSecond
            })}>
            <div className='container'>
              <div
                className='menu-back-link'
                onClick={() => setMobileSecond(false)}>
                <i></i>
                {SetString(langMenu.backBtn)}
              </div>
              <h3>{SetString(lang.programsBtn)}</h3>
              <ul className='header-mobile-menu'>
                <li>
                  <a
                    className='mobile-third-toggle'
                    onClick={() => setMobileThirdMini(true)}>
                    Mini MBA
                  </a>

                  {/* third */}
                  <div
                    className={classNames({
                      'header-mobile-third': true,
                      opened: mobileThirdMini
                    })}>
                    <div className='container'>
                      <div
                        className='menu-back-link'
                        onClick={() => setMobileThirdMini(false)}>
                        <i></i>
                        {SetString(langMenu.toProgramsBtn)}
                      </div>
                      <h3>Mini MBA</h3>
                      <div className='program-tabs-content'>
                        <ul className='program-options-block-tabs'>
                          <li>
                            <a
                              className={classNames({ active: miniOnline })}
                              onClick={() => setMiniOnline(true)}>
                              ONLINE
                            </a>
                          </li>
                          <li>
                            <a
                              className={classNames({ active: !miniOnline })}
                              onClick={() => setMiniOnline(false)}>
                              BLENDED
                            </a>
                          </li>
                        </ul>
                        <div className='program-options-detail'>
                          <div
                            id='program-mobile-1-1'
                            className={classNames({
                              'program-options-block': true,
                              show: miniOnline
                            })}>
                            <div className='name'>
                              {SetString(langMenu.onlineTitle)}
                              <div className='discount'>
                                <div className='size'>
                                  <Discount />
                                </div>
                                <span>
                                  <Until />
                                </span>
                              </div>
                            </div>
                            <ProgramsQty
                              programs={data}
                              type={'mini'}
                              format={'online'}
                            />
                            <div className='price'>
                              {SetString(langMenu.price)}:{' '}
                              <Price
                                discount={true}
                                type={'mini'}
                                format={'online'}
                              />{' '}
                            </div>
                            <div className='info-list'>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconCheckCircle fill={'#C7C7C7'} />
                                </div>
                                <span>{SetString(langMenu.formatRemote)}</span>
                              </div>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconScreen fill={'#C7C7C7'} />
                                </div>
                                <span>
                                  <ProgramSubjects type='mini' sum={true} />{' '}
                                  {SetString(langMenu.qtSubjects)}
                                </span>
                              </div>
                            </div>
                            <ul className='program-options-block-list'>
                              {data.map(item => {
                                if (
                                  item.mbaTypeOfProgram === 'mini' &&
                                  item.mbaFormat === 'online'
                                ) {
                                  return (
                                    <li key={item._id}>
                                      <Link
                                        href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                        locale='ru'>
                                        <a onClick={handleMenuClose}>
                                          {SetString(item, true)}
                                        </a>
                                      </Link>
                                    </li>
                                  )
                                }
                              })}
                            </ul>
                          </div>
                          <div
                            id='program-mobile-1-2'
                            className={classNames({
                              'program-options-block': true,
                              show: !miniOnline
                            })}>
                            <div className='name'>
                              {SetString(langMenu.blendedTitle)}
                            </div>
                            <ProgramsQty
                              programs={data}
                              type={'mini'}
                              format={'blended'}
                            />
                            <div className='price'>
                              {SetString(langMenu.price)}:{' '}
                              <Price
                                discount={false}
                                type={'mini'}
                                format={'blended'}
                              />
                            </div>
                            <div className='info-list'>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconCheckCircle fill={'#C7C7C7'} />
                                </div>
                                <span>{SetString(langMenu.formatBlended)}</span>
                              </div>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconScreen fill={'#C7C7C7'} />
                                </div>
                                <span>
                                  <ProgramSubjects type='mini' sum={true} />{' '}
                                  {SetString(langMenu.qtSubjects)}
                                </span>
                              </div>
                            </div>
                            <ul className='program-options-block-list'>
                              {data.map(item => {
                                if (
                                  item.mbaTypeOfProgram === 'mini' &&
                                  item.mbaFormat === 'blended'
                                ) {
                                  return (
                                    <li key={item._id}>
                                      <Link
                                        href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                        locale='ru'>
                                        <a onClick={handleMenuClose}>
                                          {SetString(item, true)}
                                        </a>
                                      </Link>
                                    </li>
                                  )
                                }
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='header-podmenu-info'>
                        <div className='name'>Mini MBA</div>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconClock fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <TrainingPeriod type='mini' />
                          </span>
                        </div>
                        <p>{SetString(langMenu.categoryDiscMini)}</p>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconPaperCorner fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <ProgramSubjects type='mini' subjects='base' />{' '}
                            {SetString(langMenu.categoryAboutManagement)}
                          </span>
                        </div>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconPaperCorner fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <ProgramSubjects type='mini' subjects='specialty' />{' '}
                            {SetString(langMenu.categorySpecializedSubjects)}
                          </span>
                        </div>
                      </div>
                      <div
                        className='menu-back-link last'
                        onClick={() => setMobileThirdMini(false)}>
                        <i></i>
                        {SetString(langMenu.toProgramsBtn)}
                      </div>
                    </div>
                  </div>
                  {/* //third */}
                </li>
                <li>
                  <a
                    className='mobile-third-toggle'
                    onClick={() => setMobileThirdProfessional(true)}>
                    Professional MBA
                  </a>

                  {/*third */}
                  <div
                    className={classNames({
                      'header-mobile-third': true,
                      opened: mobileThirdProfessional
                    })}>
                    <div className='container'>
                      <div
                        className='menu-back-link'
                        onClick={() => setMobileThirdProfessional(false)}>
                        <i></i>
                        {SetString(langMenu.toProgramsBtn)}
                      </div>
                      <h3>Professional MBA</h3>
                      <div className='program-tabs-content'>
                        <ul className='program-options-block-tabs'>
                          <li>
                            <a
                              className={classNames({
                                active: professionalOnline
                              })}
                              onClick={() => setProfessionalOnline(true)}>
                              ONLINE
                            </a>
                          </li>
                          <li>
                            <a
                              className={classNames({
                                active: !professionalOnline
                              })}
                              onClick={() => setProfessionalOnline(false)}>
                              BLENDED
                            </a>
                          </li>
                        </ul>
                        <div className='program-options-detail'>
                          <div
                            id='program-mobile-2-1'
                            className={classNames({
                              'program-options-block': true,
                              show: professionalOnline
                            })}>
                            <div className='name'>
                              {SetString(langMenu.onlineTitle)}
                              <div className='discount'>
                                <div className='size'>
                                  <Discount />
                                </div>
                                <span>
                                  <Until />
                                </span>
                              </div>
                            </div>
                            <ProgramsQty
                              programs={data}
                              type={'professional'}
                              format={'online'}
                            />
                            <div className='price'>
                              {SetString(langMenu.price)}:{' '}
                              <Price
                                discount={true}
                                type={'professional'}
                                format={'online'}
                              />{' '}
                            </div>
                            <div className='info-list'>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconCheckCircle fill={'#C7C7C7'} />
                                </div>
                                <span>{SetString(langMenu.formatRemote)}</span>
                              </div>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconScreen fill={'#C7C7C7'} />
                                </div>
                                <span>
                                  <ProgramSubjects
                                    type='professional'
                                    sum={true}
                                  />{' '}
                                  {SetString(langMenu.qtSubjects)}
                                </span>
                              </div>
                            </div>
                            <ul className='program-options-block-list'>
                              {data.map(item => {
                                if (
                                  item.mbaTypeOfProgram === 'professional' &&
                                  item.mbaFormat === 'online'
                                ) {
                                  return (
                                    <li key={item._id}>
                                      <Link
                                        href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                        locale='ru'>
                                        <a onClick={handleMenuClose}>
                                          {SetString(item, true)}
                                        </a>
                                      </Link>
                                    </li>
                                  )
                                }
                              })}
                            </ul>
                          </div>
                          <div
                            id='program-mobile-2-2'
                            className={classNames({
                              'program-options-block': true,
                              show: !professionalOnline
                            })}>
                            <div className='name'>
                              {SetString(langMenu.blendedTitle)}
                            </div>
                            <ProgramsQty
                              programs={data}
                              type={'professional'}
                              format={'blended'}
                            />
                            <div className='price'>
                              {SetString(langMenu.price)}:{' '}
                              <Price
                                discount={false}
                                type={'professional'}
                                format={'blended'}
                              />
                            </div>
                            <div className='info-list'>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconCheckCircle fill={'#C7C7C7'} />
                                </div>
                                <span>{SetString(langMenu.formatBlended)}</span>
                              </div>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconScreen fill={'#C7C7C7'} />
                                </div>
                                <span>
                                  <ProgramSubjects
                                    type='professional'
                                    sum={true}
                                  />{' '}
                                  {SetString(langMenu.qtSubjects)}
                                </span>
                              </div>
                            </div>
                            <ul className='program-options-block-list'>
                              {data.map(item => {
                                if (
                                  item.mbaTypeOfProgram === 'professional' &&
                                  item.mbaFormat === 'blended'
                                ) {
                                  return (
                                    <li key={item._id}>
                                      <Link
                                        href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                        locale='ru'>
                                        <a onClick={handleMenuClose}>
                                          {SetString(item, true)}
                                        </a>
                                      </Link>
                                    </li>
                                  )
                                }
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='header-podmenu-info'>
                        <div className='name'>Professional MBA</div>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconClock fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <TrainingPeriod type='professional' />
                          </span>
                        </div>
                        <p>{SetString(langMenu.categoryDiscProfessional)}</p>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconPaperCorner fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <ProgramSubjects
                              type='professional'
                              subjects='base'
                            />{' '}
                            {SetString(langMenu.categoryAboutManagement)}
                          </span>
                        </div>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconPaperCorner fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <ProgramSubjects
                              type='professional'
                              subjects='specialty'
                            />{' '}
                            {SetString(langMenu.categorySpecializedSubjects)}
                          </span>
                        </div>
                      </div>
                      <div
                        className='menu-back-link last'
                        onClick={() => setMobileThirdProfessional(false)}>
                        <i></i>
                        {SetString(langMenu.toProgramsBtn)}
                      </div>
                    </div>
                  </div>
                  {/* //third */}
                </li>
                <li>
                  <a
                    className='mobile-third-toggle'
                    onClick={() => setMobileThirdIndustry(true)}>
                    Industry MBA
                  </a>

                  {/* third */}
                  <div
                    className={classNames({
                      'header-mobile-third': true,
                      opened: mobileThirdIndustry
                    })}>
                    <div className='container'>
                      <div
                        className='menu-back-link'
                        onClick={() => setMobileThirdIndustry(false)}>
                        <i></i>
                        {SetString(langMenu.toProgramsBtn)}
                      </div>
                      <h3>Industry MBA</h3>
                      <div className='program-tabs-content'>
                        <ul className='program-options-block-tabs'>
                          <li>
                            <a
                              className={classNames({ active: industryOnline })}
                              onClick={() => setIndustryOnline(true)}>
                              ONLINE
                            </a>
                          </li>
                          <li>
                            <a
                              className={classNames({
                                active: !industryOnline
                              })}
                              onClick={() => setIndustryOnline(false)}>
                              BLENDED
                            </a>
                          </li>
                        </ul>
                        <div className='program-options-detail'>
                          <div
                            id='program-mobile-3-1'
                            className={classNames({
                              'program-options-block': true,
                              show: industryOnline
                            })}>
                            <div className='name'>
                              {SetString(langMenu.onlineTitle)}
                              <div className='discount'>
                                <div className='size'>
                                  <Discount />
                                </div>
                                <span>
                                  <Until />
                                </span>
                              </div>
                            </div>
                            <ProgramsQty
                              programs={data}
                              type={'industry'}
                              format={'online'}
                            />
                            <div className='price'>
                              {SetString(langMenu.price)}:{' '}
                              <Price
                                discount={true}
                                type={'industry'}
                                format={'online'}
                              />{' '}
                            </div>
                            <div className='info-list'>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconCheckCircle fill={'#C7C7C7'} />
                                </div>
                                <span>{SetString(langMenu.formatRemote)}</span>
                              </div>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconScreen fill={'#C7C7C7'} />
                                </div>
                                <span>
                                  <ProgramSubjects type='industry' sum={true} />{' '}
                                  {SetString(langMenu.qtSubjects)}
                                </span>
                              </div>
                            </div>
                            <ul className='program-options-block-list'>
                              {data.map(item => {
                                if (
                                  item.mbaTypeOfProgram === 'industry' &&
                                  item.mbaFormat === 'online'
                                ) {
                                  return (
                                    <li key={item._id}>
                                      <Link
                                        href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                        locale='ru'>
                                        <a onClick={handleMenuClose}>
                                          {SetString(item, true)}
                                        </a>
                                      </Link>
                                    </li>
                                  )
                                }
                              })}
                            </ul>
                          </div>
                          <div
                            id='program-mobile-3-2'
                            className={classNames({
                              'program-options-block': true,
                              show: !industryOnline
                            })}>
                            <div className='name'>
                              {SetString(langMenu.blendedTitle)}
                            </div>
                            <ProgramsQty
                              programs={data}
                              type={'industry'}
                              format={'blended'}
                            />
                            <div className='price'>
                              {SetString(langMenu.price)}:{' '}
                              <Price
                                discount={false}
                                type={'industry'}
                                format={'blended'}
                              />
                            </div>
                            <div className='info-list'>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconCheckCircle fill={'#C7C7C7'} />
                                </div>
                                <span>{SetString(langMenu.formatBlended)}</span>
                              </div>
                              <div className='info-flex'>
                                <div className='pic'>
                                  <IconScreen fill={'#C7C7C7'} />
                                </div>
                                <span>
                                  <ProgramSubjects type='industry' sum={true} />{' '}
                                  {SetString(langMenu.qtSubjects)}
                                </span>
                              </div>
                            </div>
                            <ul className='program-options-block-list'>
                              {data.map(item => {
                                if (
                                  item.mbaTypeOfProgram === 'industry' &&
                                  item.mbaFormat === 'blended'
                                ) {
                                  return (
                                    <li key={item._id}>
                                      <Link
                                        href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                                        locale='ru'>
                                        <a onClick={handleMenuClose}>
                                          {SetString(item, true)}
                                        </a>
                                      </Link>
                                    </li>
                                  )
                                }
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='header-podmenu-info'>
                        <div className='name'>Industry MBA</div>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconClock fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <TrainingPeriod type='industry' />
                          </span>
                        </div>
                        <p>{SetString(langMenu.categoryDiscIndustry)}</p>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconPaperCorner fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <ProgramSubjects type='industry' subjects='base' />{' '}
                            {SetString(langMenu.categoryAboutManagement)}
                          </span>
                        </div>
                        <div className='info-flex'>
                          <div className='pic'>
                            <IconPaperCorner fill={'#C7C7C7'} />
                          </div>
                          <span>
                            <ProgramSubjects
                              type='industry'
                              subjects='specialty'
                            />{' '}
                            {SetString(langMenu.categorySpecializedSubjects)}
                          </span>
                        </div>
                      </div>
                      <div
                        className='menu-back-link last'
                        onClick={() => setMobileThirdIndustry(false)}>
                        <i></i>
                        {SetString(langMenu.toProgramsBtn)}
                      </div>
                    </div>
                  </div>
                  {/* //third */}
                </li>
                <li>
                  <Link href='/programs/profession/online' locale='ru'>
                    <a
                      className='mobileAllProgramsLink'
                      onClick={handleMenuClose}>
                      Профессии
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/programs/mini/online' locale='ru'>
                    <a
                      className='mobileAllProgramsLink'
                      onClick={handleMenuClose}>
                      {SetString(langMenu.allPrograms)}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* //second */}

          {/* header-mobile-lang */}
          <div
            className={classNames({
              'header-mobile-lang': true,
              opened: mobileLang
            })}>
            <div className='container'>
              <div
                className='menu-back-link'
                onClick={() => setMobileLang(false)}>
                <i></i>
                {SetString(langMenu.backBtn)}
              </div>
              <ul className='header-mobile-menu'>
                <li>
                  <Link href={`${router.pathname}`} locale='ru'>
                    <a id='switchToRuBtn' onClick={handleMenuClose}>
                      🇷🇺&nbsp;Русский
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`${router.pathname}`} locale='en-US'>
                    <a id='switchToEnBtn' onClick={handleMenuClose}>
                      🇺🇸&nbsp;English
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* //header-mobile-lang */}
        </div>
        {/* //mobile menu */}
      </header>
    </>
  )
}

export default Header
