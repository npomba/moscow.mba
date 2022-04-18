import {
  TypeClassNames,
  TypeChildren,
  TypeBtnTagWithLink,
  TypeBtnType,
  TypeBtnHref,
  TypeGeneralOnClick,
  TypeBtnDisabled,
  TypeGeneralAriaLabel,
  TypeBtnAlphaVariant
} from '@/types/index'
import { HTMLAttributeAnchorTarget } from 'react'

type TypeBtn = TypeClassNames &
  TypeChildren &
  TypeBtnTagWithLink &
  TypeBtnType &
  TypeBtnHref &
  TypeGeneralOnClick &
  TypeBtnDisabled &
  TypeGeneralAriaLabel &
  TypeBtnAlphaVariant & {
    target?: HTMLAttributeAnchorTarget
    scroll?: boolean
  }

export default TypeBtn
