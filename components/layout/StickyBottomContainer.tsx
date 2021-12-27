import stls from '@/styles/components/layout/StickyBottomContainer.module.sass'
import { useState } from 'react'
import { Overlay, StickyBottom } from '@/components/layout'
import { AskQuestion } from '@/components/general'
import { AskQuestionForm } from '@/components/forms'

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
          <Overlay handleAskQuestionFormClose={handleAskQuestionFormClose} />
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
