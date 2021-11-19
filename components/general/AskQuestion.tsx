import stls from '@/styles/components/general/AskQuestion.module.sass'
import { IconMessages } from '@/components/icons'

const AskQuestion = ({ handleClickedAskQuestion, stickyShown = false }) => {
  return (
    <div
      className={`${stls.container} ${
        stickyShown ? stls.stickyShown : stls.stickyHidden
      }`}>
      <div className={stls.messages} onClick={handleClickedAskQuestion}>
        <IconMessages />
      </div>
    </div>
  )
}

export default AskQuestion
