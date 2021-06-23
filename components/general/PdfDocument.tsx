import { Document, Page, pdfjs } from 'react-pdf'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker
import Popup from 'reactjs-popup'
import PdfPopup from '@/components/popups/PdfPopup'
import SVGPaperCorner from '@/components/svgs/SVGPaperCorner'
import stls from '@/styles/modules/LegalPage.module.sass'

const PdfDocument = ({ fileSrc, fileName, pageNum }) => {
  return (
    <Document className={stls.pdfDocument} file={fileSrc}>
      <Page className={stls.pdfPage} width={320} pageNumber={pageNum} />
      <Popup
        trigger={
          <div className={`${stls.pdfDocumentLinkContainer}`}>
            <SVGPaperCorner fill='#000' />
            <a>{fileName}</a>
          </div>
        }
        modal
        nested>
        {close => (
          <PdfPopup closePdfPopup={close} pdfFile={fileSrc} pageNum={pageNum} />
        )}
      </Popup>
    </Document>
  )
}

export default PdfDocument
