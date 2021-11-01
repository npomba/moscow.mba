import stls from '@/styles/components/pages/Programs.module.sass'
import { useState } from 'react'
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
import CardProgram from '@/components/general/cards/CardProgram'
import { IconCheckCircle } from '@/components/icons'

const PagePrograms = ({ programs, mbaTypeOfProgram, mbaFormat }) => {
  const at = useAt()

  const [currentField, setCurrentField] = useState(null)

  let fields

  if (at.profession) {
    fields = programs.reduce((acc, curr) => {
      if (!acc.includes(curr.field)) acc.push(curr.field)
      return acc
    }, [])

    const [firstField] = fields

    if (!currentField) setCurrentField(firstField)
  }

  const generateHeading = () => {
    const atMBAPrograms = at.mini || at.industry || at.professional

    if (atMBAPrograms) {
      const programType =
        at.onWhichPage[0].toUpperCase() + at.onWhichPage.slice(1)

      return `${programType} MBA ${mbaFormat}`
    }

    if (at.profession) {
      return 'Профессии'
    }
  }

  const generatePrograms = () => {
    let programsToDisplay

    if (currentField) {
      programsToDisplay = programs.filter(
        program => program.field === currentField
      )
    }

    if (!currentField) {
      programsToDisplay = programs
    }

    return programsToDisplay
  }

  const programsToDisplay = generatePrograms()

  return (
    <>
      <NextSeo
        title={`Программы обучения ${
          at.mini
            ? 'Mini MBA'
            : at.professional
            ? 'Professional MBA'
            : at.industry
            ? 'Industry MBA'
            : ''
        } ${
          at.online ? 'Online' : at.blended ? 'Blended' : ''
        } - Moscow Business Academy`}
        description={
          at.mini
            ? truncate(SetString(langMenu.categoryDiscMini), 120)
            : at.professional
            ? truncate(SetString(langMenu.categoryDiscProfessional), 120)
            : at.industry
            ? truncate(SetString(langMenu.categoryDiscIndustry), 120)
            : ''
        }
        canonical={'https://moscow.mba/programs/professional/online'}
      />

      <section className={stls.jumbotronPrograms}>
        <div className={stls.generalContainer}>
          <Breadcrumbs />
        </div>
      </section>
      <div className={stls.generalContainer}>
        <h1 className={stls.title}>ПРОГРАММЫ ОБУЧЕНИЯ</h1>
        <div className={stls.container}>
          <Filters
            mbaTypeOfProgram={mbaTypeOfProgram}
            mbaFormat={mbaFormat}
            fields={fields}
            currentField={currentField}
            updateCurrentField={setCurrentField}
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
                  : at.professional
                  ? SetString(langMenu.categoryDiscProfessional)
                  : at.industry
                  ? SetString(langMenu.categoryDiscIndustry)
                  : ''}
              </p>

              {at.profession ? (
                <div className={stls.desc}>
                  Программа профессиональной переподготовки Mini MBA разработана
                  для специалистов и руководителей, которые хотят
                  систематизировать имеющиеся знания или познакомиться с
                  ключевыми аспектами новой для себя сферы управленческой
                  деятельности.
                </div>
              ) : (
                <div className={stls.counters}>
                  <p>
                    <IconCheckCircle />
                    <ProgramSubjects subjects='base' />
                    &nbsp;дисциплин об управлениии
                  </p>
                  <p>
                    <IconCheckCircle />
                    <ProgramSubjects subjects='specialty' />
                    &nbsp;дисциплин специализации
                  </p>
                </div>
              )}
            </div>
            {!at.profession && (
              <InfoRectangle
                programPage={true}
                type={mbaTypeOfProgram}
                format={mbaFormat}
              />
            )}
            <div className={`mini-programs-slider ${stls.programs}`}>
              {programsToDisplay.map((program, idx) => {
                return (
                  <CardProgram
                    key={program._id}
                    professionLayout={at.profession}
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
