'use client'

import Image from 'next/image'
import type { RootState } from './GlobalRedux/store'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { openLingTang } from './GlobalRedux/Features/appStates/appStateSlice'
import { useRouter } from 'next/navigation'
import CustomButton from './components/CustomButton'

export default function Home() {
  const isOpened = useSelector((state: RootState) => state.appState?.isOpen)
  const dispatch = useDispatch()
  const router = useRouter()
  const [guideIsVisible, setguideIsVisible] = useState<boolean>(true)
  const [isClickNextButton, setClickNextButton] = useState<boolean>(false)
  const handleBtn = () => {
    setguideIsVisible(false)
    console.log('clicked understand btn')
  }
  const handleAboutBtn = () => {
    setguideIsVisible(true)
    console.log('clicked about btn')
  }
  const handleNextBtn = () => {
    setClickNextButton(true)
    console.log('clicked next btn')
  }
  useEffect(() => {
    if (isClickNextButton) {
      router.push('/badfortune_page')
    }
    setClickNextButton(false)
  }, [isClickNextButton, router])
  const centerStyle = (topValue: string): React.CSSProperties => ({
    position: 'absolute',
    top: topValue,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  })

  return (
    <div className="relative">
      <div className="w-screen h-screen relative">
        <Image
          src="/Home_page.gif"
          alt="Homepage"
          layout="fill"
          objectFit="cover"
        />
        {guideIsVisible && ( // 條件渲染區塊，只有在 isVisible 為 true 時才會渲染
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '70%',
              height: '70%',
              padding: '30px',
              backgroundColor: 'white',
              borderRadius: '15px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              zIndex: 20,
              textAlign: 'center',
            }}>
            <h1 style={{ color: '#7814C8' }}>關於靈堂</h1>
            <p style={{ color: 'black', marginTop: '20px' }}>
              在報仇靈堂可使用善根，對特定具有惡的人報仇，每三個善根可執行一次。
            </p>
            <p style={{ color: 'black', marginTop: '20px' }}>
              透過抽籤獲得適宜的報仇，並以誠心完成靈堂所派予的指事，在報仇靈堂中，需準備指定的藥水，請依指示調製。寫下具體對惡人的懲罰，最後上交符咒，便能完成儀式，完成報仇。
            </p>
            <div style={centerStyle('88%')}>
              <CustomButton
                widthValue={50}
                onClick={handleBtn}
                buttonText="我了解了"
              />
            </div>
          </div>
        )}
        {!guideIsVisible && (
          <div>
            <div style={centerStyle('82%')}>
              <CustomButton
                widthValue={50}
                onClick={handleNextBtn}
                buttonText="舉行報仇儀式"
              />
            </div>
            <div style={centerStyle('90%')}>
              <CustomButton
                backgroundColor="white"
                opacityValue={0.8}
                textColor="grey"
                widthValue={50}
                onClick={handleAboutBtn}
                buttonText="關於報仇靈堂"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
