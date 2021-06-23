import { Document, Page, pdfjs } from 'react-pdf'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker
import Loader from './Loader'
import SVGClose from '../svgs/SVGClose'

const PopupPdf = ({ closePdfPopup, pdfFile, pageNum }) => {
  return (
    <div className='popup-modal popup-pdf mfp-with-anim'>
      <div className='popup-content'>
        <div className='popup-pdf-content'>
          <Document
            file={pdfFile}
            loading={() => (
              <Loader closePopUp={closePdfPopup} loadingPopupContent />
            )}>
            <Page height={850} pageNumber={pageNum} />
          </Document>
        </div>
      </div>
      <button className='mfp-close' type='button' onClick={closePdfPopup}>
        <SVGClose />
      </button>
    </div>
  )
}

export default PopupPdf
