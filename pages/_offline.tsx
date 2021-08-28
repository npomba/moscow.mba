import contactData from '@/data/contactData'

const _offline = () => {
  const contact = contactData()
  return (
    <div>
      <p>
        Подключение к сети отсутствует. Пожалуйста, попробуйте позже или
        позвоните нам по номеру
        <a href={contact.ru.tels[0].href}>{contact.ru.tels[0].val}</a>
      </p>
    </div>
  )
}

export default _offline
