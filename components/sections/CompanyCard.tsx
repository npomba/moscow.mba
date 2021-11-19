import stls from '@/styles/components/sections/CompanyCard.module.sass'
import { contactData } from '@/config/index'

const CompanyCard = () => {
  const contactInfo = contactData()
  const companyCardClasses = [stls.legalSection, stls.companyCard]

  return (
    <section className={companyCardClasses.join(' ')}>
      <h2 className={stls.subHeading}>Основные сведения</h2>
      <p className={stls.companyDetailsTitle}>
        Полное наименование организации
      </p>
      <p>
        АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ДОПОЛНИТЕЛЬНОГО ПРОФЕССИОНАЛЬНОГО
        ОБРАЗОВАНИЯ «МОСКОВСКАЯ БИЗНЕС АКАДЕМИЯ»
      </p>

      <p className={stls.companyDetailsTitle}>
        Сокращенное наименование образовательной организации
      </p>
      <p>АНО ДПО «МБА»</p>

      <p className={stls.companyDetailsTitle}>
        Наименование образовательной организации на английском языке
      </p>
      <p>MOSCOW BUSINESS ACADEMY</p>

      <p className={stls.companyDetailsTitle}>
        Руководитель образовательной организации
      </p>
      <p>Столяренко Владимир Витальевич</p>

      <p className={stls.companyDetailsTitle}>
        Информация о месте нахождения образовательной организации
      </p>
      <p>
        Юридический адрес: 115114, Москва, набережная Дербеневская, д. 11 <br />
        Фактический адрес: 115114, Москва, набережная Дербеневская, д. 11
      </p>

      <p className={stls.companyDetailsTitle}>
        Информация о режиме и графике работы образовательной организации
      </p>
      <p>пн-пт с 09:00 до 20:00</p>

      <p className={stls.companyDetailsTitle}>
        Информация о контактных телефонах образовательной организации, об
        адресах электронной почты образовательной организации
      </p>
      <p>Контактный телефон:{contactInfo.ru.tels[0].val}</p>
      <p>Адрес электронной почты: {contactInfo.ru.email.val}</p>

      <p className={stls.companyDetailsTitle}>
        Информация о местах осуществления образовательной деятельности, в том
        числе не указанных в приложении к лицензии (реестре лицензий) на
        осуществление образовательной деятельности в соответствии с частью 4
        статьи 91 Федерального закона от 29.12.2012 №273-ФЗ &quot;Об образовании
        в Российской Федерации&quot;
      </p>
      <p>Адрес: 115114, Москва, набережная Дербеневская, д.11</p>
    </section>
  )
}

export default CompanyCard
