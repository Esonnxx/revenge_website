'use client'

import Image from 'next/image'
import type { RootState } from './GlobalRedux/store'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { openLingTang } from './GlobalRedux/Features/appStates/appStateSlice'
import { useRouter } from 'next/navigation'

export default function Home() {
  const isOpened = useSelector((state: RootState) => state.appState?.isOpen)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleOpenLingTang = () => {
    dispatch(openLingTang())
    console.log('clicked')
  }
  useEffect(() => {
    if (isOpened) {
      router.push('/ball_page')
    }
  }, [isOpened, router]) //push to ball page if the state has been updated

  return (
    <div className="relative">
      <div className="w-screen h-screen relative">
        <Image
          src="/Home_page.png"
          alt="Homepage"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white bg-opacity-80 rounded-lg">
          <input
            type="text"
            className="w-50 p-3 rounded-md outline-none"
            placeholder="輸入解鎖碼"
          />
        </div>
        <button
          onClick={handleOpenLingTang}
          style={{
            position: 'absolute',
            top: '58%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            padding: '15px',
            borderRadius: '20px',
            outline: 'none',
            color: 'white',
            fontWeight: 'bold',
            backgroundImage: 'linear-gradient(to right, #1A1F98, #5EABB0)',
          }}>
          開啟靈堂
        </button>
      </div>
    </div>
  )
}
