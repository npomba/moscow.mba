import stls from '@/styles/components/general/Filters.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import Discount from '@/components/costs/Discount'
import { SearchField } from '@/components/general'

const Filters = ({
  mbaTypeOfProgram,
  mbaFormat,
  fields,
  currentField,
  updateCurrentField
}) => {
  const at = useAt()

  const handleLinkClick = e => {
    if (at.profession) e.preventDefault()
  }

  return (
    <>
      <ul className={stls.filters}>
        <li>
          <SearchField />
        </li>
        <li>
          <h4 className={stls.title}>Тип программы</h4>
          <div className={stls.content}>
            <Link href={`/programs/mini/${mbaFormat}`}>
              <a>
                <span
                  className={cn({
                    [stls.circle]: true,
                    [stls.active]: at.mini
                  })}></span>{' '}
                Mini MBA
              </a>
            </Link>

            <Link href={`/programs/mba/${mbaFormat}`}>
              <a>
                <span
                  className={cn({
                    [stls.circle]: true,
                    [stls.active]: at.mba
                  })}></span>{' '}
                MBA
              </a>
            </Link>

            <Link href={`/programs/profession/online`}>
              <a>
                <span
                  className={cn({
                    [stls.circle]: true,
                    [stls.active]: at.profession
                  })}></span>{' '}
                Профессии
              </a>
            </Link>

            {/* <Link href={`/programs/course/online`}>
            <a>
              <span
                className={cn({
                  [stls.circle]: true,
                  [stls.active]: at.course
                })}></span>{' '}
              Курсы
            </a>
          </Link> */}

            <Link href='/programs/international-business-law' locale='ru'>
              <a
                className={cn({
                  [stls.highlight]: true,
                  [stls.mbl]: true
                })}>
                MBL
              </a>
            </Link>
            <Link href='/programs/executive' locale='ru'>
              <a className={stls.highlight}>
                Executive MBA <span className={stls.premium}>Premium</span>
              </a>
            </Link>
          </div>
        </li>
        <li>
          <h4 className={stls.title}>Формат обучения</h4>
          <div className={stls.content}>
            <Link href={`/programs/${mbaTypeOfProgram}/blended`}>
              <a
                className={cn({ [stls.inactiveLink]: at.profession })}
                onClick={e => handleLinkClick(e)}>
                <span
                  className={cn({
                    [stls.circle]: true,
                    [stls.active]: at.blended
                  })}></span>{' '}
                BLENDED (с очными модулями)
              </a>
            </Link>

            <Link href={`/programs/${mbaTypeOfProgram}/online`}>
              <a>
                <span
                  className={cn({
                    [stls.circle]: true,
                    [stls.active]: at.online
                  })}></span>{' '}
                ONLINE (дистанционно){' '}
                <span className={stls.discount50}>
                  <Discount />
                </span>
              </a>
            </Link>
          </div>
        </li>
        {(at.profession || at.course) && fields && (
          <li>
            <h4 className={stls.title}>Направление</h4>
            <div className={stls.content}>
              {fields.map((field, idx) => (
                <button
                  key={`field-btn-${idx}`}
                  className={stls.fieldButton}
                  onClick={() => updateCurrentField(field)}>
                  <span
                    className={cn({
                      [stls.circle]: true,
                      [stls.active]: field === currentField
                    })}></span>
                  {field}
                </button>
              ))}
            </div>
          </li>
        )}
      </ul>
    </>
  )
}

export default Filters
