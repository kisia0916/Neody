"use client"
import React from 'react'
// import "./profile.css"
import UserStudyRecord from '@/app/components/UserStudyRecord/UserStudyRecord'

function page() {
  return (
    <div className='ProfilePage'>
        <div className='ProfileTop'>
            <div className='ProfileTopStatus'>
                <div className='ProfileIconWarp'>
                    <img src='/userIcon.jpg' className='ProfileIcon'/>
                </div>
                <div className='ProfileUserDataWrap'>
                    <div className='ProfileUserData'>
                        <span className='ProfileUserName'>fumi0916</span>
                        <span className='ProfileUserFriends'>25人のフレンド</span>
                        <div className='ProfileUserPoints'>
                            <div className='ProfileUserWeekPoint'>
                                <span className='ProfileUserWeekPointTitle'>今週</span><span className='ProfileUserWeekPointPoint'>1600pt</span>
                            </div>
                            <div className='ProfileUserWeekPoint2'>
                                <span className='ProfileUserWeekPointTitle'>累計</span><span className='ProfileUserWeekPointPoint'>1600pt</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ProfileTopInfoWarp'>
                <div className='ProfileTopInfo'>
                    <span className='ProfileTopProfileText'>数学を頑張っていきたいです</span>
                </div>
            </div>
        </div>
        <div className='ProfileContentSelector'>
            <div className='ProfileContentSelectorButton ProfileContentSelectorButtonSelected'>
                <span className='ProfileContentSelectorButtonText'>勉強記録</span>
            </div>
            <div className='ProfileContentSelectorButton ProfileContentSelectorButtonNone'>
                <span className='ProfileContentSelectorButtonText'>グラフ</span>
            </div>
        </div>
        <div className='ProfileUserRecords'>
            <UserStudyRecord/>
            <UserStudyRecord/>
            <UserStudyRecord/>
            <UserStudyRecord/>
        </div>
    </div>
  )
}

export default page