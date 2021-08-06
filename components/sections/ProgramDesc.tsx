import stls from '@/styles/components/sections/ProgramDesc.module.sass'
import classNames from 'classnames'
import useAt from '@/components/hooks/useAt'
import Image from 'next/image'

const ProgramDesc = () => {
  const at = useAt()
  return (
    <section className={stls.container}>
      <div
        className={classNames(stls.content, {
          [stls.smallPl]: at.profession || at.promo
        })}>
        {!at.profession && !at.promo && (
          <div className={stls.title}>О&nbsp;программе</div>
        )}
        <h2>
          {at.mini && at.online && 'MBA Mini ONLINE'}
          {at.professional && at.online && 'MBA Professional ONLINE'}
          {at.industry && at.online && 'MBA Industry ONLINE'}
          {at.mini && at.blended && 'MBA Mini BLENDED'}
          {at.professional && at.blended && 'MBA Professional BLENDED'}
          {at.industry && at.blended && 'MBA Industry BLENDED'}
          {!at.profession && !at.promo && ' — путь руководителя к росту'}
          {at.profession && 'Компетенции, востребованные на рынке'}
          {at.promo && 'Вы получите востребованные на рынке компетенции'}
        </h2>
        <div className={stls.desc}>
          {at.mini &&
            at.online &&
            'Дистанционная программа Mini MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'}
          {at.professional &&
            at.online &&
            'Дистанционная программа Professional MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'}
          {at.industry &&
            at.online &&
            'Дистанционная программа Industry MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'}
          {at.mini &&
            at.blended &&
            'MBA mini Blended — смешанная программа MBA: дистанционный формат плюс очные сессии. Разработана для предпринимателей и руководителей компаний, которые ценят свое время и хотят пройти обучение без сильного отрыва от работы'}
          {at.professional &&
            at.blended &&
            'MBA Professional Blended — смешанная программа MBA: дистанционный формат плюс очные сессии. Разработана для предпринимателей и руководителей компаний, которые ценят свое время и хотят пройти обучение без сильного отрыва от работы'}
          {at.industry &&
            at.blended &&
            'MBA Industry Blended — смешанная программа MBA: дистанционный формат плюс очные сессии. Разработана для предпринимателей и руководителей компаний, которые ценят свое время и хотят пройти обучение без сильного отрыва от работы'}
          {at.profession &&
            'Мы проводим более 100 исследований ежегодно и добавляем в программу то, что требуют топовые работодатели. После обучения вы будете на 100% готовы к новым профессиональным вызовам'}
          {at.promo &&
            'Мы проводим более 100 исследований ежегодно и постоянно добавляем в программу самые современные инструменты для построения высокодоходных бизнес-систем.  После обучения вы будете на 100% готовы к новым профессиональным вызовам.'}
        </div>
      </div>
      <div className={stls.imageContainer}>
        {!at.profession && !at.promo && (
          <Image
            src='/assets/images/top_path_pic_1.jpg'
            alt='Слушатели на конференции'
            width={503}
            height={503}
          />
        )}
        {(at.profession || at.promo) && (
          <Image
            src='/assets/images/handsome-business-man.jpg'
            alt='Слушатели на конференции'
            width={503}
            height={503}
          />
        )}
      </div>
    </section>
  )
}

export default ProgramDesc
