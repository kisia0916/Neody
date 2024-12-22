"use client"
import React, { useState } from 'react'
import "./NavigationBar.css"

function NavigationBar() {
    const [nowNavigationStatus,setNowNavigationStatus] = useState("home")
  return (
    <div className='NavigationBarMain'>
        <button className='NavigationBarButton'>
            <img src="/Icons/home_5_fill (2).svg" className='NavigationBarIcon'/>
        </button>
        <button className='NavigationBarButton'>
            <img src="/Icons/VIP_2_line.svg" className='NavigationBarIcon'/>
        </button>
        <button className='NavigationBarButton'>
            <img src="/Icons/emoji_line.svg" className='NavigationBarIcon'/>
        </button>
        <button className='NavigationBarButton'>
            <img src="/Icons/user_2_line.svg" className='NavigationBarIcon'/>
        </button>
    </div>
  )
}

export default NavigationBar