import React from 'react'
import WeekPoint from '../../PointViewer/WeekPoint/WeekPoint'
import "./MainHeader.css"

function MainHeader() {
  return (
    <div className='headerMain'>
    <div className='headerLeft'>
      <span className='headerTitle'>Neody</span>
    </div>
    <div className='headerRight'>
      <WeekPoint type='S'/>
        </div>
    </div>
  )
}

export default MainHeader