type TypePageJournalCategoryPathsQuery = {
  readonly journalArticles:
    | {
        journal_category: {
          slug: string | null
        } | null
      }[]
    | null
}

export default TypePageJournalCategoryPathsQuery
