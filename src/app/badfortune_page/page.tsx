'use client'
import Image from 'next/image'
import CustomButton from '../components/CustomButton'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../GlobalRedux/store'
import { useRouter } from 'next/navigation'
import { clickPackContainer } from '../GlobalRedux/Features/appStates/packContainerSlice'
import { useEffect, useState } from 'react'
const BadfortunePage: React.FC = () => {
  const isClickPackageBtn = useSelector(
    (state: RootState) => state.packContainerState?.isclickBtn
  )
  const [isClickNextButton, setClickNextButton] = useState<boolean>(false)
  const router = useRouter()

  const handleNextBtn = () => {
    setClickNextButton(true)
    console.log('clicked next btn')
    console.log(isClickNextButton)
  }

  useEffect(() => {
    if (isClickNextButton) {
      router.push('/charm_page')
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

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
          <Image
            src="/badfortune.gif"
            alt="badfortune"
            layout="fixed"
            width={250}
            height={250}
            objectFit="contain"
            onClick={handleNextBtn}
          />
          <div className="text-xl" style={{ textAlign: 'center' }}>
            <p>惡籤</p>
          </div>
          <div className="text-xl" style={{ textAlign: 'center' }}>
            <button className="mt-44" onClick={handleNextBtn}>
              點擊抽取今日報仇
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
export default BadfortunePage
