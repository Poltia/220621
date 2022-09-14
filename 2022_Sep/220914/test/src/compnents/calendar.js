import React from 'react'

const Calendar = (calendar) => {
    const {date, color} = calendar;
  return (
    <div className={color + ' dateDiv'}>
        {date}
    </div>
  )
}

export default Calendar