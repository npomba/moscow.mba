import stls from '@/styles/components/sections/Students.module.sass'
import useAt from '@/components/hooks/useAt'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren
} from 'react-circular-progressbar'
// import 'react-circular-progressbar/dist/styles.css'

import circleStls from '@/styles/components/CircularProgressBar.module.sass'
import Image from 'next/image'

const Students = () => {
  const at = useAt()

  return (
    <section className='students-section section-pl'>
      <div className='title-pl red'>Более 2000</div>
      <div className='students-flex'>
        <div className='students-detail'>
          <h2>Наши студенты</h2>
          <div className='desc'>
            Вы станете частью эффективного нетворкинга по всему миру
          </div>
          <h4>Согласно опросу 2000 наших студентов:</h4>
          <ul className='students-list'>
            <li>
              <CircularProgressbarWithChildren
                value={96}
                className={circleStls.circle}>
                <p className={circleStls.text}>96%</p>
              </CircularProgressbarWithChildren>
              <p>остались довольны обучением</p>
            </li>
            <li>
              <CircularProgressbarWithChildren
                className={circleStls.circle}
                value={92}>
                <p className={circleStls.text}>92%</p>
              </CircularProgressbarWithChildren>
              <p>
                {at.profession
                  ? 'применили полученные знания в работе'
                  : 'повысили показатели своих проектов'}
              </p>
            </li>
            <li>
              <CircularProgressbarWithChildren
                className={circleStls.circle}
                value={72}>
                <p className={circleStls.text}>72%</p>
              </CircularProgressbarWithChildren>
              <p>продвинулись по карьерной лестнице</p>
            </li>
          </ul>
        </div>
        <div className='dobble-images students-images'>
          <div className='image pic-1'>
            <Image
              src='/assets/images/students_pic_1.png'
              alt='Группа счастливых выпускников'
              width={481}
              height={473}
            />
          </div>
          <div className='image pic-2'>
            <Image
              src='/assets/images/students_pic_2.jpg'
              alt='Счастливый выпускник'
              width={199}
              height={199}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Students
