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

  const handleNextButton = () => {
    console.log('clicked next btn')
    setClickNextButton(true)
    console.log()
  }

  useEffect(() => {
    if (isClickNextButton) {
      router.push('/end_page')
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
          <div
            style={{
              top: '16.66%',
            }}
            className="absolute left-0 w-full h-5/6 bg-black opacity-100 text-center">
            <div
              style={{ left: '12%', top: '2%' }}
              className="absolute text-center">
              <p className="text-xl">傳送符咒</p>
              <p>請將完成的符咒放在傳送口，將報仇傳送出去</p>
            </div>
            <div
              style={{ left: '4%', top: '12%', height: '40%' }}
              className="absolute rounded-2xl w-11/12  bg-stone-600 opacity-60 text-center">
              <Image
                src="/4.gif"
                alt="Homepage"
                layout="fixed"
                width={400}
                height={400}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="absolute" style={{ top: '90%', width: '100%' }}>
            <CustomButton
              widthValue={50}
              onClick={handleNextButton}
              buttonText="完成"
            />
          </div>
        </div>

        <div
          style={{
            left: '25%',
          }}
          className="absolute color-white top-4 text-center leading-loose">
          <p>*執行報仇時請勿離開靈堂*</p>
          <p>今日報仇</p>
          <p>身心痠痛符</p>
        </div>
      </div>
    </main>
  )
}
export default Ballpage
