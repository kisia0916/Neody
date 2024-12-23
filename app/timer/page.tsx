import React from 'react'
import "./timer.css"
import TimerStopButton from '../components/TimerStopButton/TimerStopButton'

function Timer() {
  return (
    <div className='TimerPage'>
      <div className='TimerCenter'>
        <div className='TimerUserAbater'>
          <div className='TimerUserMess'>
            <span className='TimerUserMessText'>サクシード終わらんああああああああああああああああ</span>
          </div>
          <div className='TimerUserWarp'>
            <div className='TimerUserMessBottom'></div>
            <div className='TimerUserBorder'>
              <img src='/userIcon.jpg' className='TimerUserIcon'/>
            </div>
          </div>
          <div className='TimerNowStudyingSubjectWrap'>
            <div className='TimerNowStudyingSubject'>
              <span className='TimerNowStudyingSubjectText'>数学</span>
            </div>
          </div>
          <div className='TimerNowStudyingTimeWarp'>
            <div className='TimerNowStudyingTime'>
              <span className=''>00:24:00</span>
            </div>
          </div>
          <div className='TimerNowStudyingButtons'>
            <TimerStopButton/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer