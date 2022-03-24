const ruCaseProgram = (qty: number) => {
  const num = qty % 10

  if (qty === 0) return 'программ'

  if (qty === 1) return 'программа'

  if (qty > 1 && qty < 5) return 'программы'

  if (qty >= 5 && qty < 20) return 'программ'

  if (qty > 20 && num === 0) return 'программ'

  if (qty > 20 && num === 1) return 'программа'

  if (qty > 20 && num > 1 && num < 5) return 'программы'

  if (qty > 20 && num >= 5) return 'программ'

  return ''
}

export default ruCaseProgram
