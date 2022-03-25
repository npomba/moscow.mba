const ruCaseMonth = (qty: number) => {
  const num = qty % 10

  if (qty === 0) return 'месяцев'

  if (qty === 1) return 'месяц'

  if (qty > 1 && qty < 5) return 'месяца'

  if (qty >= 5 && qty < 20) return 'месяцев'

  if (qty > 20 && num === 0) return 'месяцев'

  if (qty > 20 && num === 1) return 'месяц'

  if (qty > 20 && num > 1 && num < 5) return 'месяца'

  if (qty > 20 && num >= 5) return 'месяцев'

  return ''
}

export default ruCaseMonth
