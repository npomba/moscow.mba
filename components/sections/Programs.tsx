import stls from '@/styles/components/sections/Programs.module.sass'
import { useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { SetString } from '@/helpers/index'
import { ProgramSubjects, ProgramsQty } from '@/components/general'
import { Wrapper } from '@/components/layout'
import Until from '@/components/costs/Until'
import Price from '@/components/costs/Price'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import Discount from '@/components/costs/Discount'
import { IconCheckCircle, IconScreen } from '@/components/icons'
import { menu, header } from '@/data/index'

const Programs = ({ programs }) => {
  const data = programs

  const [isMini, setIsMini] = useState(true)
  const [isMba, setIsMba] = useState(false)

  const [isMiniOnline, setIsMiniOnline] = useState(true)
  const [isMbaOnline, setIsMbaOnline] = useState(true)

  const handleSetMini = () => {
    setIsMini(true)
    setIsMba(false)
  }

  const handleSetMba = () => {
    setIsMini(false)
    setIsMba(true)
  }

  return (
    <section className='program-options-section'>
      <Wrapper classNames={[stls.wrapper]}>
        <div className='program-options-flex'>
          <div className='program-options-left'>
            <h2>{SetString(header.programsBtn)}</h2>
            <ul className='program-options-tabs'>
              <li>
                <a
                  className={cn({
                    headerMenuTabs: true,
                    'active-tab': isMini
                  })}
                  onClick={handleSetMini}>
                  Mini MBA
                </a>
              </li>
              <li>
                <a
                  className={cn({
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
                  <a>{SetString(menu.allPrograms)}</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='program-options-right'>
            <div
              className={cn({
                'program-tabs-content': true,
                visible: isMini
              })}>
              <div className='top-info'>
                <div className='prog-time'>
                  <i>
                    <TrainingPeriod type='mini' />
                  </i>
                  <span>
                    <ProgramSubjects type='mini' sum={true} />{' '}
                    {SetString(menu.qtSubjects)}{' '}
                  </span>
                </div>
                <div className='prog-status'>
                  {SetString(menu.newestPrograms)} 2021{' '}
                  {SetString(menu.newestProgramsYear)}
                </div>
              </div>
              <div className='desc'>{SetString(menu.categoryDiscMini)}</div>
              <ul className='program-options-block-tabs--sctn-programs'>
                <li>
                  <a
                    className={cn({ active: isMiniOnline })}
                    onClick={() => setIsMiniOnline(true)}>
                    ONLINE
                  </a>
                </li>
                <li>
                  <a
                    className={cn({ active: !isMiniOnline })}
                    onClick={() => setIsMiniOnline(false)}>
                    BLENDED
                  </a>
                </li>
              </ul>
              <div className='program-options-detail'>
                <div
                  className={cn({
                    'program-options-block': true,
                    show: isMiniOnline
                  })}>
                  <div className='name'>
                    {SetString(menu.onlineTitle)}
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
                    {SetString(menu.price)}:{' '}
                    <Price discount={true} type={'mini'} format={'online'} />{' '}
                  </div>
                  <div className='info-list'>
                    <div className='info-flex'>
                      <div className='pic'>
                        <IconCheckCircle />
                      </div>
                      <span>{SetString(menu.formatRemote)}</span>
                    </div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <IconScreen />
                      </div>
                      <span>
                        <ProgramSubjects type='mini' sum={true} />{' '}
                        {SetString(menu.qtSubjects)}
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
                  className={cn({
                    'program-options-block': true,
                    show: !isMiniOnline
                  })}>
                  <div className='name'>{SetString(menu.blendedTitle)}</div>
                  <ProgramsQty
                    programs={data}
                    type={'mini'}
                    format={'blended'}
                  />
                  <div className='price'>
                    {SetString(menu.price)}:{' '}
                    <Price discount={false} type={'mini'} format={'blended'} />{' '}
                  </div>
                  <div className='info-list'>
                    <div className='info-flex'>
                      <div className='pic'>
                        <IconCheckCircle />
                      </div>
                      <span>{SetString(menu.formatBlended)}</span>
                    </div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <IconScreen />
                      </div>
                      <span>
                        <ProgramSubjects type='mini' sum={true} />{' '}
                        {SetString(menu.qtSubjects)}
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
            <div
              className={cn({
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
                    {SetString(menu.qtSubjects)}{' '}
                  </span>
                </div>
                <div className='prog-status'>
                  {SetString(menu.newestPrograms)} 2021{' '}
                  {SetString(menu.newestProgramsYear)}
                </div>
              </div>
              <div className='desc'>{SetString(menu.categoryDiscMba)}</div>
              <ul className='program-options-block-tabs--sctn-programs'>
                <li>
                  <a
                    className={cn({ active: isMbaOnline })}
                    onClick={() => setIsMbaOnline(true)}>
                    ONLINE
                  </a>
                </li>
                <li>
                  <a
                    className={cn({ active: !isMbaOnline })}
                    onClick={() => setIsMbaOnline(false)}>
                    BLENDED
                  </a>
                </li>
              </ul>
              <div className='program-options-detail'>
                <div
                  className={cn({
                    'program-options-block': true,
                    show: isMbaOnline
                  })}>
                  <div className='name'>
                    {SetString(menu.onlineTitle)}
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
                    {SetString(menu.price)}:{' '}
                    <Price discount={true} type={'mba'} format={'online'} />{' '}
                  </div>
                  <div className='info-list'>
                    <div className='info-flex'>
                      <div className='pic'>
                        <IconCheckCircle />
                      </div>
                      <span>{SetString(menu.formatRemote)}</span>
                    </div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <IconScreen />
                      </div>
                      <span>
                        <ProgramSubjects type='mba' sum={true} />{' '}
                        {SetString(menu.qtSubjects)}
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
                    <li>
                      <Link
                        href={`/programs/international-business-law`}
                        locale='ru'>
                        <a>Магистр международного бизнес-права</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className={cn({
                    'program-options-block': true,
                    show: !isMbaOnline
                  })}>
                  <div className='name'>{SetString(menu.blendedTitle)}</div>
                  <ProgramsQty
                    programs={data}
                    type={'mba'}
                    format={'blended'}
                  />
                  <div className='price'>
                    {SetString(menu.price)}:{' '}
                    <Price discount={false} type={'mba'} format={'blended'} />{' '}
                  </div>
                  <div className='info-list'>
                    <div className='info-flex'>
                      <div className='pic'>
                        <IconCheckCircle />
                      </div>
                      <span>{SetString(menu.formatBlended)}</span>
                    </div>
                    <div className='info-flex'>
                      <div className='pic'>
                        <IconScreen />
                      </div>
                      <span>
                        <ProgramSubjects type='mba' sum={true} />{' '}
                        {SetString(menu.qtSubjects)}
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
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Programs
