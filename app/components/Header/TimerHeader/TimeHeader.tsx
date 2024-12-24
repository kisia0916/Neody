import React from 'react'
import "./TimerHeader.css"

function TimeHeader() {
  return (
    <div className='TimerHeaderMain'>
        <span className='TimerHeaderWithText'>with</span>
        <div className='TimerHeaderWithWithUsers'>
            <img src='/Abater/PXL_20240907_072000740.jpg' className='TimerHeaderWithWithUserIcon WithNo1'/>
            <img src='/Abater/PXL_20241113_054457814.PORTRAIT.jpg' className='TimerHeaderWithWithUserIcon WithNo2'/>
            <img src='/Abater/PXL_20241115_003055692.LONG_EXPOSURE-01.COVER.jpg' className='TimerHeaderWithWithUserIcon WithNo3'/>
        <div className='TimerHeaderWithWithUsersEndMark WithNo4'>
            <span className='TimerHeaderWithWithUsersEndMarkText'>3＋</span>
        </div>
        </div>
    </div>
  )
}

export default TimeHeader