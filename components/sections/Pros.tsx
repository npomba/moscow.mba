import stls from '@/styles/components/sections/Pros.module.sass'
import cn from 'classnames'
import { useAt } from '@/helpers/index'
import Image from 'next/image'
import { IconCheck } from '@/components/icons'

const Pros = ({ format = 'online' }) => {
  const at = useAt()
  if (format === 'online') {
    return (
      <section className={stls.container}>
        <div className={stls.title}>
          {!at.profession && !at.course && (
            <>
              online
              <br /> модули
            </>
          )}
          {at.profession && !at.course && (
            <>
              online <br /> обучение
            </>
          )}
        </div>
        <h2 className={stls.prosTitle}>
          На{' '}
          {at.mini
            ? 'MBA mini'
            : at.mba
            ? 'MBA'
            : at.executive
            ? 'MBA executive'
            : 'курсе'}{' '}
          мы обучаем онлайн. И делаем это качественно
        </h2>
        <div className={stls.content}>
          <ul className={stls.list}>
            <li className={stls.item}>
              <div className={stls.circle}>
                <IconCheck stroke={'#FF3535'} />
              </div>
              <div>
                <h5 className={stls.itemTitle}>Учитесь из любой точки мира</h5>
                <p>
                  Обучение проходит на нашей образовательной платформе. Всё
                  собрано в личном кабинете: здесь удобно смотреть расписание,
                  изучать материалы, записи прошедших лекций, загружать задания
                  и получать по ним обратную связь
                </p>
              </div>
            </li>
            <li className={stls.item}>
              <div className={stls.circle}>
                <IconCheck stroke={'#FF3535'} />
              </div>
              <div>
                <h5 className={stls.itemTitle}>
                  Онлайн-формат даёт возможность учиться у лучших
                </h5>
                <p>
                  Благодаря онлайн-формату Вы можете пройти программу с
                  экспертами сразу из нескольких топовых бизнес-школ{' '}
                  {at.profession || at.course ? 'России' : 'мира'}. Мы хотим,
                  чтобы ценные знания были доступны Вам при любых
                  обстоятельствах
                </p>
              </div>
            </li>
            <li className={stls.item}>
              <div className={stls.circle}>
                <IconCheck stroke={'#FF3535'} />
              </div>
              <div>
                <h5 className={stls.itemTitle}>Получаете престижные дипломы</h5>
                <p>
                  {at.mini
                    ? 'Дипломы MBA mini online'
                    : at.mba
                    ? 'Дипломы MBA online'
                    : at.executive
                    ? 'Дипломы MBA executive online'
                    : 'Дипломы дистанционных программ'}{' '}
                  не отличаются от дипломов очных программ за счет того, что
                  преподают те же спикеры по тем же учебным программам
                </p>
              </div>
            </li>
            <li className={stls.item}>
              <div className={stls.circle}>
                <IconCheck stroke={'#FF3535'} />
              </div>
              <div>
                <h5 className={stls.itemTitle}>
                  Общайтесь с{' '}
                  {at.profession || at.course
                    ? 'преподавателями'
                    : 'экспертами'}{' '}
                  online
                </h5>
                <p>
                  На {at.profession || at.course ? 'курсе' : 'MBA mini online'}{' '}
                  у Вас есть возможность задавать вопросы
                  {at.profession || at.course
                    ? ' преподавателям'
                    : ' экспертам'}{' '}
                  во время видео-встреч, а также через нашу образовательную
                  платформу
                </p>
              </div>
            </li>
          </ul>
          <div className={stls.imageRight}>
            <Image
              src='/assets/images/advantages_pic_1.jpg'
              alt='Студент MBA'
              width={357}
              height={558}
            />
          </div>
        </div>
      </section>
    )
  }

  if (format === 'blended') {
    return (
      <section className={cn(stls.container, stls.blendedContainer)}>
        <div className={stls.title}>
          online <br /> модули
        </div>
        <h2 className={stls.prosTitle}>
          Также на MBA blended мы обучаем онлайн. И делаем это качественно
        </h2>
        <div className={stls.content}>
          <div className={stls.imageLeft}>
            <div className={stls.imageContainer}>
              <Image
                src='/assets/images/advantages_pic_1.jpg'
                alt='Студент MBA'
                width={265}
                height={317}
              />
            </div>
          </div>
          <ul className={stls.list}>
            <li className={stls.item}>
              <div className={stls.circle}>
                <IconCheck stroke={'#FF3535'} />
              </div>
              <div>
                <h5 className={stls.itemTitle}>Учитесь из любой точки мира</h5>
                <p>
                  Обучение проходит на нашей образовательной платформе. Всё
                  собрано в личном кабинете: здесь удобно смотреть расписание,
                  изучать материалы, записи прошедших лекций, загружать задания
                  и получать по ним обратную связь
                </p>
              </div>
            </li>
            <li className={stls.item}>
              <div className={stls.circle}>
                <IconCheck stroke={'#FF3535'} />
              </div>
              <div>
                <h5 className={stls.itemTitle}>
                  Онлайн-формат даёт возможность учиться у лучших
                </h5>
                <p>
                  Благодаря онлайн-формату Вы можете пройти программу с
                  экспертами сразу из нескольких топовых бизнес-школ мира. Мы
                  хотим, чтобы ценные знания были доступны Вам при любых
                  обстоятельствах
                </p>
              </div>
            </li>
            <li className={stls.item}>
              <div className={stls.circle}>
                <IconCheck stroke={'#FF3535'} />
              </div>
              <div>
                <h5 className={stls.itemTitle}>
                  Общайтесь с экспертами online
                </h5>
                <p>
                  На MBA{' '}
                  {at.mini
                    ? 'mini'
                    : at.mba
                    ? 'mba'
                    : at.executive
                    ? 'executive'
                    : null}{' '}
                  online у Вас есть возможность задавать вопросы экспертам во
                  время видео-встреч, а также через нашу образовательную
                  платформу
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Pros
