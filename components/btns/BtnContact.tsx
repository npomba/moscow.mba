import stls from '@/styles/components/btns/BtnContact.module.sass'
import cn from 'classnames'

const BtnContact = ({ wayToContact, chooseWayToContact }) => {
  const {
    name,
    contactMethods,
    svg,
    stageStep,
    validationRules,
    contactButtonClass
  } = wayToContact

  const selectedWayToContact = {
    name,
    contactMethods,
    stageStep,
    validationRules,
    selectedMethod: null
  }

  return (
    <button
      onClick={() => chooseWayToContact(selectedWayToContact)}
      className={cn(stls.container, stls[contactButtonClass])}>
      {svg}
    </button>
  )
}

export default BtnContact
