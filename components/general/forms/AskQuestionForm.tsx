import stls from '@/styles/components/general/forms/AskQuestionForm.module.sass'
import { useState } from 'react'
import AskQuestionFormStage from '@/components/general/forms/AskQuestionFormStage'
import { onSubmitForm } from '@/helpers/index'
import { IconClose } from '@/components/icons'

const AskQuestionForm = ({ handleAskQuestionFormClose }) => {
  const [formStage, setFormStage] = useState(0)
  const [howToContact, setHowToContact] = useState(null)

  const askQuestionFormClasses = [stls.container]

  if (formStage !== 0) askQuestionFormClasses.push(stls.noPadding)

  const chooseWayToContact = (wayToContact, stageStep, enteredQuestion) => {
    setFormStage(prevState => prevState + stageStep)
    setHowToContact({ ...wayToContact, question: enteredQuestion })
  }

  const chooseContactMethod = method => {
    setFormStage(prevState => prevState + 1)
    setHowToContact(prevState => ({ ...prevState, selectedMethod: method }))
  }

  const enterContactData = data => {
    setFormStage(prevState => prevState + 1)
    setHowToContact(prevState => ({ ...prevState, contactData: data }))
    onSubmitForm(data)
  }

  const goToPrevStage = stageStep =>
    setFormStage(prevState => prevState - stageStep)

  const formStages = [
    <AskQuestionFormStage
      key='selectWay'
      wayToContact={howToContact}
      handleUserClick={(selectedWayToContact, stageStep, enteredQuestion) =>
        chooseWayToContact(selectedWayToContact, stageStep, enteredQuestion)
      }
      handleUserGoingBack={goToPrevStage}
      selectWay
    />,
    <AskQuestionFormStage
      key='selectMethod'
      wayToContact={howToContact}
      handleUserClick={method => chooseContactMethod(method)}
      handleUserGoingBack={goToPrevStage}
      selectMethod
    />,
    <AskQuestionFormStage
      key='enterContactData'
      wayToContact={howToContact}
      handleUserClick={data => enterContactData(data)}
      handleUserGoingBack={goToPrevStage}
      enterContactData
    />,
    <AskQuestionFormStage
      key='formSubmitted'
      wayToContact={howToContact}
      handleUserClick={() => {}}
      handleUserGoingBack={() => {}}
      formSubmitted
    />
  ]

  return (
    <div className={askQuestionFormClasses.join(' ')}>
      <a className={stls.crossTop} onClick={handleAskQuestionFormClose}>
        <IconClose />
      </a>
      {formStages[formStage]}
    </div>
  )
}

export default AskQuestionForm
