import { formatISO } from 'date-fns'

/**
 * Formats a date to ISO string with timezone offset
 * @param date - Date object, string, number (timestamp), null, or undefined
 * @returns ISO string in format "YYYY-MM-DDThh:mm:ss-03:00" (with appropriate timezone offset)
 */
export const formatDateToISOString = (
  date?: Date | string | number | null
): string => {
  // Use current date if date is null, undefined, or invalid
  const dateToFormat = date || new Date()

  try {
    let dateObj: Date

    // Handle different input types
    if (typeof dateToFormat === 'string' || typeof dateToFormat === 'number') {
      dateObj = new Date(dateToFormat)
    } else {
      dateObj = dateToFormat
    }

    // Validate the date
    if (isNaN(dateObj.getTime())) {
      // If invalid, use current date
      dateObj = new Date()
    }

    // Format to ISO string with timezone offset
    return formatISO(dateObj)
  } catch (error) {
    console.error('Error formatting date to ISO string:', error)
    // Fallback to current date if any error occurs
    return formatISO(new Date())
  }
}

/**
 * Formats a date to Brazilian format (dd/mm/yyyy)
 * @param date - Date object, string, number (timestamp), null, or undefined
 * @returns Brazilian formatted date string
 */
export const formatDateTime = (
  date?: Date | string | number | null
): string => {
  const dateToFormat = date || new Date()
  const dateObj = new Date(dateToFormat)

  if (isNaN(dateObj.getTime())) {
    return new Date().toLocaleDateString('pt-BR')
  }

  return dateObj.toLocaleDateString('pt-BR')
}
