export const convertDate = (dateString: any) => {
  const [day, month, year] = dateString.split("/")

  const date = new Date(`${year}-${month}-${day}`)

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]

  return `${day} ${monthNames[date.getMonth()]} ${year}`
}

export const convertDetails1Date = (dateString: string): string => {
  const [day, month, year] = dateString.split("/")

  const date = new Date(`${year}-${month}-${day}`)

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  const getDaySuffix = (day: number): string => {
    if (day > 3 && day < 21) return "th"
    switch (day % 10) {
      case 1:
        return "st"
      case 2:
        return "nd"
      case 3:
        return "rd"
      default:
        return "th"
    }
  }

  const dayNumber = parseInt(day, 10)
  const daySuffix = getDaySuffix(dayNumber)

  return `${dayNumber}${daySuffix} ${monthNames[date.getMonth()]}, ${year}`
}

export const convertDetails2Date = (dateString: string): string => {
  const [day, month, year] = dateString.split("/")

  const date = new Date(`${year}-${month}-${day}`)

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  const formattedDay = day.padStart(2, "0")

  return `${monthNames[date.getMonth()]} ${formattedDay}, ${year}`
}

export function formatEventDate(startDate: string, endDate: string): string {
  const start = new Date(startDate)
  const end = new Date(endDate)

  const addOrdinalSuffix = (day: number): string => {
    if (day > 3 && day < 21) return `${day}th`
    switch (day % 10) {
      case 1: return `${day}st`
      case 2: return `${day}nd`
      case 3: return `${day}rd`
      default: return `${day}th`
    }
  }

  const formatDate = (date: Date): string => {
    const day = addOrdinalSuffix(date.getDate())
    const month = date.toLocaleString('en-GB', { month: 'long' })
    const year = date.getFullYear()
    return `${day} ${month}, ${year}`
  }

  const startFormatted = formatDate(start)
  const endFormatted = formatDate(end)

  if (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth()) {
    return `${addOrdinalSuffix(start.getDate())} - ${addOrdinalSuffix(end.getDate())} ${start.toLocaleString('en-GB', { month: 'long' })}, ${start.getFullYear()}`
  } else {
    return `${startFormatted} - ${endFormatted}`
  }
}
