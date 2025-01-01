//server component
import React from 'react'
import "./profile.css"
import UserStudyRecord from '@/app/components/UserStudyRecord/UserStudyRecord'
import UserStudyList from '@/app/components/UserStudyRecord/UserStudyRevordList/UserStudyList'
import WeekPoint from '@/app/components/PointViewer/WeekPoint/WeekPoint'
import AllPoint from '@/app/components/PointViewer/AllPoint/AllPoint'
import { auth } from '@/auth'

async function page() {

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
                            <WeekPoint type='L'/>
                            <AllPoint type='L'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ProfileTopInfoWarp'>
                <div className='ProfileTopInfo'>
                    <p className='ProfileTopProfileText'>@kisia0012</p>
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
        <UserStudyList/>
    </div>
  )
}

export default page