import stls from '@/styles/components/sections/WhoItIsFor.module.sass'
import classNames from 'classnames'
import { useAt } from '@/helpers/index'
import WhoItIsForItem from '@/components/general/WhoItIsForItem'
import Wrapper from '../layout/Wrapper'

const WhoItIsFor = ({ program }) => {
  const at = useAt()

  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <h2 className={stls.title}>
          {at.promo ? 'Форматы обучения' : 'Кому подойдет программа?'}
        </h2>
        <div
          className={classNames(stls.itemsContainer, {
            [stls.noBottomLine]: at.promo
          })}>
          {program.whoIsFor &&
            program.whoIsFor.map(({ name, description }, idx) => (
              <WhoItIsForItem
                key={name + idx}
                name={name}
                description={description}
                moduleIndex={idx}
              />
            ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default WhoItIsFor
