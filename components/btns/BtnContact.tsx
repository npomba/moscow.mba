import stls from '@/styles/components/btns/BtnContact.module.sass'
import classNames from 'classnames'

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
      className={classNames(stls.container, stls[contactButtonClass])}>
      {svg}
    </button>
  )
}

export default BtnContact
