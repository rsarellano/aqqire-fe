export default function (date: Date) {
  if (!date) {
    return
  }

  const newDate = new Date(date)
  console.log(newDate)
  const year = newDate.getUTCFullYear()
  console.log(year)
  const month = newDate.getUTCMonth()
  console.log(month)
  const day = newDate.getUTCDay()
  console.log(day)

  return `${year}-${month}-${day} 00:00:00`
}
