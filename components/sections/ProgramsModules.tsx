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
                : 'дисциплин базовой части'}
            </p>
          </li>
          <li className={stls.redItem}>
            <div className={stls.number}>
              {!at.profession && <ProgramSubjects subjects='specialty' />}
              {at.profession && <IconCheckCircleAltDim />}
            </div>
            <p className={stls.p}>
              {!at.profession && 'дисциплин специализации'}
              {at.profession && 'Практика и защита дипломной работы'}
            </p>
          </li>
        </ul>
        <h3 className={stls.h3}>{!at.executive && 'Базовые дисциплины'}</h3>
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

        {at.profession && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle=''
              items={[
                'Бизнес-стратегия в эпоху цифровизации: как изменить бизнес-модель и сделать технологию конкурентным преимуществом',
                'Что такое подрывные инновации и как их предвидеть',
                'Платформы и экосистемы как основа цифрового бизнеса',
                'Стратегия голубого океана и создание новых ценностных кривых'
              ]}
              fadeOutEffect
            />
            <ProgramsModule
              title='2 модуль'
              subTitle=''
              items={[
                'Основы современного маркетинга: модели, каналы и инструменты B2C- и B2B-маркетинга в цифровой среде',
                'Управление взаимоотношениями с клиентами',
                'Принципы использования маркетинговой аналитики и больших данных в современном бизнесе'
              ]}
              fadeOutEffect
            />
          </>
        )}

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
        {!at.executive && !at.profession && (
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
        {!at.profession && at.online && !at.mini && (
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
