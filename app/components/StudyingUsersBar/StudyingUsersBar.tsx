import React from 'react'
import StudyingUserStatus from './StudyingUserStatus/StudyingUserStatus'
import "./StudyingUsersBar.css"

function StudyingUsersBar() {
  return (
    <div className='StudyingUsersBar'>
        <div className='StudyingUserBarWrap'>
            <StudyingUserStatus/>
            <StudyingUserStatus/>
            <StudyingUserStatus/>
        </div>
    </div>
  )
}

export default StudyingUsersBar