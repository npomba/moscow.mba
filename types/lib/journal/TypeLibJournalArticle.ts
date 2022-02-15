import { TypeLibPicture } from '@/types/index'

type TypeLibJournalArticle = {
  title: string | null
  slug: string | null
  journal_category: {
    title: string | null
    slug: string | null
  }
  journal_tag: {
    title: string | null
    slug: string | null
  }
  picture: TypeLibPicture | null
  shortDescription: string | null
  program?: {
    category: {
      slug: string | null
      type: string | null
      labelCases: {
        singular: string | null
      } | null
    } | null
    study_field: {
      slug: string | null
    }
    title: string | null
    slug: string | null
    discount: string | null
    whatWillYouLearn: {
      title: string | null
      string: string | null
    } | null
  } | null
  articleBody: any[]
}

export default TypeLibJournalArticle
