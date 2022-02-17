import stls from '@/styles/components/sections/ModulesAbroad.module.sass'
import cn from 'classnames'
import Image from 'next/image'
import { Wrapper } from '@/components/layout'
import { ImgStatueLiberty } from '@/components/images'

const ModulesAbroad = () => {
  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <h2 className={stls.title}>2 модуля за рубежом</h2>
          <div className={stls.desc}>
            <div className={stls.descText}>
              В программу включены 2 выездных модуля, во время которых вы
              познакомитесь с лучшими бизнес-практиками крупнейших деловых
              центров мира: Китая и США. В рамках модулей Вы посетите крупнейшие
              экономические и предпринимательские хабы: Силиконовая долина,
              офисы известных мировых корпораций и многое другое.
            </div>
          </div>
        </div>
        <ul className={stls.list}>
          <li className={stls.item}>
            <div className={stls.image}>
              <ImgStatueLiberty/>
              <div className={cn(stls.redOffset, stls.bottomRight)}></div>
            </div>
            <div className={stls.itemTextContainer}>
              <div className={stls.countryName}>США</div>
              <h5 className={stls.itemTitle}>
                Инновации и предпринимательство
              </h5>
              <p>
                Модуль разработан с опорой на передовой опыт и лучшие практики в
                области управления инновациями в США. Вы проведете встречи с
                предпринимателями, познакомитесь с практикой внедрения
                инноваций, а также освоите новые дисциплины, такие как Design
                Thinking, Technology Innovation и многие другие.
              </p>
            </div>
          </li>
          <li className={stls.item}>
            <div className={stls.image}>
              <Image
                src='/assets/images/new_abroad_modules_pic_2.jpg'
                alt={'Вид на небоскреб Wangjing SOHO, Китай'}
                width={516}
                height={344}
              />
              <div className={cn(stls.redOffset, stls.topLeft)}></div>
            </div>
            <div className={stls.itemTextContainer}>
              <div className={stls.countryName}>Китай</div>
              <h5 className={stls.itemTitle}>
                Стратегии выхода на международние рынки
              </h5>
              <p>
                На модуле в Китае Вы получите инструменты для вывода продукта на
                новые рынки и узнаете, как устроена самая быстрорастущая
                экономика в мире. Узнаете об инновационных подходах и
                бизнес-моделях, позволяющих местным компаниям достигать высоких
                результатов в различных рынках.
              </p>
            </div>
          </li>
        </ul>
      </Wrapper>
    </section>
  )
}

export default ModulesAbroad
