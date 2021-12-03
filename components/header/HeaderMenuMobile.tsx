import stls from '@/styles/components/header/HeaderMenuMobile.module.sass'
import Link from 'next/link'
import { useContext, useState } from 'react'
import MenuContext from '@/context/menu/menuContext'
import { useRouter } from 'next/router'
import lang from '@/data/translation/header'
import langMenu from '@/data/translation/menu'
import { SetString } from '@/helpers/index'
import Until from '@/components/costs/Until'
import Price from '@/components/costs/Price'
import { useAt } from '@/helpers/index'
import ProgramSubjects from '@/components/general/ProgramSubjects'
import ProgramsQty from '@/components/general/ProgramsQty'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import classNames from 'classnames'
import {
  IconLocation,
  IconCheckCircle,
  IconScreen,
  IconPaperCorner,
  IconClock
} from '@/components/icons'
import Discount from '@/components/costs/Discount'
import { ImgLogoRabo, ImgLogoMde } from '@/components/images'
import programsContext from '@/context/programs/programsContext'

const HeaderMenuMobile = ({ handleMenuClose, programs }) => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  const { allFilters } = useContext(programsContext)



  const [mobileSecond, setMobileSecond] = useState(false)
  const [mobileLang, setMobileLang] = useState(false)
  const [mobileThirdMini, setMobileThirdMini] = useState(false)
  const [mobileThirdMba, setMobileThirdMba] = useState(false)
  const [miniOnline, setMiniOnline] = useState(true)
  const [mbaOnline, setmbaOnline] = useState(true)

  const router = useRouter()
  const at = useAt()

  return (
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
                <a className='onClickCloseMobileMenu' onClick={handleMenuClose}>
                  {SetString(lang.linkAbout)}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/teachers' locale='ru'>
                <a className='onClickCloseMobileMenu' onClick={handleMenuClose}>
                  {SetString(lang.linkTeachers)}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/webinars' locale='ru'>
                <a className='onClickCloseMobileMenu' onClick={handleMenuClose}>
                  {SetString(lang.linkWebinars)}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a className='onClickCloseMobileMenu' onClick={handleMenuClose}>
                  {SetString(lang.linkContacts)}
                </a>
              </Link>
            </li>

            <li>
              <Link href='/legal' locale='ru'>
                <a
                  className={`onClickCloseMobileMenu ${at.legal ? 'red' : ''}`}
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
                          programs={programs}
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
                          {programs &&
                            programs.map(item => {
                              if (
                                item.category?.type === 'mini' &&
                                item.studyFormat === 'online'
                              ) {
                                return (
                                  <li key={item.id || item._id}>
                                    <Link
                                      href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
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
                          programs={programs}
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
                          {programs &&
                            programs.map(item => {
                              if (
                                item.category?.type === 'mini' &&
                                item.studyFormat === 'blended'
                              ) {
                                return (
                                  <li key={item.id || item._id}>
                                    <Link
                                      href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
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
                onClick={() => setMobileThirdMba(true)}>
                MBA
              </a>

              {/*third */}
              <div
                className={classNames({
                  'header-mobile-third': true,
                  opened: mobileThirdMba
                })}>
                <div className='container'>
                  <div
                    className='menu-back-link'
                    onClick={() => setMobileThirdMba(false)}>
                    <i></i>
                    {SetString(langMenu.toProgramsBtn)}
                  </div>
                  <h3>MBA</h3>
                  <div className='program-tabs-content'>
                    <ul className='program-options-block-tabs'>
                      <li>
                        <a
                          className={classNames({
                            active: mbaOnline
                          })}
                          onClick={() => setmbaOnline(true)}>
                          ONLINE
                        </a>
                      </li>
                      <li>
                        <a
                          className={classNames({
                            active: !mbaOnline
                          })}
                          onClick={() => setmbaOnline(false)}>
                          BLENDED
                        </a>
                      </li>
                    </ul>
                    <div className='program-options-detail'>
                      <div
                        id='program-mobile-2-1'
                        className={classNames({
                          'program-options-block': true,
                          show: mbaOnline
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
                          programs={programs}
                          type={'mba'}
                          format={'online'}
                        />
                        <div className='price'>
                          {SetString(langMenu.price)}:{' '}
                          <Price
                            discount={true}
                            type={'mba'}
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
                              <ProgramSubjects type='mba' sum={true} />{' '}
                              {SetString(langMenu.qtSubjects)}
                            </span>
                          </div>
                        </div>
                        <ul className='program-options-block-list'>
                          {programs &&
                            programs.map(item => {
                              if (
                                item.category?.type === 'mba' &&
                                item.studyFormat === 'online'
                              ) {
                                return (
                                  <li key={item.id || item._id}>
                                    <Link
                                      href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
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
                          show: !mbaOnline
                        })}>
                        <div className='name'>
                          {SetString(langMenu.blendedTitle)}
                        </div>
                        <ProgramsQty
                          programs={programs}
                          type={'mba'}
                          format={'blended'}
                        />
                        <div className='price'>
                          {SetString(langMenu.price)}:{' '}
                          <Price
                            discount={false}
                            type={'mba'}
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
                              <ProgramSubjects type='mba' sum={true} />{' '}
                              {SetString(langMenu.qtSubjects)}
                            </span>
                          </div>
                        </div>
                        <ul className='program-options-block-list'>
                          {programs &&
                            programs.map(item => {
                              if (
                                item.category?.type === 'mba' &&
                                item.studyFormat === 'blended'
                              ) {
                                return (
                                  <li key={item.id || item._id}>
                                    <Link
                                      href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
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
                    <div className='name'>MBA</div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <IconClock fill={'#C7C7C7'} />
                      </div>
                      <span>
                        <TrainingPeriod type='mba' />
                      </span>
                    </div>
                    <p>{SetString(langMenu.categoryDiscMba)}</p>
                    <div className='info-flex'>
                      <div className='pic'>
                        <IconPaperCorner fill={'#C7C7C7'} />
                      </div>
                      <span>
                        <ProgramSubjects type='mba' subjects='base' />{' '}
                        {SetString(langMenu.categoryAboutManagement)}
                      </span>
                    </div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <IconPaperCorner fill={'#C7C7C7'} />
                      </div>
                      <span>
                        <ProgramSubjects type='mba' subjects='specialty' />{' '}
                        {SetString(langMenu.categorySpecializedSubjects)}
                      </span>
                    </div>
                  </div>
                  <div
                    className='menu-back-link last'
                    onClick={() => setMobileThirdMba(false)}>
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
                onClick={() => setMobileThirdMini(true)}>
                {SetString(langMenu.professions)}
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
                  <h3>{SetString(langMenu.professions)}</h3>
                  <div className='program-tabs-content'>
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
                          programs={programs}
                          type={'profession'}
                          format={'online'}
                        />
                        <div className='price'>
                          {SetString(langMenu.price)}:{' '}
                          <Price
                            discount={true}
                            type={'profession'}
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
                          {/*<div className='info-flex'>*/}
                          {/*  <div className='pic'>*/}
                          {/*    <IconScreen fill={'#C7C7C7'} />*/}
                          {/*  </div>*/}
                          {/*  <span>*/}
                          {/*    <ProgramSubjects type='profession' sum={true} />{' '}*/}
                          {/*    {SetString(langMenu.qtSubjects)}*/}
                          {/*  </span>*/}
                          {/*</div>*/}
                        </div>
                        <ul className='program-options-block-list'>

                          {/*{programs &&*/}
                          {/*programs.map(item => {*/}
                          {/*  if (*/}
                          {/*    item.category?.type === 'profession' &&*/}
                          {/*    item.studyFormat === 'online'*/}
                          {/*  ) {*/}
                          {/*    return (*/}
                          {/*      <li key={item.id || item._id}>*/}
                          {/*        <Link*/}
                          {/*          href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}*/}
                          {/*          locale='ru'>*/}
                          {/*          <a onClick={handleMenuClose}>*/}
                          {/*            {SetString(item, true)}*/}
                          {/*          </a>*/}
                          {/*        </Link>*/}
                          {/*      </li>*/}
                          {/*    )*/}
                          {/*  }*/}
                          {/*})}*/}


                          {
                            allFilters && allFilters.map(itemF => {
                              return <>
                                  <strong>{itemF.name}</strong>
                                {
                                  programs.map(item => {
                                    if (
                                        item.category?.type === 'profession' &&
                                        item.studyFormat === 'online' &&
                                        itemF.slug === item?.study_field?.slug
                                    ) {
                                      return (
                                        <li key={item.id || item._id}>
                                          <Link
                                            href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
                                            locale='ru'>
                                            <a onClick={handleMenuClose}>
                                              {SetString(item, true)}
                                            </a>
                                          </Link>
                                        </li>
                                      )
                                    }
                                  })
                                }</>
                            })
                          }



                        </ul>
                      </div>
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







            {/*<li>*/}
            {/*  <Link href='/programs/profession/online' locale='ru'>*/}
            {/*    <a className='mobileAllProgramsLink' onClick={handleMenuClose}>*/}
            {/*      {SetString(langMenu.professions)}*/}
            {/*    </a>*/}
            {/*  </Link>*/}
            {/*</li>*/}
            {/* <li>
              <Link href='/programs/course/online' locale='ru'>
                <a className='mobileAllProgramsLink' onClick={handleMenuClose}>
                  {SetString(langMenu.courses)}
                </a>
              </Link>
            </li> */}
            <li>
              <Link href='/programs/mini/online' locale='ru'>
                <a className='mobileAllProgramsLink' onClick={handleMenuClose}>
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
          <div className='menu-back-link' onClick={() => setMobileLang(false)}>
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
  )
}

export default HeaderMenuMobile
