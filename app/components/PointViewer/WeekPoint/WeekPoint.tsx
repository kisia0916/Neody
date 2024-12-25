//server component
import "./WeekPoint.css"
import React from "react"

function WeekPoint(props:{type:"L"|"S"}) {
  return (
    <>
      {props.type === "S"?<div className='WeekPointS'>
            <span className='WeekPointTextS'>今週:1600pt</span>
        </div>:<></>}
      {props.type === "L"?
        <div className='WeekPointL'>
            <span className='WeekPointTitleL'>今週</span><span className='WeekPointPointL'>1600pt</span>
        </div>:<></>}
    </>
  )
}

export default WeekPoint