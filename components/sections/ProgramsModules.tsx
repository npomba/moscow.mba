import stls from '@/styles/components/sections/ProgramsModules.module.sass'
import classNames from 'classnames'
import useAt from '@/components/hooks/useAt'
import ProgramsModule from '@/components/general/ProgramsModule'
import Stickers from '@/components/general/Stickers'
import Sticker from '@/components/general/Sticker'
import ProgramSubjects from '@/components/hooks/ProgramSubjects'
import { IconCheckCircleAltDim } from '@/components/icons'

const ProgramsModules = ({ data, smallerMb = false }) => {
  const at = useAt()

  const generateProfessionModules = () => {
    const professionModules = []
    const subjects = data.specializedSubjects
    let numberOfSubjects = subjects.length
    let currentSubjectIndex = 0

    while (numberOfSubjects >= 10) {
      const moduleSlice = subjects.slice(
        currentSubjectIndex,
        currentSubjectIndex + 5
      )
      professionModules.push({ items: moduleSlice })
      currentSubjectIndex += 5
      numberOfSubjects -= 5
    }

    if (numberOfSubjects > 0 && numberOfSubjects < 10) {
      const subjectsDivisionRemainder = numberOfSubjects / 2
      const firstModuleSlice = subjects.slice(
        currentSubjectIndex,
        currentSubjectIndex + Math.ceil(subjectsDivisionRemainder)
      )
      const secondModuleSlice = subjects.slice(
        Math.ceil(currentSubjectIndex + subjectsDivisionRemainder)
      )
      professionModules.push(
        { items: firstModuleSlice },
        { items: secondModuleSlice }
      )
    }
    return professionModules
  }

  const professionModules = generateProfessionModules()

  return (
    <section
      className={classNames(stls.container, { [stls.smallMb]: smallerMb })}>
      <div className={stls.pl}>
        <h2>Программа обучения</h2>
        <ul className={stls.redRectangle}>
          <li className={stls.redItem}>
            <div className={stls.number}>
              <ProgramSubjects subjects='base' />
            </div>
            <p className={stls.p}>
              {at.profession
                ? 'профильных дисциплин'
                : at.mbl
                ? 'дисциплина'
                : 'дисциплин базовой части'}
            </p>
          </li>
          <li className={stls.redItem}>
            <div className={stls.number}>
              {!at.profession && !at.mbl && (
                <ProgramSubjects subjects='specialty' />
              )}
              {(at.profession || at.mbl) && <IconCheckCircleAltDim />}
            </div>
            <p className={stls.p}>
              {!at.profession && !at.mbl && 'дисциплин специализации'}
              {(at.profession || at.mbl) &&
                'Практика и защита дипломной работы'}
            </p>
          </li>
        </ul>
        <h3 className={stls.h3}>
          {!at.executive && !at.profession && !at.mbl && 'Базовые дисциплины'}
        </h3>
      </div>
      <div className={stls.list}>
        {at.mini && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle=''
              items={[
                'Основы менеджмента',
                'Операционный менеджмент',
                'Стратегический менеджмент',
                'Управление проектами',
                'Управление человеческими ресурсами'
              ]}
            />
            <ProgramsModule
              title='2 модуль'
              subTitle=''
              items={[
                'Управление маркетингом',
                'Профессиональные навыки и личностное развитие руководителя',
                'Управление конфликтами',
                'Финансовый менеджмент',
                'Стратегический маркетинг'
              ]}
            />
          </>
        )}
        {(at.industry || at.professional) && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle='Современный менеджмент'
              items={[
                'Основы менеджмента',
                'Операционный менеджмент',
                'Инновационный менеджмент',
                'Стратегический менеджмент',
                'Антикризисный менеджмент',
                'Корпоративная социальная ответственность'
              ]}
            />
            <ProgramsModule
              title='2 модуль'
              subTitle='Основные сферы управления'
              items={[
                'Управление проектами',
                'Управление качеством',
                'Управление человеческими ресурсами',
                'Управление логистикой',
                'Управление изменениями',
                'Управление безопасностью организации',
                'Управление знаниями и интеллектуальным капиталом',
                'Управление маркетингом',
                'IT-технологии в управлении',
                'Управление бизнес-процессами'
              ]}
            />
            <ProgramsModule
              title='3 модуль'
              subTitle='Руководитель в современном бизнесе'
              items={[
                'Профессиональные навыки и личностное развитие',
                'Деловой английский язык',
                'Организационное поведение',
                'Лидерство',
                'Управление конфликтами',
                'Командообразование'
              ]}
            />
            <ProgramsModule
              title='4 модуль'
              subTitle='Экономика и финансы'
              items={[
                'Управленческая экономика',
                'Финансовый менеджмент',
                'Финансовые угрозы и риск-менеджмент',
                'Инвестиционное финансирование и кредитование',
                'Эккаутинг'
              ]}
            />
            <ProgramsModule
              title='5 модуль'
              subTitle='Продвинутый маркетинг'
              items={[
                'Стратегический маркетинг',
                'Маркетинговые исследования',
                'Интернет-маркетинг',
                'Функциональные маркетинговые стратегии',
                'Брендинг',
                'Современные методы продвижения товаров и услуг'
              ]}
            />
            <ProgramsModule
              title='6 модуль'
              subTitle='Предпринимательство'
              items={[
                'Основы предпринимательской деятельности',
                'Правовые основы бизнеса',
                'Бизнес-планирование',
                'Цифровая трансформация бизнеса'
              ]}
            />
          </>
        )}

        {at.profession &&
          professionModules.map((moduleItem, idx, moduleItems) => (
            <ProgramsModule
              key={`programsModule-${idx}`}
              title={`${idx + 1} модуль`}
              items={moduleItem.items}
              fadeOutEffect={
                idx === moduleItems.length - 1 ||
                (idx === moduleItems.length - 2 && moduleItems.length % 2 === 0)
              }
            />
          ))}

        {at.executive && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle=''
              items={data.specializedSubjects.filter((item, idx) => idx < 7)}
            />
            <ProgramsModule
              title='2 модуль'
              subTitle=''
              items={data.specializedSubjects.filter((item, idx) => idx >= 7)}
            />
          </>
        )}
      </div>
      <div className={stls.pl}>
        {!at.executive && !at.profession && !at.mbl && (
          <h3 className={stls.h3}>Специализированные дисциплины</h3>
        )}
      </div>
      <div className={stls.list}>
        {(at.industry || at.professional) && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle=''
              items={data.specializedSubjects.filter((item, idx) => idx < 5)}
            />
            <ProgramsModule
              title='2 модуль'
              subTitle=''
              items={data.specializedSubjects.filter((item, idx) => idx >= 5)}
            />
          </>
        )}
        {at.mbl && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle=''
              items={[
                'Теория права',
                'Международное частное право',
                'Деловой английский язык',
                'Международное экономическое право',
                'Международное налоговое право'
              ]}
            />
            <ProgramsModule
              title='2 модуль'
              subTitle=''
              items={[
                'Ценные бумаги в международном частном праве',
                'Международное бизнес-право',
                'Международные коммерческие контракты: практические аспекты',
                'Особенности рассмотрения споров в Международном коммерческом арбитраже',
                'Международный гражданский процесс'
              ]}
            />
            <ProgramsModule
              title='3 модуль'
              subTitle=''
              items={[
                'Международное инвестиционное право и арбитраж',
                'Международное торговое финансирование',
                'Трансграничные сделки: вопросы квалификации и регулирования',
                'Профессиональная этика юриста',
                'Международные сделки по слияниям и поглощениям'
              ]}
            />
            <ProgramsModule
              title='4 модуль'
              subTitle=''
              items={[
                'Интеллектуальная собственность в трансграничных коммерческих отношениях',
                'Офшоры и трасты',
                'Управление конфликтами, стрессами и временем',
                'Правовое регулирование иностранных инвестиций',
                'Правовое регулирование трансграничного обращения ценных бума'
              ]}
            />
            <ProgramsModule
              title='5 модуль'
              subTitle=''
              items={[
                'Интеграционное право',
                'Контрактная практика в сфере трансграничных перевозок',
                'Международные контракты',
                'Современные правовые технологии платежей',
                'Антимонопольное регулирование международного бизнеса'
              ]}
            />
            <ProgramsModule
              title='6 модуль'
              subTitle=''
              items={[
                'Юридическая бизнес-документация и деловое письмо',
                'Международные экономические санкции',
                'Особенности рассмотрения трансграничных коммерческих споров в государственных судах',
                'Европейское контрактное право',
                'Защита бизнеса и урегулирование споров'
              ]}
            />
            <ProgramsModule
              title='7 модуль'
              subTitle=''
              items={[
                'Налоговый менеджмент',
                'Основы предпринимательской деятельности',
                'Финансовый менеджмент в юридической индустрии',
                'Управление человеческими ресурсами в юридическом бизнесе',
                'Юридическая компаративистика'
              ]}
            />
            <ProgramsModule
              title='8 модуль'
              subTitle=''
              items={[
                'Основы права и юридической профессии. Стратегическое управление юридическим бизнесом. Комплексный экономико-юридический подход',
                'Международно-правовое регулирование финансового контроля',
                'Юридическое представительство в разных странах',
                'Международные, национальные стандарты и технологии управления проектами',
                'Международные стандарты финансовой отчетности и особенности трансформации',
                'Навыки soft skills в профессиональной деятельности юриста'
              ]}
            />
          </>
        )}

        {at.mini && at.online && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle=''
              items={data.specializedSubjects.filter((item, idx) => idx <= 5)}
            />
            <ProgramsModule
              title='Практика'
              subTitle=''
              items={[
                'Работа над собственным проектом',
                'Групповые задания и нетворкинг',
                'Кейс-методы',
                'Эссе'
              ]}
            />
          </>
        )}
        {at.mini && at.blended && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle=''
              items={data.specializedSubjects.filter((item, idx) => idx <= 5)}
            />
            <ProgramsModule
              title='Очный модуль'
              subTitle=''
              items={[
                'Живое общение со спикерами',
                'Групповые проекты и разбор кейсов',
                'Домашние задания и курсовая работа',
                'Защита проектов и выпускной вечер'
              ]}
            />
          </>
        )}
        {!at.profession && at.blended && !at.mini && (
          <>
            <ProgramsModule
              title='Практика'
              items={[
                'Работа над собственным проектом',
                'Групповые задания и нетворкинг',
                'Кейс-методы',
                'Эссе'
              ]}
            />
            <ProgramsModule
              title='Защита диплома'
              items={[
                'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
                'Защита итоговой дипломной работы'
              ]}
            />
          </>
        )}
        {((!at.profession && at.online && !at.mini) || at.mbl) && (
          <Stickers>
            <Sticker
              type={'short'}
              clr={'light'}
              title={'Практические модули'}
              listItems={[
                'Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе'
              ]}
            />
            <Sticker
              type={'short'}
              clr={'light'}
              title={'Итоговая аттестация'}
              listItems={[
                'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
                'Защита итоговой аттестационной работы'
              ]}
            />
          </Stickers>
        )}
        {!at.profession && at.online && at.mini && (
          <Sticker
            type={'long'}
            clr={'light'}
            title={'Итоговая аттестация'}
            listItems={[
              'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
              'Защита итоговой аттестационной работы'
            ]}
          />
        )}
        {!at.profession && at.blended && !at.mini && (
          <Sticker
            type={'long'}
            clr={'light'}
            title={'Очный модуль в Москве'}
            listItems={[
              'Живое общение со спикерами',
              'Групповые проекты и разбор кейсов',
              'Домашние задания и курсовая работа',
              'Защита проектов и выпускной вечер'
            ]}
          />
        )}
        {!at.profession && at.blended && at.mini && (
          <Stickers>
            <Sticker
              type={'short'}
              clr={'light'}
              title={'Практические модули'}
              listItems={[
                'Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе'
              ]}
            />
            <Sticker
              type={'short'}
              clr={'light'}
              title={'Итоговая аттестация'}
              listItems={[
                'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
                'Защита итоговой аттестационной работы'
              ]}
            />
          </Stickers>
        )}
      </div>
    </section>
  )
}

export default ProgramsModules
