import stls from '@/styles/components/sections/Programs.module.sass'
import Link from 'next/link'
import SetString from '@/components/hooks/SetString'
import langMenu from '@/data/translation/menu'
import langHeader from '@/data/translation/header'
import Until from '@/components/costs/Until'
import ProgramSubjects from '@/components/hooks/ProgramSubjects'
import ProgramsQty from '@/components/general/ProgramsQty'
import Price from '@/components/costs/Price'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import Script from 'next/script'
import Discount from '@/components/costs/Discount'
import { IconCheckCircle, IconScreen } from '@/components/icons'
import { useState } from 'react'
import classNames from 'classnames'

const Programs = ({ programs }) => {
  const data = programs

  const [isMini, setIsMini] = useState(true)
  const [isProfessional, setIsProfessional] = useState(false)
  const [isIndustry, setIsIndustry] = useState(false)

  const handleSetMini = () => {
    setIsMini(true)
    setIsProfessional(false)
    setIsIndustry(false)
  }

  const handleSetProfessional = () => {
    setIsMini(false)
    setIsProfessional(true)
    setIsIndustry(false)
  }

  const handleSetIndustry = () => {
    setIsMini(false)
    setIsProfessional(false)
    setIsIndustry(true)
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
                    'active-tab': isProfessional
                  })}
                  onClick={handleSetProfessional}>
                  Professional MBA
                </a>
              </li>
              <li>
                <a
                  className={classNames({
                    headerMenuTabs: true,
                    'active-tab': isIndustry
                  })}
                  onClick={handleSetIndustry}>
                  Industry MBA
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
            <div
              className={classNames({
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
                  <a href='#program-options-1-1' className='active'>
                    ONLINE
                  </a>
                </li>
                <li>
                  <a href='#program-options-1-2'>BLENDED</a>
                </li>
              </ul>
              <div className='program-options-detail'>
                <div id='program-options-1-1' className='program-options-block'>
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
                        item.mbaTypeOfProgram === 'mini' &&
                        item.mbaFormat === 'online'
                      ) {
                        return (
                          <li key={item._id}>
                            <Link
                              href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                              locale='ru'>
                              <a>{SetString(item, true)}</a>
                            </Link>
                          </li>
                        )
                      }
                    })}
                  </ul>
                </div>
                <div id='program-options-1-2' className='program-options-block'>
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
                        item.mbaTypeOfProgram === 'mini' &&
                        item.mbaFormat === 'blended'
                      ) {
                        return (
                          <li key={item._id}>
                            <Link
                              href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
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
              className={classNames({
                'program-tabs-content': true,
                visible: isProfessional
              })}>
              <div className='top-info'>
                <div className='prog-time'>
                  <i>
                    <TrainingPeriod type='professional' />
                  </i>
                  <span>
                    <ProgramSubjects type='professional' sum={true} />{' '}
                    {SetString(langMenu.qtSubjects)}{' '}
                  </span>
                </div>
                <div className='prog-status'>
                  {SetString(langMenu.newestPrograms)} 2021{' '}
                  {SetString(langMenu.newestProgramsYear)}
                </div>
              </div>
              <div className='desc'>
                {SetString(langMenu.categoryDiscProfessional)}
              </div>
              <ul className='program-options-block-tabs--sctn-programs'>
                <li>
                  <a href='#program-options-2-1' className='active'>
                    ONLINE
                  </a>
                </li>
                <li>
                  <a href='#program-options-2-2'>BLENDED</a>
                </li>
              </ul>
              <div className='program-options-detail'>
                <div id='program-options-2-1' className='program-options-block'>
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
                        <ProgramSubjects type='professional' sum={true} />{' '}
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
                              <a>{SetString(item, true)}</a>
                            </Link>
                          </li>
                        )
                      }
                    })}
                  </ul>
                </div>
                <div id='program-options-2-2' className='program-options-block'>
                  <div className='name'>{SetString(langMenu.blendedTitle)}</div>
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
                    />{' '}
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
                        <ProgramSubjects type='professional' sum={true} />{' '}
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
              className={classNames({
                'program-tabs-content': true,
                visible: isIndustry
              })}>
              <div className='top-info'>
                <div className='prog-time'>
                  <i>
                    <TrainingPeriod type='industry' />
                  </i>
                  <span>
                    <ProgramSubjects type='industry' sum={true} />{' '}
                    {SetString(langMenu.qtSubjects)}{' '}
                  </span>
                </div>
                <div className='prog-status'>
                  {SetString(langMenu.newestPrograms)} 2021{' '}
                  {SetString(langMenu.newestProgramsYear)}
                </div>
              </div>
              <div className='desc'>
                {SetString(langMenu.categoryDiscIndustry)}
              </div>
              <ul className='program-options-block-tabs--sctn-programs'>
                <li>
                  <a href='#program-options-3-1' className='active'>
                    ONLINE
                  </a>
                </li>
                <li>
                  <a href='#program-options-3-2'>BLENDED</a>
                </li>
              </ul>
              <div className='program-options-detail'>
                <div id='program-options-3-1' className='program-options-block'>
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
                              <a>{SetString(item, true)}</a>
                            </Link>
                          </li>
                        )
                      }
                    })}
                  </ul>
                </div>
                <div id='program-options-3-2' className='program-options-block'>
                  <div className='name'>{SetString(langMenu.blendedTitle)}</div>
                  <ProgramsQty
                    programs={data}
                    type={'industry'}
                    format={'online'}
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
      </section>
      <Script src='/assets/js/programs.js' strategy='lazyOnload' />
    </>
  )
}

export default Programs
