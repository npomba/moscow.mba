import stls from '@/styles/components/sections/UpToDateContent.module.sass'
import Image from 'next/image'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'

const UpToDateContent = ({ withBottomLine = false }) => {
  const at = useAt()
  return (
    <section
      className={cn(stls.container, {
        [stls.withLine]: withBottomLine
      })}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.section}>
          <h2>
            {at.en ? 'Relevant content only' : 'Только актуальный контент'}
          </h2>
        </div>
        <div className={stls.content}>
          <div className={stls.top}>
            <div className={stls.desc}>
              {at.en
                ? 'We film our lectures to create an opportunity'
                : 'MBAcademy записывает контент очных лекций, поэтому это хорошая возможность'}{' '}
              <strong className={stls.red}>
                {at.en ? 'to learn' : 'получить MBA'}{' '}
              </strong>
              {at.en ? 'without offline presence' : 'не посещая наши кампусы'}
            </div>
            <div className={stls.bottomImg}>
              <Image
                src={'/assets/images/actual_pic_1.jpg'}
                alt='Студенты обучаются на конференции'
                width={850}
                height={366}
              />
            </div>
          </div>
          <div className={stls.rightImg}>
            <Image
              src={'/assets/images/actual_pic_2.jpg'}
              alt='Оператор снимает конференцию'
              width={410}
              height={635}
            />
          </div>
        </div>
        <div className={stls.section}>
          <ul className={stls.list}>
            <li>
              <div className={stls.number}>2021 {at.en ? 'year' : 'год'}</div>
              <p>
                {at.en ? 'The newest program of' : 'Новейшая программа'} 2021{' '}
                {at.en ? '' : 'года'}
              </p>
            </li>
            <li>
              <div className={stls.number}>
                53 {at.en ? 'experts' : 'эксперта'}
              </div>
              <p>
                {at.en ? 'International experts' : 'Международных экспертов'}
              </p>
            </li>
            <li>
              <div className={stls.number}>{at.en ? 'TOP 3' : 'ТОП 3'}</div>
              <p>
                {at.en
                  ? "We're TOP 3 relevant Russian business school"
                  : 'Входим в топ 3 бизнес-школ РФ по актуальности контента'}
              </p>
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default UpToDateContent
