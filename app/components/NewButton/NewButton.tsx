"use client"
import React from 'react'
import "./NewButton.css"
import { usePathname, useRouter } from 'next/navigation'

function NewButton() {
    const pathname = usePathname()
    const router = useRouter()
    const ignorePaths = [
        "/timer",
    ]
    const navigatePage = ()=>{
      router.push('/timer')
  }
  return (
    <>
      {ignorePaths.includes(pathname) === false?
        <button className='NewButton' onClick={navigatePage}>
            <img src="/Icons/stopwatch_line.svg" className='NewButtonIcon'/>
        </button>:<></>
      }
    </>
  )
}

export default NewButton