import "./AllPoint.css"
import React from 'react'

function AllPoint(props:{type:"L"|"S"}) {
  return (
    <>
    {props.type === "S"?<div className='AllPointS'>
          <span className='AllPointTextS'>今週:1600pt</span>
      </div>:<></>}
    {props.type === "L"?
      <div className='AllPointL'>
          <span className='AllPointTitleL'>累計</span><span className='AllPointPointL'>1600pt</span>
      </div>:<></>}
  </>
  )
}

export default AllPoint