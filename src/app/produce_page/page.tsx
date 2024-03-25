'use client'
import Image from 'next/image'
import CustomButton from '../components/CustomButton'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../GlobalRedux/store'
import { useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'
const Ballpage: React.FC = () => {
  const isClickPackageBtn = useSelector(
    (state: RootState) => state.packContainerState?.isclickBtn
  )
  const [isClickExcuteButton, setClickExcuteButton] = useState<boolean>(false)
  const router = useRouter()

  const handleExcuteButton = () => {
    setClickExcuteButton(true)
    console.log('clicked next btn')
    console.log(isClickExcuteButton)
  }
  const handleNextButton = () => {
    console.log('clicked next btn')
    console.log()
  }

  // useEffect(() => {
  //   if (isClickNextButton) {
  //     router.push('/charm_page')
  //   }
  //   setClickNextButton(false)
  // }, [isClickNextButton, router])
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
              style={{ left: '4%', top: '10%' }}
              className="absolute rounded-2xl w-11/12 h-1/6 bg-stone-600 opacity-60 text-center p-2">
              <p>符水</p>
              <p>辛酸</p>
              <p>
                給予使用身心痠痛符者能量，能夠注入與身心疼痛相關的報仇並傳遞
              </p>
            </div>
            <div
              style={{ left: '15%', top: '30%' }}
              className="absolute text-center">
              <p className="text-xl">調製符水</p>
              <p>請將杯子放置於凹槽中，符水會開始調製</p>
            </div>
            <div
              style={{ left: '4%', top: '40%', height: '40%' }}
              className="absolute rounded-2xl w-11/12  bg-stone-600 opacity-60 text-center"></div>
          </div>
          <div className="absolute" style={{ top: '90%', width: '100%' }}>
            <CustomButton
              widthValue={50}
              onClick={handleNextButton}
              buttonText="下一步"
            />
          </div>
        </div>

        <div
          style={{
            left: '25%',
          }}
          className="absolute color-white top-8 text-center leading-loose">
          <p>*執行報仇時請勿離開靈堂*</p>
          <p>今日報仇</p>
          <p>身心痠痛符</p>
        </div>
      </div>
    </main>
  )
}
export default Ballpage
