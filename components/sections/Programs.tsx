import stls from '@/styles/components/sections/Programs.module.sass'
import Link from 'next/link'
import { SetString } from '@/helpers/index'
import langMenu from '@/data/translation/menu'
import langHeader from '@/data/translation/header'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import ProgramsMini from './ProgramsMini'
import ProgramsMba from '@/components/sections/ProgramsMba'


const Programs = ({ programs }) => {
  const [index, setIndex] = useState(0)
  const [swiperRef, setSwiperRef] = useState(null)

  useEffect(() => {
    if (index === 0) {
      handleSetMini()
    } else {
      handleSetMba()
    }
  }, [index])


  const [isMini, setIsMini] = useState(true)
  const [isMba, setIsMba] = useState(true)

  const [isMiniOnline, setIsMiniOnline] = useState(true)
  const [isMbaOnline, setIsMbaOnline] = useState(true)


  // const slideTo = (index) => {
    // if (!swiperRef) {
      // return
    // }
    // swiperRef?.slideTo(index - 1, 500)
  // }

  const handleSetMini = () => {
    setIsMini(true)
    setIsMba(false)
    // slideTo(1)
  }

  const handleSetMba = () => {
    setIsMini(false)
    setIsMba(true)
    // slideTo(2)

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
            <div className={stls.swiper}>
              <Swiper
                slidesPerView={1}
                onSwiper={setSwiperRef}
                onSlideChange={e => {
                  setIndex(e.activeIndex)
                }}
              >
                <SwiperSlide>
                  <ProgramsMini data={programs} isMini={isMini} isMiniOnline={isMiniOnline}
                                setIsMiniOnline={setIsMiniOnline} />
                </SwiperSlide>
                <SwiperSlide>
                  <ProgramsMba data={programs} isMba={isMba} isMbaOnline={isMbaOnline}
                               setIsMbaOnline={setIsMbaOnline} />
                </SwiperSlide>
              </Swiper>
            </div>

            {/* <div className={stls.desktop}> */}
              {/* <ProgramsMini data={programs} isMini={isMini} isMiniOnline={isMiniOnline} setIsMiniOnline={setIsMiniOnline} /> */}
              {/* <ProgramsMba data={programs} isMba={isMba} isMbaOnline={isMbaOnline} setIsMbaOnline={setIsMbaOnline} /> */}
            {/* </div> */}

          </div>
        </div>
      </section>
    </>
  )
}

export default Programs
