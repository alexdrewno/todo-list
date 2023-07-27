export function getDaysBetweenDates(date1: Date, date2: Date) {
    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24

    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date1.getTime() - date2.getTime())

    // Convert back to days and return
    return Math.floor(differenceMs / ONE_DAY)
}
