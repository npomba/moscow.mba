import stls from '@/styles/components/popups/PopupPdf.module.sass'
import { Document, Page, pdfjs } from 'react-pdf'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker
import { PopupLoader } from '@/components/popups'
import { IconClose } from '@/components/icons'

const PopupPdf = ({ closePdfPopup, pdfFile, pageNum, landscape }) => {
  const pdfPageClasses = [stls.pdfPage]

  if (landscape) pdfPageClasses.push(stls.pdfModalLandscape)
  else pdfPageClasses.push(stls.pdfModalPortrait)

  return (
    <div className='popup-modal popup-pdf mfp-with-anim'>
      <div className='popup-content pdf-popup-content'>
        <Document
          file={pdfFile}
          loading={() => (
            <PopupLoader closePopUp={closePdfPopup} loadingPopupContent />
          )}>
          <Page
            className={pdfPageClasses.join(' ')}
            height={800}
            pageNumber={pageNum}
          />
        </Document>
      </div>
      <button className='pdf-close' type='button' onClick={closePdfPopup}>
        <IconClose />
      </button>
    </div>
  )
}

export default PopupPdf
