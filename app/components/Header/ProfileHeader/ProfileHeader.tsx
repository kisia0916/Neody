import React from 'react'
import "./ProfileHeader.css"

function ProfileHeader() {
  return (
    <div className='ProfileHeader'>
        <button className='ProfileHeaderButtonLeft'>
            <img src='/Icons/left_fill (1).svg'/>
        </button>
        <span className='ProfileHeaderUserName'>プロフィール</span>
        <button className='ProfileHeaderButtonRight'>
            <img src='/Icons/pencil_2_fill.svg'/>
        </button>
    </div>
  )
}

export default ProfileHeader