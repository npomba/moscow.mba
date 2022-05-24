import stls from '@/styles/components/pages/Programs.module.sass'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { useAt } from '@/hooks/index'
// import { ProgramsContext } from '@/context/index'
import ProgramsContext from '@/context/programs/programsContext'
// import {
//   Breadcrumbs,
//   InfoRectangle,
//   ProgramSubjects,
//   ProgramsQty,
//   Filters
// } from '@/components/general'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import InfoRectangle from '@/components/general/InfoRectangle'
import ProgramSubjects from '@/components/general/ProgramSubjects'
import ProgramsQty from '@/components/general/ProgramsQty'
import Filters from '@/components/general/Filters'
// import { CardProgram } from '@/components/cards'
import CardProgram from '@/components/cards/CardProgram'
// import { IconCheckCircle } from '@/components/icons'
import IconCheckCircle from '@/components/icons/IconCheckCircle'

const PagePrograms = ({ mbaTypeOfProgram, mbaFormat }) => {
  const { programs, studyFields, curStudyField, setCurStudyField } =
    useContext(ProgramsContext)

  const at = useAt()

  const programsFiltered = programs?.filter(
    program =>
      program?.studyFormat === mbaFormat &&
      program?.category?.type === mbaTypeOfProgram
  )

  const programCards =
    (at.profession || at.course) && curStudyField
      ? programsFiltered?.filter(
          program => program?.study_field?.name === curStudyField
        )
      : programsFiltered

  const filteredProgramsBasedOnCategory = programs.filter(
    program => program?.category?.type === mbaTypeOfProgram
  )

  const studyFieldsFiltered = studyFields?.filter((studyField, idx) => {
    return filteredProgramsBasedOnCategory.some(
      program =>
        program?.study_field?.name?.toLowerCase() === studyField?.toLowerCase()
    )
  })

  useEffect(() => {
    if (at.profession || at.course) setCurStudyField(studyFieldsFiltered[0])
  }, [
    at.profession,
    at.course,
    curStudyField,
    setCurStudyField,
    studyFields,
    studyFieldsFiltered
  ])

  return (
    <>
      <NextSeo
        title={`Программы обучения ${
          at.mini ? 'Mini MBA' : at.mba ? 'MBA' : ''
        } ${
          at.online ? 'Online' : at.blended ? 'Blended' : ''
        } - Moscow Business Academy`}
        description={
          at.mini
            ? truncate(
                at.en
                  ? ''
                  : 'Дистанционная программа Mini MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности',
                120
              )
            : ''
        }
        canonical={'https://moscow.mba/programs/mba/online'}
      />

      <section className={stls.jumbotronPrograms}>
        <div className={stls.generalContainer}>
          <Breadcrumbs />
        </div>
      </section>
      <div className={stls.generalContainer}>
        <h1 className={stls.title}>
          ПРОГРАММЫ <span>ОБУЧЕНИЯ</span>
        </h1>
        <div className={stls.container}>
          <Filters
            mbaTypeOfProgram={mbaTypeOfProgram}
            mbaFormat={mbaFormat}
            fields={studyFieldsFiltered}
            currentField={curStudyField}
            updateCurrentField={setCurStudyField}
          />
          <div className={stls.content}>
            <div className={stls.programMainInfo}>
              <div className={stls.subtitle}>
                <h2>
                  {at.mini
                    ? `Mini MBA ${mbaFormat}`
                    : at.mba
                    ? `MBA ${mbaFormat}`
                    : at.profession
                    ? 'Профессии'
                    : at.course
                    ? 'Курсы'
                    : 'Программы'}
                </h2>
                <span className={stls.qtPrograms}>
                  <ProgramsQty programs={programsFiltered} />
                </span>
              </div>

              <p className={stls.desc}>
                {at.mini
                  ? at.en
                    ? ''
                    : 'Дистанционная программа Mini MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'
                  : at.mba
                  ? at.en
                    ? ''
                    : 'Дистанционная программа MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'
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
              {programCards.map((program, idx) => {
                return (
                  <CardProgram
                    key={program?._id || program?.id}
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
