'use client'
import Image from 'next/image'
import CustomButton from '../components/CustomButton'

import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import './flash.css'

const centerStyle = (topValue: string): React.CSSProperties => ({
  position: 'absolute',
  top: topValue,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
})

const FlashPage: React.FC = () => {
  const [opacity, setOpacity] = useState<number>(0.5)
  const [increasing, setIncreasing] = useState<boolean>(true)
  const [isClickNextButton, setClickNextButton] = useState<boolean>(false)
  const handleClickToNextPage = () => {
    setClickNextButton(true)
  }
  const router = useRouter()
  useEffect(() => {
    if (isClickNextButton) {
      router.push('/write_page')
    }
    setClickNextButton(false)
  }, [isClickNextButton, router])
  useEffect(() => {
    const duration = 10000
    console.log(opacity)
    const buttonTimer = setTimeout(() => {
      setClickNextButton(true)
    }, 10000)

    const timer = setInterval(() => {
      if (increasing) {
        setOpacity((prevOpacity) => prevOpacity + 0.1)
      } else {
        setOpacity((prevOpacity) => prevOpacity - 0.1)
      }
      if (opacity >= 1 || opacity <= 0.5) {
        setIncreasing((prevIncreasing) => !prevIncreasing)
      }
    }, duration / 20)

    return () => clearInterval(timer)
  }, [opacity])

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

          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'black',
              opacity: opacity,
            }}></div>
          <div
            style={{
              position: 'absolute',
              top: '80%',
              right: '-50%',
              transform: 'translate(-50%, -50%) ',
              width: '100%',
              textAlign: 'center',
            }}>
            <h1>調整你的呼吸，尋找你對未來的想像</h1>
          </div>
          {isClickNextButton && (
            <div style={centerStyle('88%')}>
              <CustomButton
                widthValue={50}
                onClick={handleClickToNextPage}
                buttonText="獻上祭品"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default FlashPage
