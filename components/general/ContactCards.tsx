import stls from '@/styles/components/general/ContactCards.module.sass'
import { CardContact } from '@/components/cards'
import { contactData } from '@/config/index'

const ContactCards = () => {
  const contactInfo = contactData()
  return (
    <div className={stls.locations}>
      <div className={stls.row}>
        <CardContact
          city={contactInfo.ru.address.city}
          address={contactInfo.ru.address.street}
          numbers={contactInfo.ru.tels}
          email={contactInfo.ru.email.val}
        />
        <CardContact
          city={contactInfo.kz[0].address.city}
          address={contactInfo.kz[0].address.street}
          numbers={contactInfo.kz[0].tels}
          email={contactInfo.kz[0].email.val}
        />
        <CardContact
          city={contactInfo.us.address.city}
          address={contactInfo.us.address.street}
          numbers={contactInfo.us.tels}
          email={contactInfo.us.email.val}
          numNonClickable
        />
        <CardContact
          city={contactInfo.uz.address.city}
          address={contactInfo.uz.address.street}
          numbers={contactInfo.uz.tels}
          email={contactInfo.uz.email.val}
        />
        <CardContact
          city={contactInfo.kz[1].address.city}
          address={contactInfo.kz[1].address.street}
          numbers={contactInfo.kz[1].tels}
          email={contactInfo.kz[1].email.val}
        />
        <CardContact
          city={contactInfo.de.address.city}
          address={contactInfo.de.address.street}
          numbers={contactInfo.de.tels}
          email={contactInfo.de.email.val}
          numNonClickable
        />
      </div>
      <div className={stls.row}></div>
    </div>
  )
}

export default ContactCards
