import stls from '@/styles/components/sections/Programs.module.sass'
import Link from 'next/link'
import { SetString } from '@/helpers/index'
import langMenu from '@/data/translation/menu'
import langHeader from '@/data/translation/header'
import Until from '@/components/costs/Until'
import ProgramSubjects from '@/components/general/ProgramSubjects'
import ProgramsQty from '@/components/general/ProgramsQty'
import Price from '@/components/costs/Price'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import Script from 'next/script'
import Discount from '@/components/costs/Discount'
import { IconCheckCircle, IconScreen } from '@/components/icons'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import SwiperCore, {
  Pagination, FreeMode, Virtual
} from 'swiper'
import useWindowWidth from '@/helpers/useWindowWidth'

SwiperCore.use([FreeMode, Pagination, Virtual])


const pagination = {
  'clickable': true,
  'renderBullet': function(index, className) {
    return '<span class=\"' + className + '\">' + (index + 1) + '</span>'
  }
}


const Programs = ({ programs }) => {
  const swiperWinth = useWindowWidth() <= 1020 ? true : false

  const [index, setIndex] = useState(0)

  const [swiperRef, setSwiperRef] = useState(null)


  console.log(index)

  useEffect(() => {
    // if (index === 0) {
    //   handleSetMini()
    // } else {
    //   handleSetMba()
    // }
  }, [index])


  const data = programs


  const [isMini, setIsMini] = useState(true)
  const [isMba, setIsMba] = useState(false)

  const [isMiniOnline, setIsMiniOnline] = useState(true)
  const [isMbaOnline, setIsMbaOnline] = useState(true)

  const slideTo = (index) => {
    swiperRef?.slideTo(index - 1, 500)
  }

  // console.log('isMini', isMini)
  // console.log('isMba', isMba)


  const handleSetMini = () => {
    setIsMini(true)
    setIsMba(false)
    slideTo(1)
  }

  const handleSetMba = () => {
    setIsMini(false)
    setIsMba(true)
    slideTo(2)

  }


  return (
    <>
      <section className='program-options-section'>
        <div className='program-options-flex'>
          <div className='program-options-left'>
            <h2>{SetString(langHeader.programsBtn)}</h2>
            <ul className='program-options-tabs'>
              <li>
                <a
                  className={classNames({
                    headerMenuTabs: true,
                    'active-tab': isMini
                  })}
                  onClick={handleSetMini}>
                  Mini MBA
                </a>

              </li>
              <li>
                <a
                  className={classNames({
                    headerMenuTabs: true,
                    'active-tab': isMba
                  })}
                  onClick={handleSetMba}>
                  MBA
                </a>
              </li>

              <li>
                <Link href='/programs/profession/online' locale='ru'>
                  <a>Профессии</a>
                </Link>
              </li>
              <li>
                <Link href='/programs/mini/online' locale='ru'>
                  <a>{SetString(langMenu.allPrograms)}</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='program-options-right'>


            {/*<Swiper slidesPerView={1}*/}
            {/*        enabled={swiperWinth}*/}
            {/*        pagination={{*/}
            {/*          type: 'fraction'*/}
            {/*        }}*/}
            {/*        onSwiper={setSwiperRef}*/}
            {/*        onSlideChange={e => {*/}
            {/*          // slideTo(e.activeIndex)*/}
            {/*          console.log(e)*/}
            {/*          setIndex(e.activeIndex)*/}
            {/*        }}*/}
            {/*        virtual*/}
            {/*>*/}
              <SwiperSlide>
                <div
                  className={classNames({
                    'program-tabs-content': true,
                    visible: isMini
                  })}>
                  <div className='top-info'>
                    <div className='prog-time'>
                      <i>
                        <TrainingPeriod type='mini'/>
                      </i>
                      <span>
                    <ProgramSubjects type='mini' sum={true} />{' '}
                        {SetString(langMenu.qtSubjects)}{' '}
                  </span>
                    </div>
                    <div className='prog-status'>
                      {SetString(langMenu.newestPrograms)} 2021{' '}
                      {SetString(langMenu.newestProgramsYear)}
                    </div>
                  </div>
                  <div className='desc'>{SetString(langMenu.categoryDiscMini)}</div>
                  <ul className='program-options-block-tabs--sctn-programs'>
                    <li>
                      <a
                        className={classNames({ active: isMiniOnline })}
                        onClick={() => setIsMiniOnline(true)}>
                        ONLINE
                      </a>
                    </li>
                    <li>
                      <a
                        className={classNames({ active: !isMiniOnline })}
                        onClick={() => setIsMiniOnline(false)}>
                        BLENDED
                      </a>
                    </li>
                  </ul>
                  <div className='program-options-detail'>
                    <div
                      className={classNames({
                        'program-options-block': true,
                        show: isMiniOnline
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
                        <Price discount={true} type={'mini'} format={'online'} />{' '}
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
                            item.category?.type === 'mini' &&
                            item.studyFormat === 'online'
                          ) {
                            return (
                              <li key={item.id || item._id}>
                                <Link
                                  href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
                                  locale='ru'>
                                  <a>{SetString(item, true)}</a>
                                </Link>
                              </li>
                            )
                          }
                        })}
                      </ul>
                    </div>
                    <div
                      className={classNames({
                        'program-options-block': true,
                        show: !isMiniOnline
                      })}>
                      <div className='name'>{SetString(langMenu.blendedTitle)}</div>
                      <ProgramsQty
                        programs={data}
                        type={'mini'}
                        format={'blended'}
                      />
                      <div className='price'>
                        {SetString(langMenu.price)}:{' '}
                        <Price discount={false} type={'mini'} format={'blended'} />{' '}
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
                            item.category?.type === 'mini' &&
                            item.studyFormat === 'blended'
                          ) {
                            return (
                              <li key={item.id || item._id}>
                                <Link
                                  href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
                                  locale='ru'>
                                  <a>{SetString(item, true)}</a>
                                </Link>
                              </li>
                            )
                          }
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide>
                <div
                  className={classNames({
                    'program-tabs-content': true,
                    visible: isMba
                  })}>
                  <div className='top-info'>
                    <div className='prog-time'>
                      <i>
                        <TrainingPeriod type='mba' />
                      </i>
                      <span>
                    <ProgramSubjects type='mba' sum={true} />{' '}
                        {SetString(langMenu.qtSubjects)}{' '}
                  </span>
                    </div>
                    <div className='prog-status'>
                      {SetString(langMenu.newestPrograms)} 2021{' '}
                      {SetString(langMenu.newestProgramsYear)}
                    </div>
                  </div>
                  <div className='desc'>{SetString(langMenu.categoryDiscMba)}</div>
                  <ul className='program-options-block-tabs--sctn-programs'>
                    <li>
                      <a
                        className={classNames({ active: isMbaOnline })}
                        onClick={() => setIsMbaOnline(true)}>
                        ONLINE
                      </a>
                    </li>
                    <li>
                      <a
                        className={classNames({ active: !isMbaOnline })}
                        onClick={() => setIsMbaOnline(false)}>
                        BLENDED
                      </a>
                    </li>
                  </ul>
                  <div className='program-options-detail'>
                    <div
                      className={classNames({
                        'program-options-block': true,
                        show: isMbaOnline
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
                      <ProgramsQty programs={data} type={'mba'} format={'online'} />
                      <div className='price'>
                        {SetString(langMenu.price)}:{' '}
                        <Price discount={true} type={'mba'} format={'online'} />{' '}
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
                        {data.map(item => {
                          if (
                            item.category?.type === 'mba' &&
                            item.studyFormat === 'online'
                          ) {
                            return (
                              <li key={item.id || item._id}>
                                <Link
                                  href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
                                  locale='ru'>
                                  <a>{SetString(item, true)}</a>
                                </Link>
                              </li>
                            )
                          }
                        })}
                      </ul>
                    </div>
                    <div
                      className={classNames({
                        'program-options-block': true,
                        show: !isMbaOnline
                      })}>
                      <div className='name'>{SetString(langMenu.blendedTitle)}</div>
                      <ProgramsQty
                        programs={data}
                        type={'mba'}
                        format={'blended'}
                      />
                      <div className='price'>
                        {SetString(langMenu.price)}:{' '}
                        <Price discount={false} type={'mba'} format={'blended'} />{' '}
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
                        {data.map(item => {
                          if (
                            item.category?.type === 'mba' &&
                            item.studyFormat === 'blended'
                          ) {
                            return (
                              <li key={item.id || item._id}>
                                <Link
                                  href={`/programs/${item.category.type}/${item.studyFormat}/${item.slug}`}
                                  locale='ru'>
                                  <a>{SetString(item, true)}</a>
                                </Link>
                              </li>
                            )
                          }
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            {/*</Swiper>*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default Programs
