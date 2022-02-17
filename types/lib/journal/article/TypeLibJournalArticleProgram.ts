import { TypeLibTypename } from '@/types/index'

type TypeLibJournalArticleProgram = {
  __typename: TypeLibTypename
  category: {
    slug: string | null
    type: string | null
    labelCases: {
      singular: string | null
    } | null
  } | null
  title: string | null
  slug: string | null
  discount: string | null
  whatWillYouLearn: {
    title: string | null
    string: string | null
  } | null
}

export default TypeLibJournalArticleProgram
