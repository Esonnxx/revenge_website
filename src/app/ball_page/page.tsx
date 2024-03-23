'use client'
import Image from 'next/image'
import CustomButton from '../components/CustomButton'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../GlobalRedux/store'
import { useRouter } from 'next/navigation'
import { clickPackContainer } from '../GlobalRedux/Features/appStates/packContainerSlice'
import { useEffect, useState } from 'react'
const Ballpage: React.FC = () => {
  const isClickPackageBtn = useSelector(
    (state: RootState) => state.packContainerState?.isclickBtn
  )
  const dispatch = useDispatch()
  const router = useRouter()
  const handlePackagingEmotionBallBtn = () => {
    dispatch(clickPackContainer())
    console.log('click packaging')
  }

  useEffect(() => {
    if (isClickPackageBtn) {
      router.push('/select_container_page')
    }
  }, [isClickPackageBtn, router]) //push to ball page if the state has been updated
  const centerStyle = (topValue: string): React.CSSProperties => ({
    position: 'absolute',
    top: topValue,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  })

  return (
    <main>
      <div className="relative">
        <div className="w-screen h-screen relative">
          <Image
            src="/ballpageBg.gif"
            alt="Homepage"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '32%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
          <h3 className="text-white text-2xl font-bold text-center h-10 ">
            獲得
          </h3>
          <h2 className="text-white text-3xl font-bold">情緒球</h2>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
          <Image
            src="/emotionBall.png"
            alt="emotionBall"
            layout="fixed"
            width={250}
            height={250}
            objectFit="contain"
          />
        </div>
        <div style={centerStyle('75%')}>
          <CustomButton
            widthValue={30}
            onClick={handlePackagingEmotionBallBtn}
            buttonText="封裝情緒罐"
          />
        </div>
      </div>
    </main>
  )
}
export default Ballpage
