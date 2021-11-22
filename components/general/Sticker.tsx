import stls from '@/styles/components/general/Sticker.module.sass'

const Sticker = ({
  type = 'short',
  clr = 'red',
  title = '',
  listItems = []
}) => {
  if (title && listItems.length !== 0) {
    return (
      <div
        className={`${stls.sheet}  
        ${clr === 'dark' ? stls.dark : clr === 'red' ? stls.red : stls.light} ${
          type === 'short' ? stls.short : stls.long
        }`}>
        <h4 className={stls.title}>{title}</h4>
        <div>
          <ul className={stls.list}>
            {listItems.map((item, idx) => (
              <li
                key={idx}
                className={`${stls.item} ${
                  listItems.length > 1 ? stls.many : ''
                }`}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Sticker
