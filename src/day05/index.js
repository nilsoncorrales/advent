/**
 * It takes a date and returns the number of days until Christmas
 * @param date - the date you want to calculate the days to Christmas
 * @returns The number of days until Christmas.
 */
export default function daysToXmas (date) {
  const dateStart = new Date('Dec 25, 2021')
  const dateEnd = date.toLocaleDateString('zh-TW')
  const newDateEnd = new Date(dateEnd)
  const substract = dateStart.getTime() - newDateEnd.getTime()
  const finalDate = substract / (1000 * 60 * 60 * 24)
  return finalDate
}
