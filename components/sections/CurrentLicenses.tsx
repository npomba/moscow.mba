import PdfDocument from '@/components/general/PdfDocument'
import CheckLicenses from '@/components/sections/CheckLicenses'
import stls from '@/styles/modules/LegalPage.module.sass'

const CurrentLicenses = () => {
  const currentLicensesClasses = [stls.legalSection, stls.currentLicenses]

  return (
    <section className={currentLicensesClasses.join(' ')}>
      <h2 className={stls.subHeading}>Действующие лицензии</h2>
      <p>
        Лицензия Департамента образования города Москвы на осуществление
        образовательной деятельности:
      </p>
      <div className={stls.pdfContainer}>
        <PdfDocument
          fileSrc='/legaldocuments/doc-1.pdf'
          fileName='Лицензия (стр. 1)'
          pageNum={1}
        />
        <PdfDocument
          fileSrc='/legaldocuments/doc-1.pdf'
          fileName='Лицензия (стр. 2)'
          pageNum={2}
        />
        <PdfDocument
          fileSrc='/legaldocuments/doc-2.pdf'
          fileName='Положение № 1.1'
          pageNum={1}
        />
      </div>
      <CheckLicenses />
    </section>
  )
}

export default CurrentLicenses
