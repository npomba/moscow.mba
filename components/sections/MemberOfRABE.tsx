import PdfDocument from '@/components/general/PdfDocument'
import stls from '@/styles/modules/LegalPage.module.sass'

const MemberOfRABE = () => {
  const memberOfRABEClasses = [stls.legalSection, stls.memberOfRABE]

  return (
    <section className={memberOfRABEClasses.join(' ')}>
      <div className={stls.descRABE}>
        <h2 className={stls.subHeading}>Членство в РАБО</h2>
        <p>
          Moscow Business Academy является членом Российской Ассоциации
          Бизнес-образования, что подтвеждает высокий уровень образовательных
          программ.
        </p>
        <p>
          В России членство РАБО имеют ограниченное количество организаций,
          которые соответствуют требованиям качества образовательных программ.
        </p>
        <p>
          В настоящий момент за РАБО закрепился статус признанного лидера,
          инициатора и координатора программ подготовки кадров для
          предпринимательства и бизнеса.
        </p>
      </div>
      <PdfDocument
        fileSrc='/legaldocuments/doc-25.pdf'
        fileName='Свидетельство РАБО'
        pageNum={1}
      />
    </section>
  )
}

export default MemberOfRABE
