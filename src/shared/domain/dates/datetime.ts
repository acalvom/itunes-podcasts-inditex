import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

export class Datetime {
  static toDate(dateString: string): Date {
    return dayjs(dateString).toDate()
  }

  static getDateFormatted(date: Date): string {
    return dayjs(date).format('DD/MM/YYYY')
  }

  static getLenghtfromMs(ms: number): string {
    const duration = dayjs.duration(ms)
    const isOverOneHour = duration.asHours() >= 1
    return duration.format(isOverOneHour ? 'H:mm' : 'mm:ss')
  }
}
