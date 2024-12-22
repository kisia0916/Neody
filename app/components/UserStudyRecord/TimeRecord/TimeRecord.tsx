import React from 'react'
import "./TimeRecord.css"

function TimeRecord() {
  return (
    <div className='TimeRecord'>
        <img src="/Icons/stopwatch_line (1).svg" className='TimeRecordIcon'/>
        <div className='TimeRecordInfo'>
            <p>数学</p>
            <p>3時間45分</p>
        </div>
    </div>
  )
}

export default TimeRecord