import { TypeRoute, TypeAnchor } from '@/types/index'

type TypeBtnHref = {
  readonly href?: TypeRoute | TypeAnchor | `http${string}`
}

export default TypeBtnHref
