import stls from '@/styles/components/sections/WhoItIsFor.module.sass'
import cn from 'classnames'
import { useAt } from '@/helpers/index'
import { WhoItIsForItem } from '@/components/general'
import { Wrapper } from '@/components/layout'

const WhoItIsFor = ({ program }) => {
  const at = useAt()

  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <h2 className={stls.title}>
          {at.promo ? 'Форматы обучения' : 'Кому подойдет программа?'}
        </h2>
        <div
          className={cn(stls.itemsContainer, {
            [stls.noBottomLine]: at.promo
          })}>
          {program?.whoIsFor &&
            program?.whoIsFor.map(({ name, description }, idx) => (
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
