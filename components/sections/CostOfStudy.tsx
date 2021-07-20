import stls from '@/styles/components/sections/CostOfStudy.module.sass'
import classNames from 'classnames'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Until from '@/components/costs/Until'
import PopupForm from '@/components/popups/PopupForm'
import useAt from '@/components/hooks/useAt'
import Price from '@/components/costs/Price'
import Loan from '@/components/costs/Loan'
import Discount from '@/components/costs/Discount'
import TrainingPeriod from '../costs/TrainingPeriod'
import ProgramSubjects from '../hooks/ProgramSubjects'
import { RSA_PSS_SALTLEN_MAX_SIGN } from 'constants'

const PriceBlock = ({
  isDiscounted,
  canPayInInstalments,
  programType,
  programFormat,
  withDesc,
  withPriceTitles
}) => {
  let topContentPart

  if (withDesc) {
    topContentPart = (
      <div className={stls.ctaTextContainer}>
        <p>
          Успех в бизнесе напрямую связывают с получением бизнес-образования
        </p>
        <p>
          Инвестируйте своё время в образование с Moscow Business Academy и
          кратно увеличьте свой запас знаний и доход
        </p>
        <p className={stls.red}>Запишитесь на MBA сегодня:</p>
      </div>
    )
  }

  if (!withDesc) {
    topContentPart = (
      <div className={stls.price}>
        {withPriceTitles && <p className={stls.priceDesc}>Стоимость курса</p>}
        <Price
          discount={isDiscounted}
          type={programType}
          format={programFormat}
          renderedByComponent='CostOfStudy'
        />{' '}
      </div>
    )
  }

  return (
    <>
      {topContentPart}
      <div className={stls.price}>
        {withPriceTitles && (
          <p className={stls.priceDesc}>Оплата по месяцам без переплаты</p>
        )}
        {canPayInInstalments ? (
          <Loan
            discount={isDiscounted}
            type={programType}
            format={programFormat}
            renderedByComponent='CostOfStudy'
          />
        ) : (
          <Price
            discount={isDiscounted}
            type={programType}
            format={programFormat}
          />
        )}
      </div>
    </>
  )
}

const CostOfStudy = ({
  programTitle = null,
  programId = null,
  programFormat = null,
  programType = null
}) => {
  const at = useAt()
  const isDiscounted =
    (at.mini && at.online) ||
    (at.professional && at.online) ||
    (at.industry && at.online) ||
    (at.profession && at.online)

  const canPayInInstalments = at.online
  const costWithDescription =
    at.mini || at.professional || at.industry || at.executive

  let list

  if (at.mini || at.professional || at.industry || at.executive) {
    list = (
      <>
        <ul className={stls.list}>
          <li className={stls.listItem}>
            <TrainingPeriod
              type={
                at.mini
                  ? 'mini'
                  : at.professional
                  ? 'professional'
                  : at.industry
                  ? 'industry'
                  : at.executive
                  ? 'executive'
                  : null
              }
            />
          </li>
          <li className={stls.listItem}>
            {at.online
              ? 'Дистанционно'
              : at.blended
              ? 'С очными модулями'
              : 'Очно'}
          </li>
          <li className={stls.listItem}>
            Ближайший набор{' '}
            <Until preposition={false} executive={at.executive && true} />
          </li>
          <li className={stls.listItem}>Живое общение с экспертами</li>
          <li className={stls.listItem}>
            <ProgramSubjects
              type={
                at.mini
                  ? 'mini'
                  : at.professional
                  ? 'professional'
                  : at.industry
                  ? 'industry'
                  : at.executive
                  ? 'executive'
                  : null
              }
              subjects={'base'}
            />{' '}
            дисциплин об управлении
          </li>
          <li className={stls.listItem}>
            <ProgramSubjects
              type={
                at.mini
                  ? 'mini'
                  : at.professional
                  ? 'professional'
                  : at.industry
                  ? 'industry'
                  : at.executive
                  ? 'executive'
                  : null
              }
              subjects={'specialty'}
            />{' '}
            дисциплин специализации
          </li>
          {!at.online && (
            <li className={stls.listItem}>3 выездных модуля в Москве</li>
          )}
        </ul>
        <div className={stls.note}>*Возможна рассрочка</div>
      </>
    )
  } else {
    list = (
      <ul className={stls.list}>
        <li className={stls.listItem}>От 4 месяцев обучения</li>
        <li className={stls.listItem}>
          {at.online
            ? 'Дистанционно'
            : at.blended
            ? 'С очными модулями'
            : 'Очно'}
        </li>
        <li className={stls.listItem}>
          Ближайший набор <Until preposition={false} />
        </li>
        <li className={stls.listItem}>Теория и практические задания</li>
        <li className={stls.listItem}>Диплом установленного образца</li>
      </ul>
    )
  }

  return (
    <section className={stls.container}>
      {isDiscounted && (
        <div className={stls.discountSticker}>
          <div className={stls.discountSize}>
            <Discount />
          </div>
          <span>
            <Until />
          </span>
        </div>
      )}
      <h2 className={classNames({ [stls.bigMb]: at.profession })}>
        Стоимость обучения
      </h2>
      <div className={stls.content}>
        <div className={stls.contentBlock}>
          <div className={stls.programName}>
            {at.mini
              ? 'MBA Mini'
              : at.professional
              ? 'MBA Professional'
              : at.industry
              ? 'MBA Industry'
              : at.executive
              ? 'MBA Executive'
              : 'Профессиональная переподготовка'}
          </div>
          {list}
        </div>
        <div
          className={classNames(stls.contentBlock, {
            [stls.verticalSeparatorLine]: at.profession
          })}>
          <PriceBlock
            isDiscounted={isDiscounted}
            canPayInInstalments={canPayInInstalments}
            programType={programType}
            programFormat={programFormat}
            withDesc={costWithDescription}
            withPriceTitles={at.profession}
          />
          <div
            className={classNames(stls.buttonBlock, {
              [stls.noMb]: at.profession
            })}>
            <Popup
              trigger={<a className={stls.button}>Оставить заявку</a>}
              modal
              nested>
              {close => (
                <PopupForm
                  programId={programId}
                  programTitle={programTitle}
                  title={'Получите консультацию'}
                  closePopUpForm={close}
                />
              )}
            </Popup>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CostOfStudy
