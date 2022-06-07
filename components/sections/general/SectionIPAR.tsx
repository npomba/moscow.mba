import stls from '@/styles/components/sections/general/SectionIPAR.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { getClassNames } from '@/helpers/index'
import { contactData } from '@/config/index'
import { Wrapper } from '@/components/layout'
import { ImgLogoIPAR } from '@/components/images'

type TypeSectionIPARProps = TypeClassNames

const SectionIPAR = ({ classNames }: TypeSectionIPARProps) => {
  const at = useAt()
  const contactInfo = contactData()
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper column classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <div className={stls.left}>
            <ImgLogoIPAR />
          </div>
          <div className={stls.right}>
            <p className={stls.p}>
              Курсы повышения квалификации Moscow Business Academy аккредитованы
              Институтом Профессиональных Бухгалтеров
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionIPAR
