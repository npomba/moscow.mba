import { useAt } from '@/hooks/index'

const Until = ({ preposition = true, executive = false }) => {
  const at = useAt()
  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  let currentMonth = currentDate.getMonth()
  const months = [
    at.en ? 'января' : 'January',
    at.en ? 'февраля' : 'February',
    at.en ? 'марта' : 'March',
    at.en ? 'апреля' : 'April',
    at.en ? 'Мая' : 'May',
    at.en ? 'июня' : 'June',
    at.en ? 'июля' : 'July',
    at.en ? 'августа' : 'August',
    at.en ? 'сентября' : 'September',
    at.en ? 'октября' : 'October',
    at.en ? 'ноября' : 'November',
    at.en ? 'декабря' : 'December'
  ]
  if (executive)
    currentMonth =
      currentMonth + 7 > 11 ? currentMonth + 7 - 11 : currentMonth + 7

  return (
    <>
      {preposition && (at.en ? 'until' : 'до')}
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
