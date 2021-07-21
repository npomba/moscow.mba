import stls from '@/styles/components/pages/Programs.module.sass'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import Link from 'next/link'
import useAt from '@/components/hooks/useAt'
import langMenu from '@/data/translation/menu'
import SetString from '@/components/hooks/SetString'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import InfoRectangle from '@/components/general/InfoRectangle'
import ProgramSubjects from '@/components/hooks/ProgramSubjects'
import ProgramsQty from '@/components/general/ProgramsQty'
import Filters from '@/components/general/Filters'
import { IconCheckCircle, IconArrowTopRight } from '@/components/icons'

const PagePrograms = ({ programs, mbaTypeOfProgram, mbaFormat }) => {
  const at = useAt()

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
          <Filters mbaTypeOfProgram={mbaTypeOfProgram} mbaFormat={mbaFormat} />
          <div className={stls.content}>
            <div>
              <div className={stls.subtitle}>
                <h2>
                  {at.mini
                    ? 'Mini MBA'
                    : at.professional
                    ? 'Professional MBA'
                    : at.industry
                    ? 'Industry MBA'
                    : ''}{' '}
                  {mbaFormat}
                </h2>
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
            </div>
            <InfoRectangle
              programPage={true}
              type={mbaTypeOfProgram}
              format={mbaFormat}
            />
            <div className={`mini-programs-slider ${stls.programs}`}>
              {programs.map((program, idx) => {
                return (
                  <Link
                    href={`/programs/${mbaTypeOfProgram}/${mbaFormat}/${program.url}`}
                    key={program._id}>
                    <a className={stls.program}>
                      <div className={stls.arrow}>
                        <IconArrowTopRight />
                      </div>
                      <div className={stls.number}>{idx + 1}.</div>
                      <div className={stls.programTitle}>{program.title}</div>
                    </a>
                  </Link>
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
