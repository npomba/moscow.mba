import { useEffect } from 'react'
import loadJs from 'loadjs'
import Accordion from '@/components/general/Accordion'
import stls from '@/styles/modules/LegalPage.module.sass'

const placeholderDiplomas = [
  {
    fileSrc: '/legaldocuments/doc-1.pdf',
    fileName: 'Диплом академии',
    pageNum: 1
  },
  {
    fileSrc: '/legaldocuments/doc-2.pdf',
    fileName: 'Диплом уст. образца',
    pageNum: 1
  },
  {
    fileSrc: '/legaldocuments/doc-3.pdf',
    fileName: 'Приложение к диплому',
    pageNum: 1
  },
  {
    fileSrc: '/legaldocuments/doc-4.pdf',
    fileName: 'Диплом Supplement',
    pageNum: 1
  }
]

const diplomasBasedOnProgram = [
  {
    programType: 'MBA Professional / Industry',
    diplomas: placeholderDiplomas
  },
  {
    programType: 'MBA Mini',
    diplomas: placeholderDiplomas
  },
  {
    programType: 'Профессия',
    diplomas: placeholderDiplomas
  },
  {
    programType: 'Курс',
    diplomas: placeholderDiplomas
  }
]

const OurDiplomasAndCertificates = () => {
  useEffect(() => {
    loadJs(['/assets/js/accordion.js'], {
      async: false
    })
  }, [])

  const ourDiplomasAndCertificatesClasses = [
    stls.legalSection,
    stls.diplomasAndCertificates
  ]

  return (
    <section className={ourDiplomasAndCertificatesClasses.join(' ')}>
      <h2 className={stls.subHeading}>Выдаваемые дипломы и сертификаты</h2>
      <p>
        Мы производим обучение на основании государственной лицензии №041221.
        После окончания обучения в Moscow Business Academy Вы получите диплом о
        профессиональной переподготовке установленного образца, диплом академии
        и международный диплом Supplement, которые можно добавить в портфолио и
        показать работодателю.
      </p>
      {diplomasBasedOnProgram.map(({ programType, diplomas }, idx) => (
        <Accordion
          key={idx}
          title={programType}
          content={diplomas}
          isPdf={true}
        />
      ))}
    </section>
  )
}

export default OurDiplomasAndCertificates
