import Link from 'next/link'
import { useRouter } from 'next/router'
// import PopulateWithPrograms from './hooks/populateWithPrograms'
import lang from '@/data/translation/header'
import langMenu from '@/data/translation/menu'
import setString from '@/components/hooks/setString'

import HeaderLangLink from '@/components/HeaderLangLink'
import Until from '@/components/dates/Until'
import Price from '@/components/prices/Price'

import useAt from '@/components/hooks/useAt'

import ProgramSubjects from '@/components/hooks/ProgramSubjects'
import ProgramsQt from '@/components/hooks/ProgramsQt'

import { useEffect } from 'react'
import loadJs from 'loadjs'
import TrainingPeriod from '@/components/dates/TrainingPeriod'

import contactData from '@/data/contactData'
import SVGLocation from '@/components/svgs/SVGLocation'
import SVGLogo from '@/components/svgs/SVGLogo'
import SVGLogoTitle from '@/components/svgs/SVGLogoTitle'
import Image from 'next/image'
import ProgramsColumn from './general/ProgramsColumn'
import Discount from './prices/Discount'
import SVGCheckCircle from './svgs/SVGCheckCircle'
import SVGScreen from './svgs/SVGScreen'
import SVGPaperCorner from './svgs/SVGPaperCorner'
import SVGClock from './svgs/SVGClock'

const Header = ({ programs }) => {
  useEffect(() => {
    loadJs(['/assets/js/header.js'], {
      async: false
    })
  }, [])

  let data = programs || []

  const contactInfo = contactData()

  const router = useRouter()

  const at = useAt()

  return (
    <header>
      <div className='container'>
        <div className='header-top'>
          <Link href='/'>
            <a className='main-logo' aria-label='Moscow Business Academy'>
              <span className='pic'>
                <SVGLogo />
              </span>
              <span className='text'>
                <SVGLogoTitle />
              </span>
            </a>
          </Link>
          <div className='header-logos'>
            <span className='rabo'>
              <Image
                src='/assets/images/logo_rabo.png'
                alt='Российская ассоциация бизнес-образования'
                width={117}
                height={30}
              />
            </span>
            <span className='dep'>
              <Image
                src='/assets/images/logo_department.png'
                alt='Департамент образования города Москва'
                width={105}
                height={31}
              />
            </span>
          </div>
          <div className='header-place'>
            <SVGLocation />
            {setString(contactInfo.addresses[0].data.city)},{' '}
            {setString(contactInfo.addresses[0].data.street)}
          </div>
          <div className='header-phones'>
            <a href={contactInfo.tels[0].data.href}>
              {contactInfo.tels[0].data.val}
            </a>
            <a href={contactInfo.tels[1].data.href}>
              {contactInfo.tels[1].data.val}
            </a>
          </div>
          {at.index || at.about ? <HeaderLangLink /> : null}
          <div className='header-buter'>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
        <div className='header-bottom'>
          <div className='header-podmenu-outer'>
            <div className='header-podmenu-toggle'>
              <div className='pic'>
                <i></i>
                <i></i>
              </div>
              <span>{setString(lang.programsBtn)}</span>
            </div>
          </div>
          <ul className='header-menu'>
            <li>
              <Link href='/about'>
                <a className={at.about ? 'red' : ''}>
                  {setString(lang.linkAbout)}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/teachers' locale='ru'>
                <a className={at.teachers ? 'red' : ''}>
                  {setString(lang.linkTeachers)}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/webinars' locale='ru'>
                <a className={at.webinars ? 'red' : ''}>
                  {setString(lang.linkWebinars)}
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
                  {setString(lang.linkNews)}
                </a>
              </Link>
            </li> */}

            <li>
              <Link href='/contact' locale='ru'>
                <a className={at.contact ? 'red' : ''}>
                  {setString(lang.linkContacts)}
                </a>
              </Link>
            </li>

            <li className='widescreen-only'>
              <Link href='/legal' locale='ru'>
                <a className={at.legal ? 'red' : ''}>
                  {setString(lang.linkLegal)}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='header-podmenu'>
        <div className='container'>
          <div className='header-podmenu-flex'>
            <div className='header-podmenu-left'>
              <ul className='header-podmenu-tabs'>
                <li>
                  <Link href='/programs/mini/online' locale='ru'>
                    <a
                      data-tab='#header-podmenu-1'
                      className='active-tab headerMenuTabs'>
                      Mini MBA
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/programs/professional/online' locale='ru'>
                    <a data-tab='#header-podmenu-2' className='headerMenuTabs'>
                      Professional MBA
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/programs/industry/online' locale='ru'>
                    <a data-tab='#header-podmenu-3' className='headerMenuTabs'>
                      Industry MBA
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/programs/mini/online' locale='ru'>
                    <a>{setString(langMenu.allPrograms)}</a>
                  </Link>
                </li>
              </ul>
              <div className='header-podmenu-premium'>
                <div className='label'>
                  <span>Premium</span>
                </div>
                <Link href='/programs/executive' locale='ru'>
                  <a>Executive MBA</a>
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
      <div className='header-mobile-podmenu'>
        {/* first */}
        <div className='header-mobile-first'>
          <div className='container'>
            <ul className='header-mobile-menu'>
              <li>
                <a href='' className='mobile-second-toggle'>
                  <strong>{setString(lang.programsBtn)}</strong>
                </a>
              </li>
              <li>
                <Link href='/about'>
                  <a className='onClickCloseMobileMenu'>
                    {setString(lang.linkAbout)}
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/teachers' locale='ru'>
                  <a className='onClickCloseMobileMenu'>
                    {setString(lang.linkTeachers)}
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/webinars' locale='ru'>
                  <a className='onClickCloseMobileMenu'>
                    {setString(lang.linkWebinars)}
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
                    {setString(lang.linkNews)}
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href='/contact' locale='ru'>
                  <a className='onClickCloseMobileMenu'>
                    {setString(lang.linkContacts)}
                  </a>
                </Link>
              </li>

              {router.pathname === '/' || router.pathname === '/about' || router.pathname === '/contact' ? 
                  <li>
                    <a href='' className='mobile-lang-toggle'>
                      {setString(lang.linkLang)}
                    </a>
                  </li>
                  :
                  null
                }
            </ul>
            <div className='header-logos'>
              <span className='rabo'>
                <Image
                  src='/assets/images/logo_rabo.png'
                  alt='Российская ассоциация бизнес-образования'
                  width={117}
                  height={30}
                />
              </span>
              <span className='dep'>
                <Image
                  src='/assets/images/logo_department.png'
                  alt='Департамент образования города Москва'
                  width={105}
                  height={31}
                />
              </span>
            </div>
            <div className='header-place'>
              <SVGLocation />
              <span>{setString(lang.address)}</span>
            </div>
          </div>
        </div>
        {/* //first */}

        {/* second */}
        <div className='header-mobile-second js-header-mobile'>
          <div className='container'>
            <div className='menu-back-link'>
              <i></i>
              {setString(langMenu.backBtn)}
            </div>
            <h3>{setString(lang.programsBtn)}</h3>
            <ul className='header-mobile-menu'>
              <li>
                <a href='' className='mobile-third-toggle'>
                  Mini MBA
                </a>

                {/* third */}
                <div className='header-mobile-third js-header-mobile'>
                  <div className='container'>
                    <div className='menu-back-link'>
                      <i></i>
                      {setString(langMenu.toProgramsBtn)}
                    </div>
                    <h3>Mini MBA</h3>
                    <div className='program-tabs-content'>
                      <ul className='program-options-block-tabs'>
                        <li>
                          <a href='#program-mobile-1-1' className='active'>
                            ONLINE
                          </a>
                        </li>
                        <li>
                          <a href='#program-mobile-1-2'>BLENDED</a>
                        </li>
                      </ul>
                      <div className='program-options-detail'>
                        <div
                          id='program-mobile-1-1'
                          className='program-options-block'>
                          <div className='name'>
                            {setString(langMenu.onlineTitle)}
                            <div className='discount'>
                              <div className='size'>
                                <Discount />
                              </div>
                              <span>
                                <Until />
                              </span>
                            </div>
                          </div>
                          <div className='directions-count'>
                            <ProgramsQt
                              programs={data}
                              type={'mini'}
                              format={'online'}
                            />{' '}
                            {setString(langMenu.qtPrograms)}
                          </div>
                          <div className='price'>
                            {setString(langMenu.price)}:{' '}
                            <i className='new-price'>
                              {' '}
                              <Price
                                discount={true}
                                type={'mini'}
                                format={'online'}
                              />{' '}
                              &#8381;
                            </i>{' '}
                            <i className='old-price'>
                              {' '}
                              <Price
                                discount={false}
                                type={'mini'}
                                format={'online'}
                              />{' '}
                              &#8381;
                            </i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <SVGCheckCircle fill={'#C7C7C7'} />
                              </div>
                              <span>{setString(langMenu.formatRemote)}</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <SVGScreen fill={'#C7C7C7'} />
                              </div>
                              <span>
                                <ProgramSubjects type='mini' sum={true} />{' '}
                                {setString(langMenu.qtSubjects)}
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
                                      <a>{setString(item, true)}</a>
                                    </Link>
                                  </li>
                                )
                              }
                            })}
                          </ul>
                        </div>
                        <div
                          id='program-mobile-1-2'
                          className='program-options-block'>
                          <div className='name'>
                            {setString(langMenu.blendedTitle)}
                          </div>
                          <div className='directions-count'>
                            <ProgramsQt
                              programs={data}
                              type={'mini'}
                              format={'blended'}
                            />{' '}
                            {setString(langMenu.qtPrograms)}
                          </div>
                          <div className='price'>
                            {setString(langMenu.price)}:{' '}
                            <i className='simple-price'>
                              {' '}
                              <Price
                                discount={false}
                                type={'mini'}
                                format={'blended'}
                              />{' '}
                              &#8381;
                            </i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <SVGCheckCircle fill={'#C7C7C7'} />
                              </div>
                              <span>{setString(langMenu.formatBlended)}</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <SVGScreen fill={'#C7C7C7'} />
                              </div>
                              <span>
                                <ProgramSubjects type='mini' sum={true} />{' '}
                                {setString(langMenu.qtSubjects)}
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
                                      <a>{setString(item, true)}</a>
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
                          <SVGClock fill={'#C7C7C7'} />
                        </div>
                        <span>
                          <TrainingPeriod type='mini' />
                        </span>
                      </div>
                      <p>{setString(langMenu.categoryDiscMini)}</p>
                      <div className='info-flex'>
                        <div className='pic'>
                          <SVGPaperCorner fill={'#C7C7C7'} />
                        </div>
                        <span>
                          <ProgramSubjects type='mini' subjects='base' />{' '}
                          {setString(langMenu.categoryAboutManagement)}
                        </span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <SVGPaperCorner fill={'#C7C7C7'} />
                        </div>
                        <span>
                          <ProgramSubjects type='mini' subjects='specialty' />{' '}
                          {setString(langMenu.categorySpecializedSubjects)}
                        </span>
                      </div>
                    </div>
                    <div className='menu-back-link last'>
                      <i></i>
                      {setString(langMenu.toProgramsBtn)}
                    </div>
                  </div>
                </div>
                {/* //third */}
              </li>
              <li>
                <a href='' className='mobile-third-toggle'>
                  Professional MBA
                </a>

                {/*third */}
                <div className='header-mobile-third js-header-mobile'>
                  <div className='container'>
                    <div className='menu-back-link'>
                      <i></i>
                      {setString(langMenu.toProgramsBtn)}
                    </div>
                    <h3>Professional MBA</h3>
                    <div className='program-tabs-content'>
                      <ul className='program-options-block-tabs'>
                        <li>
                          <a href='#program-mobile-2-1' className='active'>
                            ONLINE
                          </a>
                        </li>
                        <li>
                          <a href='#program-mobile-2-2'>BLENDED</a>
                        </li>
                      </ul>
                      <div className='program-options-detail'>
                        <div
                          id='program-mobile-2-1'
                          className='program-options-block'>
                          <div className='name'>
                            {setString(langMenu.onlineTitle)}
                            <div className='discount'>
                              <div className='size'>
                                <Discount />
                              </div>
                              <span>
                                <Until />
                              </span>
                            </div>
                          </div>
                          <div className='directions-count'>
                            <ProgramsQt
                              programs={data}
                              type={'professional'}
                              format={'online'}
                            />{' '}
                            {setString(langMenu.qtPrograms)}
                          </div>
                          <div className='price'>
                            {setString(langMenu.price)}:{' '}
                            <i className='new-price'>
                              {' '}
                              <Price
                                discount={true}
                                type={'professional'}
                                format={'online'}
                              />{' '}
                              &#8381;
                            </i>{' '}
                            <i className='old-price'>
                              {' '}
                              <Price
                                discount={false}
                                type={'professional'}
                                format={'online'}
                              />{' '}
                              &#8381;
                            </i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <SVGCheckCircle fill={'#C7C7C7'} />
                              </div>
                              <span>{setString(langMenu.formatRemote)}</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <SVGScreen fill={'#C7C7C7'} />
                              </div>
                              <span>
                                <ProgramSubjects
                                  type='professional'
                                  sum={true}
                                />{' '}
                                {setString(langMenu.qtSubjects)}
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
                                      <a>{setString(item, true)}</a>
                                    </Link>
                                  </li>
                                )
                              }
                            })}
                          </ul>
                        </div>
                        <div
                          id='program-mobile-2-2'
                          className='program-options-block'>
                          <div className='name'>
                            {setString(langMenu.blendedTitle)}
                          </div>
                          <div className='directions-count'>
                            <ProgramsQt
                              programs={data}
                              type={'professional'}
                              format={'blended'}
                            />{' '}
                            {setString(langMenu.qtPrograms)}
                          </div>
                          <div className='price'>
                            {setString(langMenu.price)}:{' '}
                            <i className='simple-price'>
                              {' '}
                              <Price
                                discount={false}
                                type={'professional'}
                                format={'blended'}
                              />{' '}
                              &#8381;
                            </i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <SVGCheckCircle fill={'#C7C7C7'} />
                              </div>
                              <span>{setString(langMenu.formatBlended)}</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <SVGScreen fill={'#C7C7C7'} />
                              </div>
                              <span>
                                <ProgramSubjects
                                  type='professional'
                                  sum={true}
                                />{' '}
                                {setString(langMenu.qtSubjects)}
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
                                      <a>{setString(item, true)}</a>
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
                          <SVGClock fill={'#C7C7C7'} />
                        </div>
                        <span>
                          <TrainingPeriod type='professional' />
                        </span>
                      </div>
                      <p>{setString(langMenu.categoryDiscProfessional)}</p>
                      <div className='info-flex'>
                        <div className='pic'>
                          <SVGPaperCorner fill={'#C7C7C7'} />
                        </div>
                        <span>
                          <ProgramSubjects
                            type='professional'
                            subjects='base'
                          />{' '}
                          {setString(langMenu.categoryAboutManagement)}
                        </span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <SVGPaperCorner fill={'#C7C7C7'} />
                        </div>
                        <span>
                          <ProgramSubjects
                            type='professional'
                            subjects='specialty'
                          />{' '}
                          {setString(langMenu.categorySpecializedSubjects)}
                        </span>
                      </div>
                    </div>
                    <div className='menu-back-link last'>
                      <i></i>
                      {setString(langMenu.toProgramsBtn)}
                    </div>
                  </div>
                </div>
                {/* //third */}
              </li>
              <li>
                <a href='' className='mobile-third-toggle'>
                  Industry MBA
                </a>

                {/* third */}
                <div className='header-mobile-third js-header-mobile'>
                  <div className='container'>
                    <div className='menu-back-link'>
                      <i></i>
                      {setString(langMenu.toProgramsBtn)}
                    </div>
                    <h3>Industry MBA</h3>
                    <div className='program-tabs-content'>
                      <ul className='program-options-block-tabs'>
                        <li>
                          <a href='#program-mobile-3-1' className='active'>
                            ONLINE
                          </a>
                        </li>
                        <li>
                          <a href='#program-mobile-3-2'>BLENDED</a>
                        </li>
                      </ul>
                      <div className='program-options-detail'>
                        <div
                          id='program-mobile-3-1'
                          className='program-options-block'>
                          <div className='name'>
                            {setString(langMenu.onlineTitle)}
                            <div className='discount'>
                              <div className='size'>
                                <Discount />
                              </div>
                              <span>
                                <Until />
                              </span>
                            </div>
                          </div>
                          <div className='directions-count'>
                            <ProgramsQt
                              programs={data}
                              type={'industry'}
                              format={'online'}
                            />{' '}
                            {setString(langMenu.qtPrograms)}
                          </div>
                          <div className='price'>
                            {setString(langMenu.price)}:{' '}
                            <i className='new-price'>
                              {' '}
                              <Price
                                discount={true}
                                type={'industry'}
                                format={'online'}
                              />{' '}
                              &#8381;
                            </i>{' '}
                            <i className='old-price'>
                              {' '}
                              <Price
                                discount={false}
                                type={'industry'}
                                format={'online'}
                              />{' '}
                              &#8381;
                            </i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <SVGCheckCircle fill={'#C7C7C7'} />
                              </div>
                              <span>{setString(langMenu.formatRemote)}</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <SVGScreen fill={'#C7C7C7'} />
                              </div>
                              <span>
                                <ProgramSubjects type='industry' sum={true} />{' '}
                                {setString(langMenu.qtSubjects)}
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
                                      <a>{setString(item, true)}</a>
                                    </Link>
                                  </li>
                                )
                              }
                            })}
                          </ul>
                        </div>
                        <div
                          id='program-mobile-3-2'
                          className='program-options-block'>
                          <div className='name'>
                            {setString(langMenu.blendedTitle)}
                          </div>
                          <div className='directions-count'>
                            <ProgramsQt
                              programs={data}
                              type={'industry'}
                              format={'blended'}
                            />{' '}
                            {setString(langMenu.qtPrograms)}
                          </div>
                          <div className='price'>
                            {setString(langMenu.price)}:{' '}
                            <i className='simple-price'>
                              {' '}
                              <Price
                                discount={false}
                                type={'industry'}
                                format={'blended'}
                              />{' '}
                              &#8381;
                            </i>
                          </div>
                          <div className='info-list'>
                            <div className='info-flex'>
                              <div className='pic'>
                                <SVGCheckCircle fill={'#C7C7C7'} />
                              </div>
                              <span>{setString(langMenu.formatBlended)}</span>
                            </div>
                            <div className='info-flex'>
                              <div className='pic'>
                                <SVGScreen fill={'#C7C7C7'} />
                              </div>
                              <span>
                                <ProgramSubjects type='industry' sum={true} />{' '}
                                {setString(langMenu.qtSubjects)}
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
                                      <a>{setString(item, true)}</a>
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
                          <SVGClock fill={'#C7C7C7'} />
                        </div>
                        <span>
                          <TrainingPeriod type='industry' />
                        </span>
                      </div>
                      <p>{setString(langMenu.categoryDiscIndustry)}</p>
                      <div className='info-flex'>
                        <div className='pic'>
                          <SVGPaperCorner fill={'#C7C7C7'} />
                        </div>
                        <span>
                          <ProgramSubjects type='industry' subjects='base' />{' '}
                          {setString(langMenu.categoryAboutManagement)}
                        </span>
                      </div>
                      <div className='info-flex'>
                        <div className='pic'>
                          <SVGPaperCorner fill={'#C7C7C7'} />
                        </div>
                        <span>
                          <ProgramSubjects
                            type='industry'
                            subjects='specialty'
                          />{' '}
                          {setString(langMenu.categorySpecializedSubjects)}
                        </span>
                      </div>
                    </div>
                    <div className='menu-back-link last'>
                      <i></i>
                      {setString(langMenu.toProgramsBtn)}
                    </div>
                  </div>
                </div>
                {/* //third */}
              </li>
              <li>
                <Link href='/programs/mini/online' locale='ru'>
                  <a className='mobileAllProgramsLink'>
                    {setString(langMenu.allPrograms)}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* //second */}

        {/* header-mobile-lang */}
        <div className='header-mobile-lang js-header-mobile'>
          <div className='container'>
            <div className='menu-back-link'>
              <i></i>
              {setString(langMenu.backBtn)}
            </div>
            <ul className='header-mobile-menu'>
              <li>
                <Link href={`${router.pathname}`} locale='ru'>
                  <a id='switchToRuBtn'>🇷🇺&nbsp;Русский</a>
                </Link>
              </li>
              <li>
                <Link href={`${router.pathname}`} locale='en-US'>
                  <a id='switchToEnBtn'>🇺🇸&nbsp;English</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* //header-mobile-lang */}
      </div>
      {/* //mobile menu */}
    </header>
  )
}

export default Header
