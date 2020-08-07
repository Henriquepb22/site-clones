import { isBefore, isSameDay, addDays } from 'date-fns'
import { HeatmapValue } from '../ts/types'

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
    const values: HeatmapValue[] = []

    let currentDate = startDate
    while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
        const count = Math.random() * 4

        values.push({ date: currentDate, count: Math.round(count) })

        currentDate = addDays(currentDate, 1)
    }

    return values
}

export default generateHeatmapValues
