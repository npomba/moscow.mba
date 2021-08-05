export const getStringDeclensionNumber = num => {
  const value = Math.abs(num) % 100
  const number = num % 10

  if (value > 10 && value < 20) return 2
  if (number > 1 && number < 5) return 1
  if (number === 1) return 0

  return 2
}

export default getStringDeclensionNumber
