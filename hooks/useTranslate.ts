import { useRouter } from 'next/router'

type TypeUseTranslate = {
  en: string
  def: string
}

const useTranslate = ({ en, def }: TypeUseTranslate) => {
  const router = useRouter()

  return def
}

export default useTranslate
