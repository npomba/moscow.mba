// credit: https://stackoverflow.com/questions/16637051/adding-space-between-numbers

const toNumberWithSpaces = (num: number) => {
  return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export default toNumberWithSpaces
