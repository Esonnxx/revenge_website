'use client'
import Image from 'next/image'
import CustomButton from '../components/CustomButton'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../GlobalRedux/store'
import { useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'
const Ballpage: React.FC = () => {
  const [isClickNextButton, setClickNextButton] = useState<boolean>(false)
  const [isClickExcuteButton, setClickExcuteButton] = useState<boolean>(false)
  const router = useRouter()

  const handleExcuteButton = () => {
    setClickExcuteButton(true)
    console.log('clicked next btn')
    console.log(isClickExcuteButton)
  }
  const handleNextButton = () => {
    console.log('clicked next btn')
    setClickNextButton(true)
    console.log()
  }

  useEffect(() => {
    if (isClickNextButton) {
      router.push('/produce_page')
    }
    setClickNextButton(false)
  }, [isClickNextButton, router])
  return (
    <main>
      <div className="relative">
        <div className="w-screen h-screen relative">
          <Image
            src="/Home_page.gif"
            alt="Homepage"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>

        {!isClickExcuteButton && (
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)  scale(2)',
            }}>
            <Image
              src="/badcharm.png"
              alt="badcharm"
              layout="fixed"
              width={300}
              height={300}
              objectFit="contain"
              onClick={handleExcuteButton}
            />
          </div>
        )}

        {!isClickExcuteButton && (
          <div
            className="text-xl text-white"
            style={{
              textAlign: 'center',
              position: 'absolute',
              top: '70%',
              right: '40%',
            }}>
            <p>身心痠痛符</p>
          </div>
        )}
        {!isClickExcuteButton && (
          <div
            className="text-xl text-white"
            style={{
              position: 'absolute',
              top: '85%',
              right: '32.5%',
            }}>
            <button onClick={handleExcuteButton}>點擊執行今日報仇</button>
          </div>
        )}

        {isClickExcuteButton && (
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
            <h1 style={{ color: 'purple' }}>今日報仇</h1>
            <div className="ml-4">
              <Image
                src="/badcharm.png"
                alt="badcharm"
                layout="fixed"
                width={200}
                height={200}
                objectFit="contain"
              />
            </div>
            <div className="mt-2" style={{ color: 'black' }}>
              <p>身心痠痛符</p>
              <div className="flex items-center mt-2">
                <div className="flex-grow h-px bg-purple-500"></div>
                <div className="mx-4 text-purple-500">儀式方法</div>
                <div className="flex-grow h-px bg-purple-500"></div>
              </div>
            </div>
            <p style={{ color: 'black', marginTop: '10px' }}>
              想像過去遭受的辛酸場景，調製所需符水"心酸"並喝下，之後依照指示繪製符咒，將對惡人的報仇內容具體寫下。
            </p>
            <p style={{ color: 'black', marginTop: '10px' }}>
              最後把符咒傳送即完成報仇儀式。
            </p>
            <div
              style={{
                position: 'absolute',
                top: '90%',
                width: '100%',
                right: '1%',
              }}>
              <CustomButton
                widthValue={50}
                onClick={handleNextButton}
                buttonText="開始"
              />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
export default Ballpage
