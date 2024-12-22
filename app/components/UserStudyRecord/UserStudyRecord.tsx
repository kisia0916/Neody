import React from 'react'
import "./UserStudyRecord.css"
import TimeRecord from './TimeRecord/TimeRecord'

function UserStudyRecord() {
  return (
    <div className='UserStudyRecord'>
      <div className='UserStudyRecordTop'>
        <img src='/userIcon.jpg' className='UserStudyRecordUserIcon'/>
        <p className='UserStudyRecordUserName'>fumi0916</p>
        <p className='UserStudyRecordWithText'>with</p>
        <div className='UserStudyRecordWithUsers'>
            <img src='/Abater/PXL_20240907_072000740.jpg' className='UserStudyRecordWithUserIcon WithNo1'/>
            <img src='/Abater/PXL_20241113_054457814.PORTRAIT.jpg' className='UserStudyRecordWithUserIcon WithNo2'/>
            <img src='/Abater/PXL_20241115_003055692.LONG_EXPOSURE-01.COVER.jpg' className='UserStudyRecordWithUserIcon WithNo3'/>
          <div className='UserStudyRecordWithUsersEndMark WithNo4'>
            <span className='UserStudyRecordWithUsersEndMarkText'>3＋</span>
          </div>
        </div>
      </div>
      <div className='UserStudyRecordCenter'>
        <p className='UserStudyRecordMessage'>サクシード終わらん</p>
        <TimeRecord/>
      </div>
      <div className='UserStudyRecordBottom'>
        <span className='UserStudyRecordDate'>12月20日</span>
          <img src="/Icons/share_2_fill.svg" className='UserStudyRecordShare'/>
      </div>
    </div>
  )
}

export default UserStudyRecord