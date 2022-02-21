type TypePageJournalTagPathsQuery = {
  readonly journalArticles:
    | {
        journal_category: {
          slug: string | null
        } | null
        journal_tag: {
          slug: string | null
        } | null
      }[]
    | null
}

export default TypePageJournalTagPathsQuery
