import React from 'react'
import "./TimeLine.css"
import UserStudyRecord from '../UserStudyRecord/UserStudyRecord'

function TimeLine() {
  return (
    <div className='TimeLine'>
      <UserStudyRecord/>
      <UserStudyRecord/>
      <UserStudyRecord/>
      <UserStudyRecord/>

    </div>
  )
}

export default TimeLine