import {
  TypeClassNames,
  TypeChildren,
  TypeBtnTag,
  TypeBtnType,
  TypeBtnHref,
  TypeGeneralOnClick,
  TypeBtnDisabled,
  TypeGeneralAriaLabel,
  TypeBtnBetaVariant
} from '@/types/index'
import { HTMLAttributeAnchorTarget } from 'react'

type TypeBtn = TypeClassNames &
  TypeChildren &
  TypeBtnTag &
  TypeBtnType &
  TypeBtnHref & {
    target?: HTMLAttributeAnchorTarget
  } & TypeGeneralOnClick &
  TypeBtnDisabled &
  TypeGeneralAriaLabel &
  TypeBtnBetaVariant

export default TypeBtn
