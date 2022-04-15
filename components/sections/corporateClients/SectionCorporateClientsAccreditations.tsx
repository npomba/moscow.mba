import stls from '@/styles/components/sections/corporateClients/SectionCorporateClientsAccreditations.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import {
  ImgCorporateClientEcicelLogo,
  ImgCorporateClientLicenseLogo,
  ImgCorporateClientRaboLogo
} from '@/components/images'

type SectionCorporateClientsAccreditationsProps = TypeClassNames

const SectionCorporateClientsAccreditations = ({
  classNames
}: SectionCorporateClientsAccreditationsProps) => {
  const list = [
    {
      img: (
        <ImgCorporateClientRaboLogo
          classNames={[stls.img, stls.ImgCorporateClientRaboLogo]}
        />
      ),
      title: 'Членство в РАБО (Российская Ассоциация Бизнес-образования)'
    },
    {
      img: (
        <ImgCorporateClientEcicelLogo
          classNames={[stls.img, stls.ImgCorporateClientEcicelLogo]}
        />
      ),
      title: 'Европейская аккредитации Ecicel'
    },
    {
      img: (
        <ImgCorporateClientLicenseLogo
          classNames={[stls.img, stls.ImgCorporateClientLicenseLogo]}
        />
      ),
      title: 'Государственная лицензия на образовательную деятельность №041221'
    }
  ]
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper column classNames={[stls.wrapper]}>
        <h2 className={stls.title}>Акредитации и лицензии</h2>
        <p className={stls.underTitle}>
          Академия имеет все необходимые лицензии и аккредитации для
          качественного обучения специалистов международного уровня
        </p>
        <ul className={stls.list}>
          {list.map((item, idx) => (
            <li key={`${item.title}-${idx}`} className={stls.listItem}>
              {item.img}
              <p className={stls.listItemTitle}>{item.title}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionCorporateClientsAccreditations
