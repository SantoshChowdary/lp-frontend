import React from 'react'
import HorizontalCalendar from '../HorizontalCalendar'
import ScheduleContent from '../ScheduleContent'
import './index.css'

const MainSchedule = () => {
  
  return (
    <div>
        <div className="schedule-first-section">
            <div>
                <h1 className='your-schedule'>Your Schedule</h1>
                <span className='date-element'>{new Date().toLocaleDateString("en-US", {weekday : "short"})}, {new Date().toLocaleDateString("en-US", {
                  year: "numeric", month: "short", day: "numeric"
                })}</span>
            </div>
            <div className='main-schedule-content-section'>
              <HorizontalCalendar />
              <ScheduleContent />
            </div>
        </div>
    </div>
  )
}

export default MainSchedule