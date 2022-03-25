import stls from '@/styles/components/sections/general/SectionStudyCost.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { getClassNames } from '@/helpers/index'
import { TrainingPeriod } from '@/components/costs'
import { Wrapper } from '@/components/layout'

type TypeSectionStudyCostProps = TypeClassNames & {
  id: string
  title: string
  format: string
  type: string
  price: string
}

const SectionStudyCost = ({
  classNames,
  id,
  title,
  format,
  type,
  price
}: TypeSectionStudyCostProps) => {
  const at = useAt()
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper column>
        <h2 className={stls.title}>
          {at.en ? 'Study Cost' : 'Стоимость обучения'}
        </h2>
        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.programInfos}>
              <TrainingPeriod
                type={
                  at.mini
                    ? 'mini'
                    : at.mba
                    ? 'mba'
                    : at.executive
                    ? 'executive'
                    : at.mbl
                    ? 'mba'
                    : null
                }
              />

              <div>{at.blended ? '' : 'Дистанционно'}</div>
            </div>
          </div>
          <div className={stls.right}></div>
        </div>
        {/*  */}
      </Wrapper>
    </section>
  )
}

export default SectionStudyCost
