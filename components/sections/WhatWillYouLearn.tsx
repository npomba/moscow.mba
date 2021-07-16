import stls from '@/styles/components/sections/WhatWillYouLearn.module.sass'
import classNames from 'classnames'
import Image from 'next/image'
import { base64pixel } from '@/config/index'

const WhatWillYouLearn = ({ data }) => {
  return (
    <section className={stls.container}>
      <div className={stls.content}>
        <div className={classNames(stls.titleContainer, stls.floatLeft)}>
          <h2 className={stls.title}>
            Чему <br />
            Вы научитесь?
          </h2>
        </div>
        <div className={stls.floatRight}>
          <ul className={stls.list}>
            {data.whatWillYouLearn.map((item, idx) => {
              return (
                <li key={idx} className={stls.item}>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
        <div className={stls.floatLeft}>
          <div className={stls.image}>
            <Image
              src='/assets/images/learning_pic_1.jpg'
              width='651'
              height='389'
              alt='Слушатели во время конференции'
              placeholder='blur'
              blurDataURL={base64pixel}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
// 651 x 389

export default WhatWillYouLearn
