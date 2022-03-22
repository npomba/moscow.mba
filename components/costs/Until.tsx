import langMenu from '@/data/translation/menu'
import langMonths from '@/data/translation/months'
import { SetString } from '@/helpers/index'
import { useTranslate } from '@/hooks/index'

const Until = ({ preposition = true, executive = false }) => {
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  let currentMonth = currentDate.getMonth()
  const months = [
    SetString(langMonths.january),
    SetString(langMonths.february),
    SetString(langMonths.march),
    SetString(langMonths.april),
    SetString(langMonths.may),
    SetString(langMonths.june),
    SetString(langMonths.july),
    SetString(langMonths.august),
    SetString(langMonths.september),
    SetString(langMonths.october),
    SetString(langMonths.november),
    SetString(langMonths.december)
  ]
  if (executive)
    currentMonth =
      currentMonth + 7 > 11 ? currentMonth + 7 - 11 : currentMonth + 7

  const prepositionStatic = useTranslate({ en: '', def: '' })

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
