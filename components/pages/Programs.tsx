import stls from '@/styles/components/pages/Programs.module.sass'
import { useContext, useEffect, useMemo, useState } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { useAt } from '@/helpers/index'
import langMenu from '@/data/translation/menu'
import { SetString } from '@/helpers/index'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import InfoRectangle from '@/components/general/InfoRectangle'
import ProgramSubjects from '@/components/general/ProgramSubjects'
import ProgramsQty from '@/components/general/ProgramsQty'
import Filters from '@/components/general/Filters'
import { CardProgram } from '@/components/cards'
import { IconCheckCircle } from '@/components/icons'
import programsContext from '@/context/programs/programsContext'
import { useRouter } from 'next/router'


const PagePrograms = ({programs, mbaTypeOfProgram, mbaFormat }) => {
  const router = useRouter()
  const at = useAt()

  let {currentFilter, setCurrentFilter} = useContext(programsContext)


  let fields

  if (at.profession || at.course) {
    const studyFieldArr = [...new Set(programs.filter(item => item !== undefined && item?.study_field))]
    fields = [...new Map(studyFieldArr.map(item => [item.study_field['slug'], item.study_field])).values()]
    const [firstField] = fields
    if (!currentFilter) setCurrentFilter(firstField)
  }

  useEffect(() => {
    router.push(router.asPath)
    let filter = router.asPath.split('?filter=')[1]
    let currFilter = fields.find(el => filter === el.slug)
    setCurrentFilter(currFilter)
  }, [])


  useEffect(() => {
    // let url = new URL(window.location.href)
    // url.searchParams.set('filter', `${currentFilter?.slug}`)
    router.push({
      query: {
        'filter': `${currentFilter?.slug}`
      }
    }, undefined, { shallow: true })
  }, [currentFilter])


 
  
  

  const generateHeading = () => {
    if (at.mini) {
      return `Mini MBA ${mbaFormat}`
    }

    if (at.mba) {
      return `MBA ${mbaFormat}`
    }

    if (at.profession) {
      return 'Профессии'
    }

    if (at.course) {
      return 'Курсы'
    }
  }

  const generatePrograms = () => {
    let programsToDisplay

    if (currentFilter) {
      programsToDisplay = programs.filter(
        program => program.study_field?.name === currentFilter?.name
      )
    }

    if (!currentFilter?.name) {
      programsToDisplay = programs
    }

    return programsToDisplay
  }

  const programsToDisplay = generatePrograms()

  return (
    <>
      <NextSeo
        title={`Программы обучения ${
          at.mini ? 'Mini MBA' : at.mba ? 'MBA' : ''
        } ${
          at.online ? 'Online' : at.blended ? 'Blended' : ''
        } - Moscow Business Academy`}
        description={
          at.mini ? truncate(SetString(langMenu.categoryDiscMini), 120) : ''
        }
        canonical={'https://moscow.mba/programs/mba/online'}
      />

      <section className={stls.jumbotronPrograms}>
        <div className={stls.generalContainer}>
          <Breadcrumbs />
        </div>
      </section>
      <div className={stls.generalContainer}>
        <h1 className={stls.title}>ПРОГРАММЫ <span>ОБУЧЕНИЯ</span></h1>
        <div className={stls.container}>
          <Filters
            mbaTypeOfProgram={mbaTypeOfProgram}
            mbaFormat={mbaFormat}
            fields={fields}
            currentField={currentFilter}
            updateCurrentField={setCurrentFilter}
          />
          <div className={stls.content}>
            <div className={stls.programMainInfo}>
              <div className={stls.subtitle}>
                <h2>{generateHeading()}</h2>
                <span className={stls.qtPrograms}>
                  <ProgramsQty programs={programs} />
                </span>
              </div>

              <p className={stls.desc}>
                {at.mini
                  ? SetString(langMenu.categoryDiscMini)
                  : at.mba
                  ? SetString(langMenu.categoryDiscMba)
                  : ''}
              </p>

              {at.profession ? (
                <div className={stls.desc}>
                  Программа профессиональной переподготовки разработана для
                  специалистов и руководителей, которые хотят систематизировать
                  имеющиеся знания или познакомиться с ключевыми аспектами новой
                  для себя сферы управленческой деятельности.
                </div>
              ) : at.course ? (
                <div className={stls.desc}>
                  Программа повышения квалификации разработана для специалистов
                  и руководителей, которые хотят систематизировать имеющиеся
                  знания или познакомиться с ключевыми аспектами новой для себя
                  сферы управленческой деятельности.
                </div>
              ) : (
                <div className={stls.counters}>
                  <div className={stls.counter}>
                    <IconCheckCircle />
                    <span>
                      <ProgramSubjects subjects='base' />
                      &nbsp;дисциплин об управлениии
                    </span>
                  </div>
                  <div className={stls.counter}>
                    <IconCheckCircle />
                    <span>
                      <ProgramSubjects subjects='specialty' />
                      &nbsp;дисциплин специализации
                    </span>
                  </div>
                </div>
              )}
            </div>
            {!at.profession && !at.course && (
              <InfoRectangle
                programPage={true}
                type={mbaTypeOfProgram}
                format={mbaFormat}
              />
            )}
            <div className={stls.programs}>
              {programsToDisplay.map((program, idx) => {
                return (
                  <CardProgram
                    key={program._id || program.id}
                    professionLayout={at.profession || at.course}
                    program={program}
                    number={idx + 1}
                    type={mbaTypeOfProgram}
                    format={mbaFormat}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PagePrograms
