type TypePageJournalArticlePathsQuery = {
  readonly journalArticles:
    | {
        journal_tag: {
          slug: string | null
        } | null
        journal_category: {
          slug: string | null
        } | null
        slug: string | null
      }[]
    | null
}

export default TypePageJournalArticlePathsQuery
