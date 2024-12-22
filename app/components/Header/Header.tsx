import React from 'react'
import "./Header.css"
import WeekPoint from '../WeekPoint/WeekPoint'

function Header() {
  return (
    <div className='headerMain'>
        <div className='headerLeft'>
          <span className='headerTitle'>Neody</span>
        </div>
        <div className='headerRight'>
          <WeekPoint/>
        </div>
    </div>
  )
}

export default Header