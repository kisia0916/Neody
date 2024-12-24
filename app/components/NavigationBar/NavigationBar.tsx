"use client"
import React, { useState } from 'react'
import "./NavigationBar.css"
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function NavigationBar() {
    const pathname = usePathname()
    const router = useRouter()
    const ignorePaths = [
        "/timer",
    ]
    const [nowNavigationStatus,setNowNavigationStatus] = useState("home")
    const navigatePage = (path:string)=>{
        router.push(path)
    }
  return (
    <>
        {ignorePaths.includes(pathname) === false?
            <div className='NavigationBarMain'>
                <button className='NavigationBarButton' onClick={()=>navigatePage("/")}>
                    <img src="/Icons/home_5_fill (2).svg" className='NavigationBarIcon'/>
                </button>
                <button className='NavigationBarButton'>
                    <img src="/Icons/VIP_2_line.svg" className='NavigationBarIcon'/>
                </button>
                <button className='NavigationBarButton'>
                    <img src="/Icons/emoji_line.svg" className='NavigationBarIcon'/>
                </button>
                <button className='NavigationBarButton' onClick={()=>navigatePage("/profile/fumi0916")}>
                    <img src="/Icons/user_2_line.svg" className='NavigationBarIcon'/>
                </button>
            </div>:<></>
        }
    </>
  )
}

export default NavigationBar