import stls from '@/styles/components/sections/WhoItIsFor.module.sass'
import useAt from '@/components/hooks/useAt'
import WhoItIsForItem from '@/components/general/WhoItIsForItem'

const WhoItIsFor = ({ data: { suitsForTitle, suitsForDesc, title } }) => {
  const columnsContent = []

  suitsForTitle.forEach((title, idx) => {
    columnsContent.push({ title, description: suitsForDesc[idx] })
  })

  return (
    <section className={stls.container}>
      <h2 className={stls.title}>
        {title ? title : 'Кому подойдет программа?'}
      </h2>
      <div className={stls.itemsContainer}>
        {columnsContent.map(({ title, description }, idx) => (
          <WhoItIsForItem
            key={title + idx}
            title={title}
            description={description}
            moduleIndex={idx}
          />
        ))}
      </div>
    </section>
  )
}

export default WhoItIsFor
