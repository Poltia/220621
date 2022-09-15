import React from 'react'

const Calendar = (calendar) => {
    const {date, color, day} = calendar;
  return (
    <div className={color + ' dateDiv ' + day}>
        {date}
    </div>
  )
}

export default Calendar