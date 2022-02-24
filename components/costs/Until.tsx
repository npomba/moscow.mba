import langMenu from '@/data/translation/menu'
import { months } from '@/data/index'
import { SetString } from '@/helpers/index'

const Until = ({ preposition = true, executive = false }) => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  let currentMonth = currentDate.getMonth()
  const monthsArr = [
    SetString(months.january),
    SetString(months.february),
    SetString(months.march),
    SetString(months.may),
    SetString(months.june),
    SetString(months.july),
    SetString(months.august),
    SetString(months.september),
    SetString(months.october),
    SetString(months.november),
    SetString(months.december)
  ]
  if (executive)
    currentMonth =
      currentMonth + 7 > 11 ? currentMonth + 7 - 11 : currentMonth + 7

  return (
    <>
      {preposition && SetString(langMenu.discountUntil) + ' '}
      {currentDay < 20 ? '20' : '5'}{' '}
      {(() => {
        let output
        if (currentDay < 20) {
          output = months[currentMonth]
        } else {
          currentMonth === 11
            ? (output = months[0])
            : (output = months[currentMonth + 1])
        }
        return output
      })()}
    </>
  )
}

export default Until
