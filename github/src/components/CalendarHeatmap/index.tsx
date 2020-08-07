import React from 'react'
import Heatmap from 'react-calendar-heatmap'
import { subYears } from 'date-fns'

import generateHeatmapValues from '../../utils/generateHeatmap'
import { HeatmapValue } from '../../ts/types'
import * as S from './styles'

const CalendarHeatmap: React.FC = () => {
    const endDate = new Date()
    const startDate = subYears(endDate, 1)

    return (
        <>
            <S.CalendarHeading>
                Random Calendar Heatmap(not actual data)
            </S.CalendarHeading>
            <S.CalendarWrapper>
                <div className="wrapper">
                    <Heatmap
                        startDate={startDate}
                        endDate={endDate}
                        values={generateHeatmapValues(startDate, endDate)}
                        gutterSize={3.5}
                        classForValue={(item: HeatmapValue) => {
                            let clampedValue = 0

                            if (item !== null) {
                                clampedValue = Math.max(item.count, 0)
                                clampedValue = Math.min(item.count, 4)
                            }

                            return `scale-${clampedValue}`
                        }}
                        showWeekdayLabels
                    />
                </div>
                <span>Random calendar do not represent real data</span>
            </S.CalendarWrapper>
        </>
    )
}

export default CalendarHeatmap
