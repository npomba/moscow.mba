import stls from '@/styles/components/layout/StickyBottomContainer.module.sass'
import { useState } from 'react'
import Overlay from '@/components/layout/Overlay'
import StickyBottom from '@/components/layout/StickyBottom'
import AskQuestion from '@/components/general/AskQuestion'
import AskQuestionForm from '@/components/general/forms/AskQuestionForm'

const StickyBottomContainer = () => {
  const [clickedAsk, setClickedAsk] = useState(false)
  const [isStickyBottomShown, setIsStickyBottomShown] = useState(false)
  const [stickyHasBeenClosed, setStickyHasBeenClosed] = useState(false)

  const containerClasses = [
    stls.container,
    isStickyBottomShown && !stickyHasBeenClosed
      ? stls.stickyShown
      : stls.stickyClosed
  ]

  const handleClickedAskQuestion = () => {
    setClickedAsk(true)
    setIsStickyBottomShown(false)
  }

  const handleAskQuestionFormClose = () => setClickedAsk(false)

  return (
    <div className={containerClasses.join(' ')}>
      {clickedAsk ? (
        <>
          <Overlay close={handleAskQuestionFormClose} />
          <AskQuestionForm
            handleAskQuestionFormClose={handleAskQuestionFormClose}
          />
        </>
      ) : (
        <AskQuestion
          handleClickedAskQuestion={handleClickedAskQuestion}
          stickyShown={isStickyBottomShown}
        />
      )}
      <StickyBottom
        openStickyModule={() => setIsStickyBottomShown(true)}
        hideStickyModule={() => setIsStickyBottomShown(false)}
        closeStickyModule={() => setStickyHasBeenClosed(true)}
        clickedAsk={clickedAsk}
      />
    </div>
  )
}

export default StickyBottomContainer
