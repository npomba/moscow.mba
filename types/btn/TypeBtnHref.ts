import { TypeGeneralRoute, TypeGeneralAnchor } from '@/types/index'

type TypeBtnHref = {
  readonly href?: TypeGeneralRoute | TypeGeneralAnchor | `http${string}`
}

export default TypeBtnHref
