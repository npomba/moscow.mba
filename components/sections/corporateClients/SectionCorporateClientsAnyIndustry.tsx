import stls from '@/styles/components/sections/corporateClients/SectionCorporateClientsAnyIndustry.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { ImgCorporateClientsAnyIndustry } from '@/components/images'

type SectionCorporateClientsAnyIndustryProps = TypeClassNames

const SectionCorporateClientsAnyIndustry = ({
  classNames
}: SectionCorporateClientsAnyIndustryProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column classNames={[stls.wrapper]}>
        <div className={stls.left}>
          <p className={stls.leftP}>
            Разрабатываем курсы{' '}
            <span className={stls.hightlight}>для&nbsp;компаний любых</span>{' '}
            отраслей и&nbsp;сотрудников любого уровня: от линейных специалистов
            до топ-менеджеров
          </p>
        </div>
        <div className={stls.right}>
          <ImgCorporateClientsAnyIndustry />
          <p className={stls.rightP}>
            Мы проанализируем задачи вашего бизнеса и подберем курсы исходя из
            ваших целей и потребностей
          </p>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionCorporateClientsAnyIndustry
