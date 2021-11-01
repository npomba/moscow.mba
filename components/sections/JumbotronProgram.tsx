import stls from '@/styles/components/sections/JumbotronProgram.module.sass'
import classNames from 'classnames'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Image from 'next/image'
import Until from '@/components/costs/Until'
import Breadcrumbs from '@/components/general/Breadcrumbs'
import JumbotronLabel from '@/components/general/JumbotronLabel'
import PopupForm from '@/components/popups/PopupForm'
import InfoRectangle from '@/components/general/InfoRectangle'
import Discount from '@/components/costs/Discount'
import { useAt } from '@/helpers/index'
import { IconCheckCircleAlt } from '@/components/icons'
import Loan from '@/components/costs/Loan'

const JumbotronProgram = ({ data }) => {
  const at = useAt()
  const isDiscounted =
    (at.mini && at.online) ||
    (at.professional && at.online) ||
    (at.industry && at.online) ||
    (at.profession && at.online) ||
    at.mbl

  return (
    <section className={stls.container}>
      <div className={stls.image}>
        <Image
          src={`/assets/images/programs-bgs/${data.picture}`}
          alt='Студенты обучаются'
          layout='fill'
        />
      </div>
      <div className={stls.generalContainer}>
        <div className={stls.content}>
          <Breadcrumbs programChunkData={data} />
          <div className={stls.contentTop}>
            {(at.online || at.mbl) && (
              <div
                className={classNames(stls.discountSticker, stls.leftCorner)}>
                <div className={stls.discountAmount}>
                  <Discount />
                </div>
                <span>
                  <Until />
                </span>
              </div>
            )}
            <div className={stls.label}>
              <JumbotronLabel />
            </div>
          </div>
          <div className={stls.flexContainer}>
            <div className={stls.descContainer}>
              <h1
                className={classNames({ [stls.smallerTitle]: at.profession })}>
                {data.title}
              </h1>
              <div className={stls.desc}>
                {at.profession
                  ? data.description
                  : 'Оставьте заявку и получите консультацию по программе, а также узнайте возможные варианты скидок и требования к поступлению'}
              </div>
              <div className={stls.btnLoanGroup}>
                <Popup
                  trigger={<a className={stls.button}>Оставить заявку</a>}
                  modal
                  nested>
                  {close => (
                    <PopupForm
                      programId={data._id}
                      programTitle={data.title}
                      title={'Получите консультацию'}
                      closePopUpForm={close}
                    />
                  )}
                </Popup>
                <div className={stls.loanContainer}>
                  <IconCheckCircleAlt />
                  <p className={stls.loanDesc}>
                    Можно учиться в рассрочку за{' '}
                    <Loan
                      discount={isDiscounted}
                      type={data.mbaTypeOfProgram}
                      format={data.mbaFormat}
                      notComparingPrices
                    />
                  </p>
                </div>
              </div>
            </div>
            <ul className={stls.list}>
              <li className={stls.item}>
                <div className={stls.number}>2021</div>
                <p>Новейшая программа 2021 года</p>
              </li>
              <li className={stls.separator}></li>

              <li className={stls.item}>
                <div className={stls.number}>150+</div>
                <p>
                  {at.profession
                    ? 'экспертов формируют программы'
                    : 'международных экспертов'}
                </p>
              </li>
              <li className={stls.separator}></li>

              <li className={stls.item}>
                <div className={stls.number}>2000+</div>
                <p>студентов по всему миру</p>
              </li>
            </ul>
          </div>
          <InfoRectangle
            type={data.mbaTypeOfProgram ?? 'executive'}
            format={data.mbaFormat}
          />
        </div>
      </div>
    </section>
  )
}

export default JumbotronProgram
