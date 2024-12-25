"use client"
import React from 'react'
import "./Header.css"
import { usePathname } from 'next/navigation'
import MainHeader from './MainHeader/MainHeader'
import TimeHeader from './TimerHeader/TimeHeader'
import ProfileHeader from './ProfileHeader/ProfileHeader'

function Header() {
  const pathname = usePathname()

  return (
    <>
      {pathname === "/"?<MainHeader/>:<></>}
      {pathname === "/timer"?<TimeHeader/>:<></>}
      {pathname.split("/")[1] === "profile"?<ProfileHeader/>:<></>}
    </>
  )
}

export default Header